

import { db, Beer, beers } from "@/db"
import { eq } from "drizzle-orm"

export async function GetBeerByID(id: number): Promise<Beer | undefined> {
  const beer = await db.selectDistinct().from(beers).where(eq(beers.id, id)).get()
  return beer
}