"use server"

import { db, Beer, beers } from "@/db"

export async function getAllBeers(): Promise<Beer[]> {
  return await db.select().from(beers).all()
}