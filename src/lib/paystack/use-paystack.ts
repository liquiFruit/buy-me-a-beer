"use server"

const HOSTNAME = 'api.paystack.co'
const AUTH_HEADERS = {
  "Authorization": `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
  'Content-Type': 'application/json'
}
const CALLBACK_URL = `${process.env.BASE_URL}/api/transactions/callback`

type PaystackEndpoint = "/transaction/initialize" | "/transaction/verify/"

type IPaystackFetchOptions = {
  endpoint: PaystackEndpoint
  suffix?: string
  body?: object
  method?: string
  callbackUrl?: string | true
}


export async function usePaystack({ endpoint, suffix, method, body, callbackUrl }: IPaystackFetchOptions) {
  return fetch(`https://${HOSTNAME}${endpoint}${suffix ?? ""}`, {
    method: method ?? "POST",
    headers: AUTH_HEADERS,
    ... (body || callbackUrl) && {
      body: await JSON.stringify({
        ...body ?? {},
        ...callbackUrl && { callback_url: callbackUrl == true ? CALLBACK_URL : callbackUrl },
      })
    }
  })
}