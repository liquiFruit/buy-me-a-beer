"use server"

import { usePaystack } from "./paystack/use-paystack"

export async function createPayment(email: string, amount: number): Promise<string | null> {
  var response = await usePaystack({
    endpoint: "/transaction/initialize",
    body: {
      email, amount,
    },
    callbackUrl: true
  })

  if (!response.ok) return null

  var { data } = await response.json()
  return data.authorization_url
}