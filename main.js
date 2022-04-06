const burger = document.querySelector('.nav__burger')
const menu = document.querySelector('.nav__list')

burger.addEventListener('click', function (e) {
    document.body.classList.toggle('_lock')
    menu.classList.toggle('nav__list--open')
})

menu.addEventListener('click', function (e) {
    if (e.target.classList.contains('nav__link') && menu.classList.contains('nav__list--open')) {
        menu.classList.remove('nav__list--open')
        document.body.classList.remove('_lock')
    }
})