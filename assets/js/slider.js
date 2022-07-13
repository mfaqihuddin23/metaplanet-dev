const swiper = new Swiper('.swiper', {
  slidesPerView: 2,
  slideOffsetBefore:200,
  spaceBetween: 0,
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
  });

  const swiper1 = new Swiper('.swiper-divider', {
    loop: true,
    autoplay: {
      delay: 1,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    speed: 9000,
    grabCursor: true,
    mousewheelControl: true,
    keyboardControl: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    }
  });

  const swiper2 = new Swiper('.swiper-detail', {
  
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});