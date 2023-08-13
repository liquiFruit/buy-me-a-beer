import { Button } from "@/components/ui/button"
import { useFetch } from "@/lib/use-fetch"
import Link from "next/link"

export default async function Pay() {
	var res: any = await useFetch("/api/create-payment")
	res = await res.json()

	return (
		<Button asChild>
			<Link href={res.authorization_url}>Pay now</Link>
		</Button>
	)
}
