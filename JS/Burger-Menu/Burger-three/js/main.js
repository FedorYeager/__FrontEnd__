const btn = document.querySelector('.menu-button');
const wrapper = document.querySelector('.wrapper');
btn.addEventListener('click', ()=>{
  wrapper.classList.toggle('active');
})