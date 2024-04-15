const btn = document.querySelector('.burger-button');
const wrapper = document.querySelector('.wrapper');
const shadow = document.querySelector('.shadow-area');
btn.addEventListener('click', ()=>{
  wrapper.classList.toggle('active');
})
shadow.addEventListener('click', ()=>{
  wrapper.classList.remove('active');
})