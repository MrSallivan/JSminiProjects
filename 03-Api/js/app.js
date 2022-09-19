const btn = document.querySelector('.btn')
const image = document.querySelector('.img')
const url = 'http://aws.random.cat/meow'

async function fetchServer() {
	try {
		const response = await fetch(url)
		const data = await response.json()
		image.src = data.file
		
	} catch (error) {
		console.log(error)
	}
}
btn.addEventListener('click', () => {
	let isLoaded = image.complete
	if (isLoaded) {
		fetchServer()
	}
})