const btn = document.querySelector('.menu-btn');
const menu = document.querySelector('.header__menu');
btn.addEventListener('click', ()=>{
  menu.classList.toggle('menu-open');
})