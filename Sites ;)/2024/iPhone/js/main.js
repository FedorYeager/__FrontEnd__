const btn = document.querySelector('.menu-button');
const nav = document.querySelector('.header__nav');
btn.addEventListener('click', ()=>{
  nav.classList.toggle('menu-open');
})