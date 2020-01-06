//Methods
const injectConstant = (element, constant) => {
	for (i = 0; i < element.length; i++) {
		element[i].innerHTML = constant
	}
}
	
//Getting elements
let iconsConst = getIcons()
let navbarTitle = document.getElementsByClassName('navbar-title')
let buttons = document.getElementsByClassName('note-button')
let noteMenuReturnButtons = document.getElementsByClassName('return')
let noteMenuDeleteButtons = document.getElementsByClassName('delete')
let noteMenuEditButtons = document.getElementsByClassName('edit')
<<<<<<< HEAD
let noteAddButton = document.getElementsByClassName('note-add')
=======
>>>>>>> ef0bd9ca86a6d4fba76510e0782b376837518a72

//Injecting constants
injectConstant(navbarTitle, iconsConst.navbar.TITLE)
injectConstant(buttons, iconsConst.notes.BUTTON)
injectConstant(noteMenuReturnButtons, iconsConst.noteMenu.RETURN)
injectConstant(noteMenuDeleteButtons, iconsConst.noteMenu.DELETE)
<<<<<<< HEAD
injectConstant(noteMenuEditButtons, iconsConst.noteMenu.EDIT)
injectConstant(noteAddButton, iconsConst.notes.ADD)
=======
injectConstant(noteMenuEditButtons, iconsConst.noteMenu.EDIT)
>>>>>>> ef0bd9ca86a6d4fba76510e0782b376837518a72
