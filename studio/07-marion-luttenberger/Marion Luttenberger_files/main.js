var comparison = document.querySelector('.comparison')
var imageb = document.querySelector('.image.b')

comparison.addEventListener('mousedown', function() {
	comparison.classList.add('is-active')
})

window.addEventListener('mouseup', function () {
	comparison.classList.remove('is-active')
})

comparison.addEventListener('mousemove', function (event) {
	if (comparison.classList.contains('is-active')) {
		console.log(event.offsetX)
		imageb.style.width = event.offsetX + 'px'
	}
})
