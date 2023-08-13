import { useFetch } from "@/lib/use-fetch"

export default async function Pay() {
	var res: any = await useFetch("/api/create-payment")
	res = await res.json()
	res = await JSON.stringify(res)
	return <div>{res}</div>
}
