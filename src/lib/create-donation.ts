"use server"

import { db, donations, } from "@/db";

export async function createDonation(userEmail: string, beerID: number) {
  try {
    const donation = await db
      .insert(donations)
      .values({ userEmail, beerID })
      .run()

    return true
  } catch (error) { return false }
}