const openNoteMenu = e => {
	let menuId = e.id + e.id
	let getMenu = document.getElementById(menuId)
	getMenu.style.display = 'block'
	setTimeout(() => { 
		e.style.display = 'none' 
	}, 800)
	localStorage.setItem('lastButtonId', e.id)
}

const closeNoteMenu = e => {
	let menuElement = e.parentElement
	let noteButton = document.getElementById(localStorage.getItem('lastButtonId'))
	menuElement.style.display = 'none'
	noteButton.className = 'note-button w3-animate-opacity'
	setTimeout(() => { 
		noteButton.style.display = 'block' 
	}, 100)
}