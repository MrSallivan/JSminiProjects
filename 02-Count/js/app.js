const items = document.querySelectorAll('.countdown-item > h4')
const countdown = document.querySelector('.countdown')

let countDownDate = new Date(2025, 08, 18, 23, 14, 0).getTime()
function getCountTime() {
	const now = new Date().getTime()
	const distance = countDownDate - now

	const oneDay = 24 * 60 * 60 * 1000
	const oneHour = 60 * 60 * 1000
	const oneMinute = 60 * 1000

	let days = Math.floor(distance / oneDay)
	let hours = Math.floor((distance % oneDay) / oneHour)
	let minutes = Math.floor((distance % oneHour) / oneMinute)
	let seconds = Math.floor((distance % oneMinute) / 1000)

	let values = [days, hours, minutes, seconds]
	
	
	items.forEach(function(item, index) {
		item.textContent = values[index]
	})
	if (distance < 0) {
		clearInterval(count)
		countdown.innerHTML = `
		<h2 class="timedown">Время вышло</h2>
		`
	}
}
let count = setInterval(getCountTime, 1000)
