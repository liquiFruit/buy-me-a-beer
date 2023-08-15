import { getServerSession } from "next-auth"

import { getAllBeers } from "@/lib/get-all-beers"
import { options } from "./api/auth/[...nextauth]/options"

import BeerPicker from "@/components/beer-picker"
import SignOutButton from "@/components/sign-out-button"
import SignInButton from "@/components/sign-in-button"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { redirect } from "next/navigation"
import { getDonationByEmail } from "@/lib/get-donation-by-email"

export default async function Home() {
	const beers = await getAllBeers()

	const session = await getServerSession(options)

	// Check if already donated
	if (
		session?.user?.email &&
		(await getDonationByEmail(session.user.email))?.beerID
	)
		redirect("/success")

	return (
		<div className="h-screen w-screen flex flex-col justify-center items-center gap-4">
			<h1 className="font-title font-900 text-3xl">Buy Me a Beer</h1>

			<BeerPicker beers={beers} />
		</div>
	)
}
