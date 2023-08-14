"use server"

const paystack_options = {
  hostname: 'api.paystack.co',
  port: 443,
  path: '/transaction/initialize',
  method: 'POST',
  headers: {
    "Authorization": `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
    'Content-Type': 'application/json'
  }
}

export async function createPayment(email: string, amount: number): Promise<string | null> {
  var response = await fetch(`https://${paystack_options.hostname}${paystack_options.path}`, {
    method: paystack_options.method,
    headers: paystack_options.headers,
    body: await JSON.stringify({
      email, amount,
      callback_url: `${process.env.BASE_URL}/success`
    })
  })

  if (!response.ok) return null

  var { data } = await response.json()
  return data.authorization_url
}