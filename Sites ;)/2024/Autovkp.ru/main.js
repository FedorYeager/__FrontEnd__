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

const btnShowVideo = document.querySelector('.show-video')
const btnShowPhoto = document.querySelector('.show-photo')
const video = document.querySelector('.video')
const photo = document.querySelector('.photo')

btnShowVideo.addEventListener('click', () => {
  btnShowVideo.classList.add('active')
  video.classList.add('active')
  btnShowPhoto.classList.remove('active')
  photo.classList.remove('active')
})

btnShowPhoto.addEventListener('click', () => {
  btnShowPhoto.classList.add('active')
  photo.classList.add('active')
  btnShowVideo.classList.remove('active')
  video.classList.remove('active')
})



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