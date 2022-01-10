const myBurger = document.querySelector('.burger')
const myMenu = document.querySelector('.menu')
const menuLinks = document.querySelectorAll('.menu-link')

myBurger.addEventListener('click', () => {
    myMenu.classList.toggle('show')
    document.body.classList.toggle('o-hidden')
})

menuLinks.forEach(oneLink => {
    oneLink.addEventListener('click', () => {
        myMenu.classList.remove('show')
        document.body.classList.remove('o-hidden')
    })
})

