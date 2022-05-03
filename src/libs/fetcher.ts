const fetcher = async (...args: [string, any]) => {
	return fetch(...args).then((res) => res.json())
}
export default fetcher
