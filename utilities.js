export function setCopyright() {
	const copyright = document.querySelector('.copyright')
	const date = new Date()
	const year = date.getFullYear()

	copyright.innerHTML = `<p>&copy;${year} - Gerafim Joaquim</p>`
}

const m = {
	top: 0,
	left: 0,
	behavior: 'smooth'
}
export function moveTo () {
	scrollTo(m)
}