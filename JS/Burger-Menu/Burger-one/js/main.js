const btn = document.querySelector('.burger-button');
const nav = document.querySelector('.header__nav');
const user = document.querySelector('.header__user-actions');
const shadow = document.querySelector('.area-shadow');

btn.addEventListener('click', ()=>{
  nav.classList.toggle('active');
  user.classList.toggle('active');
  shadow.classList.toggle('active');
})

shadow.addEventListener('click', ()=>{
  nav.classList.remove('active');
  user.classList.remove('active');
  shadow.classList.remove('active');
})