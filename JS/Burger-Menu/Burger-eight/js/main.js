const menuButton = document.querySelector('.menu-btn');
const header = document.querySelector('.header');
const shadow = document.querySelector('.shadow-area');
const body = document.body;
menuButton.shadow.addEventListener('click', ()=>{
  header.classList.toggle('menu-open');
  body.classList.toggle('shadow-active');
})
shadow.addEventListener('click', ()=>{
  header.classList.toggle('menu-open');
  body.classList.toggle('shadow-active');
})