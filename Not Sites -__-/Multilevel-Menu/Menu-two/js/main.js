let isMobile = {
  Android: function() {return navigator.userAgent.match(/Android/i);},
  BlackBerry: function() {return navigator.userAgent.match(/BlackBerry/i);},
  iOS: function() {return navigator.userAgent.match(/iPhone|iPad|iPod/i);},
  Opera: function() {return navigator.userAgent.match(/Opera Mini/i);},
  Windows: function() {return navigator.userAgent.match(/IEMobile/i);},
  any: function() {return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());}
};
let body=document.querySelector('body');
if (isMobile.any()) {
  body.classList.add('touch');
  let arrow=document.querySelectorAll('.arrow'); // Получаем все элементы с классом 'arrow'
  for (i=0; i<arrow.length; i++) { // Цикл for, который перебирает все элементы с классом 'arrow'
    let thisLink=arrow[i].previousElementSibling; // Получаем предыдущий элемент (предположительно ссылку)
    let subMenu=arrow[i].nextElementSibling; // Получаем следующий элемент (предположительно подменю)
    let thisArrow=arrow[i]; // Сохраняем текущую стрелку в переменную
    thisLink.classList.add('parent'); // Добавляем класс 'parent' к предыдущему элементу (ссылке)
    arrow[i].addEventListener('click', function() { // Добавляем обработчик события на клик для текущей стрелки
      subMenu.classList.toggle('open'); // Переключаем класс 'open' у подменю
      thisArrow.classList.toggle('active'); // Переключаем класс 'active' у стрелки
    });
  }
}else{
  body.classList.add('mouse');
}