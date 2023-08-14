import { getServerSession } from "next-auth"
import { options } from "../api/auth/[...nextauth]/options"
import Link from "next/link"

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
	const session = await getServerSession(options)
	if (!session || !session.user || !session.user.email)
		return <div>error: not authenticated</div>

	return (
		<main className="w-full h-screen grid place-items-center">
			<Card>
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
					We thank you for your donation, and pray that you don't want
					it back.
				</CardContent>

				<CardFooter>
					<Button asChild className="w-full">
						<Link href={"/"}>Go to home</Link>
					</Button>
				</CardFooter>
			</Card>
		</main>
	)
}
