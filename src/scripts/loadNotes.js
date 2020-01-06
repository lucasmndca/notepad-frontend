//Templates
const templates = {
    notes: {
        NOTE_CONTAINER_OPEN: '<div class="note-container">',
        NOTE_CONTAINER_CLOSE: '</div>',
        NOTE_TITLE_OPEN: '<h3 class="note-title">',
        NOTE_TITLE_CLOSE: '</h3>',
        NOTE_DATE_OPEN: '<p>',
        NOTE_DATE_CLOSE: '</p>',
        NOTE_BODY_OPEN: '<p class="note-body">',
        NOTE_BODY_CLOSE: '</p>',
        NOTE_BUTTON_OPEN: '<button class="note-button" onclick="openNoteMenu(this)" id="',
        NOTE_BUTTON_ICON: '<i class="large material-icons">more_vert</i></button>',
        NOTE_BUTTON_CLOSE: '">'
    },
    menu: {
        MENU_OPEN: '<div class="note-menu w3-animate-right" id="',
        MENU_CLOSE: '">',
        MENU_BUTTON_RETURN: '<button class="note-menu-button return" onclick="closeNoteMenu(this)">',
        MENU_BUTTON_RETURN_CLOSE: '<i class="large material-icons">keyboard_return</i></button>',
        MENU_BUTTON_DELETE: '<button class="note-menu-button delete" onclick="deleteNote(this)">',
        MENU_BUTTON_DELETE_CLOSE: '<i class="large material-icons">delete</i></button>',
        MENU_BUTTON_EDIT: '<button class="note-menu-button edit">',
        MENU_BUTTON_EDIT_CLOSE: '<i class="large material-icons">edit</i></button></div>'
    }
}

window.onload = () => {
    const fetchUsers = async () => {
        try {
            const res = await fetch(getParameters().URL);
            if (!res.ok) {
                throw new Error(res.status);
            }
            const data = await res.json();
            populateData(data)
        } catch (error) {
            console.log(error);
        }
    }

    fetchUsers();
    localStorage.setItem('buttonId', JSON.stringify(0))
    console.log(localStorage.getItem('buttonId'))
}

const populateData = data => {
    const notesContainer = document.getElementsByClassName('w3-animate-top')[0]
    for (let index = 0; index < data.length; index++) {
        notesContainer.innerHTML += buildNote(
            data[index].title,
            data[index].date,
            data[index].body
        )
        let increasedButtonId = increaseButtonId(
            JSON.parse(localStorage.getItem('buttonId'))
        )
        localStorage.setItem('buttonId', increasedButtonId)
    }
}

const buildNote = (title, date, body) => {
    let currentButtonId = localStorage.getItem('buttonId')
    return (
        templates.notes.NOTE_CONTAINER_OPEN +
        buildNoteTitle(title) +
        buildNoteDate(date) +
        buildNoteBody(body) +
        buildNoteMenuButton(currentButtonId) +
        buildNoteMenu(currentButtonId) +
        buildNoteMenuInnerButtons() +
        templates.notes.NOTE_CONTAINER_CLOSE
    )
}

const buildNoteTitle = title => {
    return (
        templates.notes.NOTE_TITLE_OPEN +
        title +
        templates.notes.NOTE_TITLE_CLOSE
    )
}

const buildNoteDate = date => {
    return (
        templates.notes.NOTE_DATE_OPEN +
        formatDate(date) +
        templates.notes.NOTE_DATE_CLOSE
    )
}

const buildNoteBody = body => {
    return (
        templates.notes.NOTE_BODY_OPEN +
        '<span>' + body + '</span>' + //<span> avoids xss injection
        templates.notes.NOTE_BODY_CLOSE
    )
}

const buildNoteMenuButton = currentButtonId => {
    return (
        templates.notes.NOTE_BUTTON_OPEN +
        currentButtonId +
        templates.notes.NOTE_BUTTON_CLOSE +
        templates.notes.NOTE_BUTTON_ICON
    )
}

const buildNoteMenu = currentButtonId => {
    return (
        templates.menu.MENU_OPEN +
        getMenuId(currentButtonId) +
        templates.menu.MENU_CLOSE
    )
}

const buildNoteMenuInnerButtons = () => {
    return (
        templates.menu.MENU_BUTTON_RETURN +
        templates.menu.MENU_BUTTON_RETURN_CLOSE +
        templates.menu.MENU_BUTTON_DELETE +
        templates.menu.MENU_BUTTON_DELETE_CLOSE +
        templates.menu.MENU_BUTTON_EDIT +
        templates.menu.MENU_BUTTON_EDIT_CLOSE
    )
}

const formatDate = date => {
    let parsedDate = String(date)
        .split('T')[0]
    let year = parsedDate.substring(0, 4)
    let month = parsedDate.substring(6, 7)
    let day = parsedDate.substring(9, 10)

    parseInt(month) < 10 ? month = '0' + month : null
    parseInt(day) < 10 ? day = '0' + day : null

    let brazilianFormattedDate = day + '/' +
        month + '/' + year
    return brazilianFormattedDate
}

const getMenuId = currentButtonId => {
    return '_' + String(currentButtonId)
}

const increaseButtonId = id => id + 1