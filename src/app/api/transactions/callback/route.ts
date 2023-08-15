import { NextResponse } from "next/server"
import { getServerSession } from "next-auth"

import { options } from "@/app/api/auth/[...nextauth]/options"
import { usePaystack } from "@/lib/paystack/use-paystack"
import { createDonation } from "@/lib/create-donation"

async function handler(req: Response) {
  // Check reference
  const reference = new URL(req.url).searchParams.get("reference")
  if (!reference) return NextResponse.json(
    { error: "No transaction reference provided" }, { status: 400 })

  // Check auth
  const session = await getServerSession(options);
  if (!session || !session.user) return NextResponse.json(
    { error: "Unauthenticated." }, { status: 401 })

  // Verify transaction
  const response = await usePaystack({
    endpoint: "/transaction/verify/",
    suffix: reference,
    method: "GET"
  })

  // Catch error
  if (!response.ok) {
    console.log("Unhandled error:")
    console.log(response)
    return NextResponse.json({ error: "Unhandled error." }, { status: 500 })
  }

  // Get transaction details
  const json = await response.json()
  const details = {
    paid: json.data.status,
    customerEmail: json.data.customer.email,
    beerID: json.data.metadata.beerID
  }

  // Check authorization
  if (details.customerEmail !== session.user.email!.toLowerCase()) return NextResponse.json(
    { error: "Unauthorized to view this transaction." }, { status: 403 })

  // Check transaction status
  if (!details.paid) return NextResponse.json(
    { status: "Transaction was not successfull." }, { status: 200 })

  // Create new donation
  if (!await createDonation(details.customerEmail, details.beerID)) return NextResponse.json(
    { error: `Unable to record donation. Use reference as POP. REF: ${reference}` })

  // Redirect successfully
  const redirect_url = new URL("/success", req.url)
  return NextResponse.redirect(redirect_url)
}

export { handler as GET, handler as POST }