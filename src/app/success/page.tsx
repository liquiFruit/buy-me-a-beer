import { getServerSession } from "next-auth"
import { options } from "../api/auth/[...nextauth]/options"
import Link from "next/link"
import { redirect } from "next/navigation"

import { getDonationByEmail } from "@/lib/get-donation-by-email"
import { GetBeerByID } from "@/lib/get-beer-by-id"
import SignOutButton from "@/components/sign-out-button"

import { Button } from "@/components/ui/button"
import {
	Card,
	CardHeader,
	CardTitle,
	CardDescription,
	CardContent,
	CardFooter,
} from "@/components/ui/card"

export default async function SuccessfullPayment() {
	// Check auth
	const session = await getServerSession(options)
	if (!session || !session.user || !session.user.email) redirect("/")

	// Check donation
	const donation = await getDonationByEmail(session.user.email)
	if (!donation || !donation.beerID)
		return (
			<div>
				error: you have not donated. if this is a mistake, perhaps the
				server is still waiting for confirmation from paystack.
			</div>
		)

	// Get beer
	const beer = await GetBeerByID(donation.beerID)
	if (!beer) return <div>error: cannot find beer</div>

	return (
		<main className="w-full h-screen grid place-items-center">
			<Card className="max-w-md">
				<CardHeader>
					<CardTitle>
						Thanks,{" "}
						<span className="text-primary">
							{session.user.name}
						</span>
						!
					</CardTitle>
					<CardDescription>
						Payment was completed successfully.
					</CardDescription>
				</CardHeader>

				<CardContent>
					<p>
						We thank you for your donation, and pray that you don't
						want it back.
					</p>

					<div className="flex flex-row gap-4 items-baseline mt-4 text-foreground/80">
						<p>1x</p>
						<p className="text-xl font-medium text-foreground">
							{beer.name}
						</p>
						<p className="ml-auto">
							R{(beer.price / 100).toFixed(2)}
						</p>
					</div>
				</CardContent>

				<CardFooter className="children:w-full">
					<SignOutButton />
				</CardFooter>
			</Card>
		</main>
	)
}
