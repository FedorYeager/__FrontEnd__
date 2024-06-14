$(function () {

  var mixer = mixitup('.directions__list');

  $('.directions__filter-btn').on('click', function() {
    $('.directions__filter-btn').removeClass('directions__filter-btn--active')
    $(this).addClass('directions__filter-btn--active')
  })


  $('.team__slider').slick({
    arrows: false,
    slidesToShow: 4,
    draggable: false,
    infinine: true,
    waitForAnimate: false,
    responsive:
      [
        {
          breakpoint: 1100,
          settings: {
            slidesToShow: 3,
          }
        },
        {
          breakpoint: 750,
          settings: {
            slidesToShow: 2,
          }
        },
        {
          breakpoint: 540,
          settings: {
            slidesToShow: 1,
            draggable: true
          }
        },
      ]
  })
  $('.team__slider-prev').on('click', function(i) {
    i.preventDefault()
    $('.team__slider').slick('slickPrev')
  })
  $('.team__slider-next').on('click', function(i) {
    i.preventDefault()
    $('.team__slider').slick('slickNext')
  })

  $('.testimonials__slider').slick({
    arrows: false,
    dots: true,
    appendDots: $('.testimonial__dots'),
    waitForAnimate: false,
    responsive:
      [
        {
          breakpoint: 750,
          settings: {
          }
        },
      ]
  })
  $('.testimonials-prev').on('click', function(i) {
    i.preventDefault()
    $('.testimonials__slider').slick('slickPrev')
  })
  $('.testimonials-next').on('click', function(i) {
    i.preventDefault()
    $('.testimonials__slider').slick('slickNext')
  })

  $('.program__acc-link').on('click', function (e) {
    e.preventDefault()
    $(this).toggleClass('program__acc-link--active')
    $(this).children('.program__acc-text').slideToggle()
  })

  $(document).ready(function(){
        $(".header__nav-list a, .header__top-btn, .header__content-btn, .button--empty, .footer__item-link, .footer__item-link, .footer__go-to-top").on("click", function (e) {
            //отменяем стандартную обработку нажатия по ссылке
            e.preventDefault();
            //забираем идентификатор бока с атрибута href
            var id  = $(this).attr('href'),
            //узнаем высоту от начала страницы до блока на который ссылается якорь
                top = $(id).offset().top;
            //анимируем переход на расстояние - top за 1500 мс
            $('body,html').animate({scrollTop: top}, 800);
        });
    });

  setInterval(() => {
    if ($(window).scrollTop() > 0 && $('.header__top').hasClass('header__top--open') === false) {
      $('.burger').addClass('burger--follow')
    } else {
      $('.burger').removeClass('burger--follow')
    }
  }, 0)
  $('.burger, .overlay, .header__top a').on('click', function (e) {
    e.preventDefault()
    $('.header__top').toggleClass('header__top--open')
    $('.overlay').toggleClass('overlay--show')
  })
  $('.footer__top-title').on('click', function () {
    $(this).next().slideToggle()
  })

})