//Constants
<<<<<<< Updated upstream
const navbar = {
    title: '<i class="large material-icons" style="font-size: 100px">assignment</i>',
    homeLink: 'Início ',
    notesLink: 'Minhas Notas'
=======
const icons = {
    navbar: {
		TITLE: '<i class="large material-icons" style="font-size: 100px">assignment</i>'
	},
	notes: {
		BUTTON: '<i class="large material-icons">more_vert</i>',
		ADD: '<i class="large material-icons">add</i>'
	},
	noteMenu: {
		RETURN: '<i class="large material-icons">keyboard_return</i>',
		DELETE: '<i class="large material-icons">delete</i>',
		EDIT: '<i class="large material-icons">edit</i>'
	}
>>>>>>> Stashed changes
}

const add = {
    textareaPlaceholder: 'Escreva sua nota aqui',
    button: '<i class="large material-icons" style="font-size: 50px">add</i>'
}

/**
 * Returns the navbar constants
 * implemented by: Lucas Dias
 * 27/12/2019
 */
const getNavbarConstants = () => navbar

/**
 * Returns the 'add new note' constants
 * implemented by: Lucas Dias
 * 27/12/2019
 */
const getAddConstants = () => add