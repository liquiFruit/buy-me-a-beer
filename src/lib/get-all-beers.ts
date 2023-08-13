import { db, Beer, beers } from "@/db"

export async function getAllBeers() {
  return await db.select().from(beers).all()
}