// swiper start
var swiper = new Swiper(".mySwiper", {
  grabCursor: true,
  effect: "creative",
  speed: 600,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  creativeEffect: {
    prev: {
      shadow: true,
      translate: ["-20%", 0, -1],
    },
    next: {
      translate: ["100%", 0, 0],
    },
  },
});

// swiper end

var init = false;
function swiperCard() {
  if (window.innerWidth >= 540) {
    if (!init) {
      init = true;
      swiper2 = new Swiper(".mySwiper2", {
        slidesPerView: 5,
        spaceBetween: 15,
        loop: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        breakpoints: {
          280: {
            slidesPerView: 1,
            spaceBetween: 8,
          },
          440: {
            slidesPerView: 2,
            spaceBetween: 5,
            
          },
          600: {
            slidesPerView: 3,
            spaceBetween: 5,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 5,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 10,
          },
        },
      });
    }
  } else if (init) {
    swiper.destroy();
    init = false;
  }
}
swiperCard();
window.addEventListener("resize", swiperCard);