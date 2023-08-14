import { AuthProvider } from "@/context/auth-provider"
import "./globals.css"
import type { Metadata } from "next"

export const metadata: Metadata = {
	title: "Buy Me a Beer",
	description: "A Next.js 13 Paystack example",
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en" className="dark">
			<body>
				<AuthProvider>{children}</AuthProvider>
			</body>
		</html>
	)
}
