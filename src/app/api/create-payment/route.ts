import { NextResponse } from "next/server";

const options = {
  hostname: 'api.paystack.co',
  port: 443,
  path: '/transaction/initialize',
  method: 'POST',
  headers: {
    "Authorization": `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
    'Content-Type': 'application/json'
  }
}

const details = {
  email: "test@gmail.com",
  amount: "200000",
  callback_url: "http://localhost:3000/success"
}

export async function GET(request: Request) {
  console.log("Creating payment...")

  var res = await fetch(`https://${options.hostname}${options.path}`, {
    method: options.method,
    headers: options.headers,
    body: await JSON.stringify(details)
  })

  if (!res.ok)
    return NextResponse.json(null, { status: 400 })

  var data = await res.json()
  return NextResponse.json({ authorization_url: data.data.authorization_url }, { status: 200 })
}