import { db, donations, } from "@/db"

export async function createDonation(userEmail: string, beerID: number) {
  try {
    const donation = await db
      .insert(donations)
      .values({ userEmail: userEmail, beerID })
      .run()

    return true
  } catch (error) {
    console.log("error creating donation:")
    console.log(error)
    return false
  }
}