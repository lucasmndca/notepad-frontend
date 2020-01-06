//Methods
const injectConstant = (element, constant) => {
	let parameters = getParameters()
	if(!element.length && element.nodeName === parameters.BUTTON) {
		element.innerHTML = constant
	} else if(!element.length && element !== parameters.BUTTON) {
		element.placeholder = constant
	} else {
		for (i = 0; i < element.length; i++) {
			element[i].innerHTML = constant
		}
	}
}
	
//Getting elements
let iconsConst = getIcons()
let navbarTitle = document.getElementsByClassName('navbar-title')
let buttons = document.getElementsByClassName('note-button')
let noteMenuReturnButtons = document.getElementsByClassName('return')
let noteMenuDeleteButtons = document.getElementsByClassName('delete')
let noteMenuEditButtons = document.getElementsByClassName('edit')
let noteAddButton = document.getElementsByClassName('note-add')
let noteAddHeader = document.getElementsByClassName('note-add-header')
let noteAddModalForm = document.getElementById('note-post-data')
let noteAddModalClose = document.getElementsByClassName('note-add-modal-close')

//Injecting constants
injectConstant(navbarTitle, iconsConst.navbar.TITLE)
injectConstant(buttons, iconsConst.notes.BUTTON)
injectConstant(noteMenuReturnButtons, iconsConst.noteMenu.RETURN)
injectConstant(noteMenuDeleteButtons, iconsConst.noteMenu.DELETE)
injectConstant(noteMenuEditButtons, iconsConst.noteMenu.EDIT)
injectConstant(noteAddButton, iconsConst.notes.ADD)
injectConstant(noteAddHeader, iconsConst.notes.NEW_NOTE_BUTTON_HEADER)
injectConstant(noteAddModalForm.childNodes[1], iconsConst.notes.NEW_NOTE_INPUT_PLACEHOLDER)
injectConstant(noteAddModalForm.childNodes[3], iconsConst.notes.NEW_NOTE_TEXTAREA_PLACEHOLDER)
injectConstant(noteAddModalForm.childNodes[5], iconsConst.notes.NEW_NOTE_BUTTON_PLACEHOLDER)
injectConstant(noteAddModalClose, iconsConst.notes.NEW_NOTE_CLOSE_BUTTON)