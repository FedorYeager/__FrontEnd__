let titles = document.querySelectorAll('.title');
for(i=0; i<titles.length; i++){
  titles[i].onclick = function(){
    this.classList.toggle('active');
    let box = this.nextElementSibling;
    if(box.style.maxHeight){
      box.style.maxHeight = null;
    } else {
      box.style.maxHeight = box.scrollHeight + 'px';
    }
    for(j=0; j<titles.length; j++){
      if(titles[j] !== this){
        titles[j].classList.remove('active');
        titles[j].nextElementSibling.style.maxHeight = null;
      }
    }
  }
}