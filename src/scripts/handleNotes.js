<<<<<<< HEAD
<<<<<<< HEAD
=======
let ButtonId = ""

>>>>>>> ef0bd9ca86a6d4fba76510e0782b376837518a72
=======
>>>>>>> master
const openNoteMenu = e => {
	let menuId = e.id + e.id
	let getMenu = document.getElementById(menuId)
	getMenu.style.display = 'block'
	setTimeout(() => { 
		e.style.display = 'none' 
<<<<<<< HEAD
<<<<<<< HEAD
	}, 800)
	localStorage.setItem('lastButtonId', e.id)
=======
		setButtonId(e)
	}, 800)
	
>>>>>>> ef0bd9ca86a6d4fba76510e0782b376837518a72
=======
	}, 800)
	localStorage.setItem('lastButtonId', e.id)
>>>>>>> master
}

const closeNoteMenu = e => {
	let menuElement = e.parentElement
<<<<<<< HEAD
<<<<<<< HEAD
	let noteButton = document.getElementById(localStorage.getItem('lastButtonId'))
=======
	let noteButton = ButtonId
>>>>>>> ef0bd9ca86a6d4fba76510e0782b376837518a72
=======
	let noteButton = document.getElementById(localStorage.getItem('lastButtonId'))
>>>>>>> master
	menuElement.style.display = 'none'
	noteButton.className = 'note-button w3-animate-opacity'
	setTimeout(() => { 
		noteButton.style.display = 'block' 
	}, 100)
}
<<<<<<< HEAD
<<<<<<< HEAD
=======

const setButtonId = e => {
	ButtonId = e
}
>>>>>>> ef0bd9ca86a6d4fba76510e0782b376837518a72
=======
>>>>>>> master
