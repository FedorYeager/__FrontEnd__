const burgerButton = document.querySelector('.burger-button')
const hiddenNav = document.querySelector('.header__nav')
burgerButton.addEventListener('click', ()=>{
  hiddenNav.classList.toggle('active')
  burgerButton.classList.toggle('active')
})