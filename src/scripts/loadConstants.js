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
let noteAddButton = document.getElementsByClassName('note-add')

//Injecting constants
injectConstant(navbarTitle, iconsConst.navbar.TITLE)
injectConstant(buttons, iconsConst.notes.BUTTON)
injectConstant(noteMenuReturnButtons, iconsConst.noteMenu.RETURN)
injectConstant(noteMenuDeleteButtons, iconsConst.noteMenu.DELETE)
injectConstant(noteMenuEditButtons, iconsConst.noteMenu.EDIT)
injectConstant(noteAddButton, iconsConst.notes.ADD)