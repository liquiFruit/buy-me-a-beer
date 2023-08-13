export const useFetch: typeof fetch = async (endpoint, options) => {
	return await fetch(process.env.BASE_URL!.concat(endpoint as string), {
		...options,
		cache: "no-cache",
	})
}
