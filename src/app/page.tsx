import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Home() {
	return (
		<div className="h-screen w-screen flex flex-col justify-center items-center gap-4">
			<h1 className="font-title font-900 text-3xl">Buy Me a Beer</h1>
			<Button asChild>
				<Link href={"/pay"}>Pay now</Link>
			</Button>
		</div>
	)
}
