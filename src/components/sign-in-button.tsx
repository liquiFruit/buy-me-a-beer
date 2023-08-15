"use client"

import { signIn } from "next-auth/react"
import { Button } from "./ui/button"

export default function SignInButton({
	callbackUrl,
}: {
	callbackUrl?: string
}) {
	return (
		<Button
			variant={"default"}
			onClick={async () => {
				await signIn("credentials", {})
			}}
		>
			Sign in
		</Button>
	)
}
