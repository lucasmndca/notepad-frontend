//Methods
const injectConstant = (element, constant) => element.innerHTML = constant

//Getting elements
let navbarConst = getNavbarConstants()
let navbarTitle = document.getElementsByClassName('navbar-title')[0]
let navbarHomeLink = document.getElementsByClassName('navbar-link')[0]
let navbarNotesLink = document.getElementsByClassName('navbar-link')[1]
let textarea = document.getElementsByTagName('textarea')[0]
let addButton = document.getElementsByTagName('button')[0]

//Injecting constants
injectConstant(navbarTitle, navbarConst.title)
injectConstant(navbarHomeLink, navbarConst.homeLink)
injectConstant(navbarNotesLink, navbarConst.notesLink)
injectConstant(textarea, add.textareaPlaceholder)
injectConstant(addButton, add.button)