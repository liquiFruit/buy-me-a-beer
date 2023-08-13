import { getAllBeers } from "@/lib/get-all-beers"
import { NextResponse } from "next/server"


export async function GET(req: Request) {
  return NextResponse.json(await getAllBeers(), { status: 200 })
}