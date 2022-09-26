const toggle = document.getElementById('menu-toggle')
const menu = document.getElementById('menu')

document.onclick = function(event){
    if ((event.target.id !== 'menu') && (event.target.id !== 'menu-toggle') && (event.target.id !== 'inner-menu'))
    {
        toggle.classList.remove('active')
        menu.classList.remove('active')
    }
}

toggle.onclick = function(){
    toggle.classList.toggle('active')
    menu.classList.toggle('active')
}


const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
})

sr.reveal(`.profile__border`)
sr.reveal(`.home`, {delay: 500})
sr.reveal(`.about`, {delay: 600})
sr.reveal(`.services`, {delay: 700})
sr.reveal(`.index .project`, {interval: 100, delay: 700})
sr.reveal(`.project-page .project`, {interval: 50, delay: 200})
sr.reveal(`.filters__content`, {delay: 900})
sr.reveal(`.filters`, {delay: 1000})

