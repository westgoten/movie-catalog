export default function isPageValid(string) {
	const regex = /\D/
	return !regex.test(string) && Number(string) > 0
}
