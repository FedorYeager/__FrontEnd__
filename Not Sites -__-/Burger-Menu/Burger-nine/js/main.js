const btn = document.querySelector('.burger-button');
const nav = document.querySelector('.header__nav');
btn.addEventListener('click', ()=>{
  nav.classList.toggle('nav-open');
});