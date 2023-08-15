

import { Beer } from "@/db"
import { usePaystack } from "./paystack/use-paystack"

export async function createPayment(email: string, beer: Beer): Promise<string | null> {
  var response = await usePaystack({
    endpoint: "/transaction/initialize",
    body: {
      email,
      amount: beer.price,
      metadata: {
        beerID: beer.id
      }
    },
    callbackUrl: true
  })

  if (!response.ok) return null

  var { data } = await response.json()
  return data.authorization_url
}