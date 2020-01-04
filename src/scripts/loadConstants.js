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

//Injecting constants
injectConstant(navbarTitle, iconsConst.navbar.TITLE)
injectConstant(buttons, iconsConst.notes.BUTTON)