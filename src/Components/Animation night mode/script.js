window.addEventListener('load', () => {
	let main = document.querySelector('.main')
	let box1 = document.querySelector('.box_one')
	let box2 = document.querySelector('.box_two')
	let container = document.querySelector('.container')
	main.addEventListener('click', () => {
		box1.classList.toggle('prop1')
		box1.classList.toggle('prop2')
		box2.classList.toggle('prop1')
		box2.classList.toggle('prop2')
		container.classList.toggle('dark_mode')
	})
})