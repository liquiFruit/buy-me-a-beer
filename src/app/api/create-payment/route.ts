import { NextResponse } from "next/server";

const options = {
  hostname: 'api.paystack.co',
  port: 443,
  path: '/transaction/initialize',
  method: 'POST',
  headers: {
    Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
    'Content-Type': 'application/json'
  }
}

export async function GET(request: Request) {
  console.log("hit")
  return NextResponse.json({ success: true }, { status: 200 })
}