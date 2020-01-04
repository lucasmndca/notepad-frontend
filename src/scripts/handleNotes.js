let ButtonId = ""

const openNoteMenu = e => {
	let menuId = e.id + e.id
	let getMenu = document.getElementById(menuId)
	getMenu.style.display = 'block'
	setTimeout(() => { 
		e.style.display = 'none' 
		setButtonId(e)
	}, 800)
	
}

const closeNoteMenu = e => {
	let menuElement = e.parentElement
	let noteButton = ButtonId
	menuElement.style.display = 'none'
	noteButton.className = 'note-button w3-animate-opacity'
	setTimeout(() => { 
		noteButton.style.display = 'block' 
	}, 100)
}

const setButtonId = e => {
	ButtonId = e
}
