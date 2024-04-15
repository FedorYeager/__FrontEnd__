const btn = document.querySelector('.menu-button');
const header = document.querySelector('.header');
const shadow = document.querySelector('.shadow-area');
btn.addEventListener('click', ()=>{
  header.classList.toggle('menu-open');
})
shadow.addEventListener('click', ()=>{
  header.classList.remove('menu-open');
})