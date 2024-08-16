const burgerButton = document.querySelector('.burger-btn')
const menu = document.querySelector('.header__list')
burgerButton.addEventListener('click', ()=> {
  menu.classList.toggle('open-menu')
})