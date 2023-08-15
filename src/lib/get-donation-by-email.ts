"use server"

import { db, donations, Donation } from "@/db";
import { eq } from "drizzle-orm";

export async function GetDonationByEmail(email: string): Promise<Donation | undefined> {
  const donation = await db
    .selectDistinct().from(donations)
    .where(eq(donations.userEmail, email)).get()

  return donation
}