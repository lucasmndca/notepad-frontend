//Constants

const icons = {
    navbar: {
		TITLE: '<i class="large material-icons" style="font-size: 100px">assignment</i>'
	},
	notes: {
		ADD: '<i class="large material-icons">add</i>'
	},
	noteMenu: {
		RETURN: '<i class="large material-icons">keyboard_return</i>',
		DELETE: '<i class="large material-icons">delete</i>',
		EDIT: '<i class="large material-icons">edit</i>'
	}
}

const parameters = {
	URL: 'http://localhost:3000/notes'
}

/**
 * Returns the app's icons
 * implemented by: Lucas Dias
 * created on: 27/12/2019
 * updated on: 03/01/2020
 */
const getIcons = () => icons

/**
 * Returns the app's parameters
 * implemented by: Lucas Dias
 * created on: 06/01/2020
 */
const getParameters = () => parameters