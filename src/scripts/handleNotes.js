const openNoteMenu = e => {
	if (validateLastButtonId()) {
		let menuId = '_' + e.id
		let getMenu = document.getElementById(menuId)
		getMenu.style.display = 'block'
		setTimeout(() => {
			e.style.display = 'none'
		}, 800)
		localStorage.setItem('lastButtonId', e.id)
		localStorage.setItem('isMenuOpen', true)
	}
}

const closeNoteMenu = e => {
	let menuElement = e.parentElement
	let noteButton = document.getElementById(localStorage.getItem('lastButtonId'))
	menuElement.style.display = 'none'
	noteButton.className = 'note-button w3-animate-opacity'
	setTimeout(() => {
		noteButton.style.display = 'block'
	}, 100)
	localStorage.setItem('isMenuOpen', false)
}

const validateLastButtonId = () => {
	if (localStorage.getItem('isMenuOpen') === 'true')
		return false
	else
		return true
}

const deleteNote = () => alert("Esta funcionalidade ainda não foi implementada")

const openAddNoteModal = () => {
	let modal = document.getElementsByClassName('note-add-modal-container')[0]
	modal.className = 'note-add-modal-container w3-animate-opacity'
	setTimeout(() => {
		modal.style.display = 'block'
		modal.style.opacity = '1'
	}, 200)
}

const closeAddNoteModal = () => {
	let modal = document.getElementsByClassName('note-add-modal-container')[0]
	modal.style.opacity = '0'
	setTimeout(() => {
		modal.style.display = 'none'
	}, 300)
}

const addNote = () => {
	
	let form = document.getElementById('note-post-data')
	let title = form.childNodes[1].value
	let body = form.childNodes[3].value

	fetch(getParameters().URL, {
		method: 'POST',
		headers:  {"content-type" : "application/json; charset=UTF-8" },
		body: JSON.stringify({ title: title, body: body })
	}).then((res) => res.json())
		.then((data) => console.log(data))
		.catch((err) => console.log(err))
}