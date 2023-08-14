"use client"

import { useState } from "react"
import Link from "next/link"

import { Beer } from "@/db"

import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function BeerPicker({ beers }: { beers: Beer[] }) {
	const [choice, setChoice] = useState<Beer>(beers[0])

	return (
		<>
			<div className="flex flex-row gap-4">
				{beers.map((beer) => (
					<Card
						onClick={() => setChoice(beer)}
						key={beer.id}
						className={cn(
							"w-1/2 cursor-pointer",
							choice.id == beer.id && "bg-foreground/5"
						)}
					>
						<CardHeader>
							<CardTitle>{beer.name}</CardTitle>
							<CardDescription>
								R{(beer.price / 100).toFixed(2)}
							</CardDescription>
						</CardHeader>
					</Card>
				))}
			</div>

			<Button asChild>
				<Link href={`/pay/${choice.id}`}>
					Pay now: R{(choice.price / 100).toFixed(2)}
				</Link>
			</Button>
		</>
	)
}
