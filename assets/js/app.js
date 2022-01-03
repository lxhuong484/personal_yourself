const iconDarkLight = document.querySelector('.app__dark-mode-icon--wrapper')
const appTheme = document.querySelector('.app')

appTheme.classList.add('light')

iconDarkLight.onclick = (e) => {
    // change theme
    if (appTheme.classList.contains('light')) {
        console.log("remove light")
        appTheme.classList.remove('light')
        appTheme.classList.add('dark')
    } else {
        console.log("remove dark")
        appTheme.classList.add('light')
        appTheme.classList.remove('dark')
    }

    // change icon 
    const iconNode = e.target.closest('.app__dark-mode-icon')
    if (e.target.closest('.bx-sun')) {
        iconNode.classList.remove('bx-sun')
        iconNode.classList.add('bx-moon')
    } else if (e.target.closest('.bx-moon')) {
        iconNode.classList.add('bx-sun')
        iconNode.classList.remove('bx-moon')
    }
}


/*==================== SCROLL REVEAL ANIMATION ====================*/
const sr = ScrollReveal({
    distance: '60px',
    duration: 2800,
    // reset: true,
})

sr.reveal('.app__user-name, .app__user-img, .app__user-desc, .app__dark-mode-icon--wrapper', {
    origin: 'left',
    interval: 200,
})