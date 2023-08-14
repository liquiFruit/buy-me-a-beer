import { getAllBeers } from "@/lib/get-all-beers"
import BeerPicker from "@/components/beer-picker"

export default async function Home() {
	const beers = await getAllBeers()

	return (
		<div className="h-screen w-screen flex flex-col justify-center items-center gap-4">
			<h1 className="font-title font-900 text-3xl">Buy Me a Beer</h1>

			<BeerPicker beers={beers} />
		</div>
	)
}
