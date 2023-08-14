"use server"

import crypto from "crypto"
import { NextResponse } from "next/server"


async function handler(req: Request) {
  // Validate event
  const json = await req.json()

  const hash = crypto
    .createHmac('sha512', process.env.PAYSTACK_SECRET_KEY!)
    .update(JSON.stringify(json)).digest('hex')

  if (hash !== req.headers.get("x-paystack-signature"))
    return NextResponse.json({ error: "Not authorized." }, { status: 403 })

  // Handle webhook
  console.log("Handling webhook event: " + json.event)

  // Respond with success
  return NextResponse.json(null, { status: 200 })
}

export { handler as GET, handler as POST }