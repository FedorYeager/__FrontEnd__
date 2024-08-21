const burgerButton = document.querySelector('.burger-btn')
const menu = document.querySelector('.header__list')
burgerButton.addEventListener('click', ()=> {
  menu.classList.toggle('open-menu')
})


// ! ========================================


document.addEventListener('DOMContentLoaded', () => {
  const titles = document.querySelectorAll('.benefits__title');
  const boxes = document.querySelectorAll('.benefits__box');
  titles.forEach((title, index) => {
    title.addEventListener('click', () => {
      if (title.classList.contains('active')) {
        title.classList.remove('active');
      } else {
        titles.forEach((t, i) => {
          t.classList.remove('active');
          boxes[i].classList.remove('active');
        });
        title.classList.add('active');
        boxes[index].classList.add('active');
      }
    });
  });
});


// ! ========================================


const showMoreButtonModels = document.querySelector('.models__button')
const modelsColumns = Array.from(document.querySelectorAll('.models__column'))

function openColumnsModel(){
  showMoreButtonModels.addEventListener('click', () => {
    modelsColumns.forEach(item => item.classList.remove('visually-hidden'));
    showMoreButtonModels.classList.add('visually-hidden')
  })
}

function responseModelOne() {
  if (window.innerWidth > 1300){
    showMoreButtonModels.classList.add('visually-hidden')
    modelsColumns.forEach((item, index) => {
      item.classList.add('visually-hidden')
      if (index <= 6){
        item.classList.remove('visually-hidden')
      } else if (index > 6){
        showMoreButtonModels.classList.remove('visually-hidden')
      }
    })
    openColumnsModel()
  }
}
responseModelOne()

function responseModelTwo() {
  if (window.innerWidth > 1024 && window.innerWidth < 1300){
    showMoreButtonModels.classList.add('visually-hidden')
    modelsColumns.forEach((item, index) => {
      item.classList.add('visually-hidden')
      if (index <= 4){
        item.classList.remove('visually-hidden')
      } else if (index > 4){
        showMoreButtonModels.classList.remove('visually-hidden')
      }
    })
    openColumnsModel()
  }
}
responseModelTwo()

function responseModelThree() {
  if (window.innerWidth > 767 && window.innerWidth < 1024){
    showMoreButtonModels.classList.add('visually-hidden')
    modelsColumns.forEach((item, index) => {
      item.classList.add('visually-hidden')
      if (index <= 3){
        item.classList.remove('visually-hidden')
      } else if (index > 3){
        showMoreButtonModels.classList.remove('visually-hidden')
      }
    })
    openColumnsModel()
  }
}
responseModelThree()

function responseModelFour() {
  if (window.innerWidth < 767){
    showMoreButtonModels.classList.add('visually-hidden')
    modelsColumns.forEach((item, index) => {
      item.classList.add('visually-hidden')
      if (index <= 2){
        item.classList.remove('visually-hidden')
      } else if (index > 2){
        showMoreButtonModels.classList.remove('visually-hidden')
      }
    })
    openColumnsModel()
  }
}
responseModelFour()


// ! ========================================


document.addEventListener('DOMContentLoaded', () => {
  const sliderList = document.querySelector('.example__list');
  const sliderItems = document.querySelectorAll('.example__item');
  const prevButton = document.querySelector('.example__arrow--prev');
  const nextButton = document.querySelector('.example__arrow--next');
  let currentIndex = 0;
  let visibleItems = 4;

  function updateVisibleItems() {
    const screenWidth = window.innerWidth;
    if (screenWidth >= 1500) {
      visibleItems = 4;
    } else if (screenWidth >= 767 && screenWidth < 1500) {
      visibleItems = 2;
    } else {
      visibleItems = 1;
    }
    updateItemVisibility();
    updateSliderPosition();
  }

  function updateItemVisibility() {
    sliderItems.forEach((item, index) => {
      item.classList.remove('visually-hidden');
    });
  }

  function updateSliderPosition() {
    const offset = currentIndex * (sliderItems[0].offsetWidth + 30); // Учитываем ширину элемента и gap
    sliderList.style.transform = `translateX(-${offset}px)`;
  }

  function goToNextSlide() {
    if (currentIndex < sliderItems.length - visibleItems) {
      currentIndex++;
    } else {
      currentIndex = 0; // Циклическое перемещение
    }
    updateSliderPosition();
  }

  function goToPrevSlide() {
    if (currentIndex > 0) {
      currentIndex--;
    } else {
      currentIndex = sliderItems.length - visibleItems; // Циклическое перемещение
    }
    updateSliderPosition();
  }

  nextButton.addEventListener('click', goToNextSlide);
  prevButton.addEventListener('click', goToPrevSlide);

  window.addEventListener('resize', updateVisibleItems);

  updateVisibleItems();
});








// ! ========================================

const showMoreButtonLocation = document.querySelector('.location__button')
const locationsColumns = Array.from(document.querySelectorAll('.location__column'))

function openColumnsLocation(){
  showMoreButtonLocation.addEventListener('click', () => {
    locationsColumns.forEach(item => item.classList.remove('visually-hidden'));
    showMoreButtonLocation.classList.add('visually-hidden')
  })
}

function responseLocationOne() {
  if (window.innerWidth > 767){
    showMoreButtonLocation.classList.add('visually-hidden')
    locationsColumns.forEach((item, index) => {
      item.classList.add('visually-hidden')
      if (index <= 3){
        item.classList.remove('visually-hidden')
      } else if (index > 3){
        showMoreButtonLocation.classList.remove('visually-hidden')
      }
    })
    openColumnsLocation()
  }
}
responseLocationOne()

function responseLocationTwo() {
  if (window.innerWidth < 767){
    showMoreButtonLocation.classList.add('visually-hidden')
    locationsColumns.forEach((item, index) => {
      item.classList.add('visually-hidden')
      if (index <= 1){
        item.classList.remove('visually-hidden')
      } else if (index > 1){
        showMoreButtonLocation.classList.remove('visually-hidden')
      }
    })
    openColumnsLocation()
  }
}
responseLocationTwo()








{/* <section class="example container">
      <h2 class="example__title title">Пример выкупленных автомобилей</h2>
      <div class="example__slider">
        <ul class="example__list slider-list">
          <a class="example__item slider-item" href="/">
            <figure>
              <img src="./images/example-image.jpg" width="230px" height="230px" loading="lazy" alt="Mitsubishi Outlander">
              <figcaption class="example__model">Mitsubishi Outlander</figcaption>
            </figure>
            <time class="example__release" datetime="2014">2014</time>
            <p class="example__price"><data value="2555000">2 555 000 руб.</data></p>
          </a>
          <a class="example__item slider-item" href="/">
            <figure>
              <img src="./images/example-image.jpg" width="230px" height="230px" loading="lazy" alt="Mitsubishi Outlander">
              <figcaption class="example__model">Mitsubishi Outlander</figcaption>
            </figure>
            <time class="example__release" datetime="2014">2014</time>
            <p class="example__price"><data value="2555000">2 555 000 руб.</data></p>
          </a>
          <a class="example__item slider-item" href="/">
            <figure>
              <img src="./images/example-image.jpg" width="230px" height="230px" loading="lazy" alt="Mitsubishi Outlander">
              <figcaption class="example__model">Mitsubishi Outlander</figcaption>
            </figure>
            <time class="example__release" datetime="2014">2014</time>
            <p class="example__price"><data value="2555000">2 555 000 руб.</data></p>
          </a>
          <a class="example__item slider-item" href="/">
            <figure>
              <img src="./images/example-image.jpg" width="230px" height="230px" loading="lazy" alt="Mitsubishi Outlander">
              <figcaption class="example__model">Mitsubishi Outlander</figcaption>
            </figure>
            <time class="example__release" datetime="2014">2014</time>
            <p class="example__price"><data value="2555000">2 555 000 руб.</data></p>
          </a>
          <a class="example__item slider-item visually-hidden" href="/">
            <figure>
              <img src="./images/example-image-2.jpg" width="230px" height="230px" loading="lazy" alt="Mitsubishi Outlander">
              <figcaption class="example__model">Mitsubishi Outlander</figcaption>
            </figure>
            <time class="example__release" datetime="2014">2014</time>
            <p class="example__price"><data value="2555000">2 555 000 руб.</data></p>
          </a>
        </ul>
        <div class="example__arrows-area arrows-area">
          <img class="example__arrow--prev example__arrow arrow" src="./icons/arrow-blue.svg" alt="">
          <img class="example__arrow--next example__arrow arrow" src="./icons/arrow-blue.svg" alt="">
        </div>
      </div>
    </section>

.example{
  margin-bottom: 90px;
  min-height: 505px;
}

.example__title{
  margin-bottom: 60px;
}

.example__slider{
  position: relative;
  overflow: hidden;
}

.example__list{
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  column-gap: 30px;
  transition-duration: var(--transition-duration);
}

.example__item{
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #f4f7fa;
  border-radius: 5px;
}

.example__item img{
  border-radius: 5px;
}

.example__model{
  text-align: center;
  margin: 15px 0 6px;
  font-size: clamp(17px, 1.2vw, 24px);
  font-weight: 700;
}

.example__release{
  margin-bottom: 18px;
}

.example__price{
  font-weight: 700;
  font-size: 26px;
  letter-spacing: 1px;
  color: var(--color-grey);
}

.example__arrow{
  position: absolute;
  top: 50%;
  translate: 0 -100%;
  cursor: pointer;
  z-index: 1;
  padding: 5px;
}

.example__arrow--next{
  rotate: 180deg;
  right: 0;
}


    document.addEventListener('DOMContentLoaded', () => {
  const sliderList = document.querySelector('.example__list');
  const sliderItems = document.querySelectorAll('.example__item');
  const prevButton = document.querySelector('.example__arrow--prev');
  const nextButton = document.querySelector('.example__arrow--next');

  let currentIndex = 0;
  let visibleItems = 4; // Количество видимых элементов по умолчанию (для широких экранов)
  let itemWidth = sliderItems[0].clientWidth + 30; // Ширина одного элемента плюс отступы

  // Функция для обновления количества видимых элементов в зависимости от ширины экрана
  function updateVisibleItems() {
    const screenWidth = window.innerWidth;

    if (screenWidth >= 1300) {
      visibleItems = 4;
    } else if (screenWidth >= 767 && screenWidth < 1300) {
      visibleItems = 2;
    } else {
      visibleItems = 1;
    }

    itemWidth = sliderItems[0].clientWidth + 30; // Обновляем ширину элемента при изменении размера экрана
    updateSliderPosition();
    updateArrowState();
  }

  // Функция для обновления положения слайдера
  function updateSliderPosition() {
    sliderList.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
  }

  // Обработчик для кнопки "Следующий"
  nextButton.addEventListener('click', () => {
    if (currentIndex < sliderItems.length - visibleItems) {
      currentIndex++;
      updateSliderPosition();
      updateArrowState();
    }
  });

  // Обработчик для кнопки "Предыдущий"
  prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
      currentIndex--;
      updateSliderPosition();
      updateArrowState();
    }
  });

  // Отключение стрелок, если достижен конец слайдера
  function updateArrowState() {
    prevButton.style.opacity = currentIndex === 0 ? '0.5' : '1';
    nextButton.style.opacity = currentIndex >= sliderItems.length - visibleItems ? '0.5' : '1';
  }

  // Слушаем изменения размера окна и адаптируем количество видимых элементов
  window.addEventListener('resize', updateVisibleItems);

  // Первоначальная установка состояния слайдера и стрелок
  updateVisibleItems();
}); */}