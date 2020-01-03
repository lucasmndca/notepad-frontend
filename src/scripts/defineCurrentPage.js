//Pages ENUM
const pagesEnum = {
    INDEX: {
        NAME: 'index',
        PAGEINDEX: 0
    },
    NOTES: {
        NAME: 'notas',
        PAGEINDEX: 1
    },
    STYLES: {
        ACTIVE_BACKGROUND: "#3162e9",
        ACTIVE_TEXT: "#ffffff",
        ACTIVE_BORDER: "2px solid #ffffff",
        DEFAULT_BACKGROUND: "#f3f3f3",
        DEFAULT_TEXT: "#000000",
        DEFAULT_BORDER: "2px solid transparent"
    }
}

window.onload = () => {
    let currentPage = window.location.href
    setButtonAccordingToCurrentPage(currentPage)
}

const setButtonAccordingToCurrentPage = currentPage => {
    let buttons = document.getElementsByClassName('navbar-link')
    if(currentPage.includes(pagesEnum.INDEX.NAME)) {
        buttons[pagesEnum.INDEX.PAGEINDEX].style.background = pagesEnum.STYLES.ACTIVE_BACKGROUND
        buttons[pagesEnum.INDEX.PAGEINDEX].style.color = pagesEnum.STYLES.ACTIVE_TEXT
        buttons[pagesEnum.INDEX.PAGEINDEX].style.border = pagesEnum.STYLES.ACTIVE_BORDER
        buttons[pagesEnum.NOTES.PAGEINDEX].style.background = pagesEnum.STYLES.DEFAULT_BACKGROUND
        buttons[pagesEnum.NOTES.PAGEINDEX].style.color = pagesEnum.STYLES.DEFAULT_TEXT
        buttons[pagesEnum.NOTES.PAGEINDEX].style.color = pagesEnum.STYLES.DEFAULT_BORDER
    } else {
        buttons[pagesEnum.NOTES.PAGEINDEX].style.background = pagesEnum.STYLES.ACTIVE_BACKGROUND
        buttons[pagesEnum.NOTES.PAGEINDEX].style.color = pagesEnum.STYLES.ACTIVE_TEXT
        buttons[pagesEnum.NOTES.PAGEINDEX].style.border = pagesEnum.STYLES.ACTIVE_BORDER
        buttons[pagesEnum.INDEX.PAGEINDEX].style.background = pagesEnum.STYLES.DEFAULT_BACKGROUND
        buttons[pagesEnum.INDEX.PAGEINDEX].style.color = pagesEnum.STYLES.DEFAULT_TEXT
        buttons[pagesEnum.INDEX.PAGEINDEX].style.border = pagesEnum.STYLES.DEFAULT_BORDER
    }
}