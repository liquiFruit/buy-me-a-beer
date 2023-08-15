"use client"

import { signOut } from "next-auth/react"
import { Button } from "./ui/button"

export default function SignOutButton({
	callbackUrl,
}: {
	callbackUrl?: string
}) {
	return (
		<Button
			variant={"secondary"}
			onClick={async () => {
				console.log("logging out")
				await signOut({ callbackUrl: callbackUrl ?? "/" })
			}}
		>
			Sign out
		</Button>
	)
}
