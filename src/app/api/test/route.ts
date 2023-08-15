import { createDonation } from "@/lib/create-donation";

export async function GET(req: Request) {
  await createDonation((Math.random() * 999999).toString(), 1)
}