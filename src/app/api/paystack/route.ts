import { NextResponse } from "next/server"

async function handler(req: Request) {
  console.log(await req.json())

  return NextResponse.json({}, { status: 200 })
}

export { handler as POST, handler as GET }