import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"
import Link from "next/link"

import { options } from "@/app/api/auth/[...nextauth]/options"
import { createPayment } from "@/lib/create-payment"
import { GetBeerByID } from "@/lib/get-beer-by-id"

import { Button } from "@/components/ui/button"
import {
	Card,
	CardHeader,
	CardTitle,
	CardDescription,
	CardContent,
	CardFooter,
} from "@/components/ui/card"
import { getDonationByEmail } from "@/lib/get-donation-by-email"

export default async function Pay({ params }: { params: { beerID: number } }) {
	// Check auth
	const session = await getServerSession(options)
	if (!session || !session.user || !session.user.email)
		return redirect(`/api/auth/signin?callback=/pay/${params.beerID}`)

	// Check donator
	const donation = await getDonationByEmail(session.user.email)
	if (donation) return redirect("/success")

	// Check beer
	const beer = await GetBeerByID(params.beerID)
	if (!beer)
		return <div>error getting beer information: beer does not exist</div>

	// Create payment_url
	const payment_url = await createPayment(session.user.email, beer)
	if (!payment_url) return <div>error generating payment url</div>

	return (
		<div className="h-screen w-screen grid place-items-center">
			<Card>
				<CardHeader>
					<CardTitle>Proceed to payment</CardTitle>
					<CardDescription>
						Payment handled securely by{" "}
						<span className="text-primary/80">Paystack</span>
					</CardDescription>
				</CardHeader>

				<CardContent>
					<div className="flex flex-row justify-between items-end">
						<p className="text-xl font-medium">{beer.name}</p>
						<p>R{(beer.price / 100).toFixed(2)}</p>
					</div>
				</CardContent>

				<CardFooter>
					<Button asChild className="w-full">
						<Link href={payment_url}>Pay</Link>
					</Button>
				</CardFooter>
			</Card>
		</div>
	)
}
