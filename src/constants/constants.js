//Constants

const icons = {
    navbar: {
		TITLE: '<i class="large material-icons" style="font-size: 100px">assignment</i>'
	},
	notes: {
		ADD: '<i class="large material-icons">add</i>',
		NEW_NOTE_INPUT_PLACEHOLDER: 'Note title',
		NEW_NOTE_TEXTAREA_PLACEHOLDER: 'Your text goes here',
		NEW_NOTE_BUTTON_PLACEHOLDER: 'Add',
		NEW_NOTE_CLOSE_BUTTON: '<i class="large material-icons">close</i>'
	},
	noteMenu: {
		RETURN: '<i class="large material-icons">keyboard_return</i>',
		DELETE: '<i class="large material-icons">delete</i>',
		EDIT: '<i class="large material-icons">edit</i>'
	}
}

const parameters = {
	URL: 'http://localhost:3000/notes',
	BUTTON: 'BUTTON'
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