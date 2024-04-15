const btn = document.querySelector('.menu-btn');
const header = document.querySelector('.header');
btn.addEventListener('click', ()=>{
  header.classList.toggle('active')
})