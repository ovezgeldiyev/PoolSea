// slider
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
var swiper2 = new Swiper(".mySwiper2", {
  slidesPerView: 7,
  spaceBetween: 15,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    280: {
      slidesPerView: 2,
      spaceBetween: 8,
    },
    600: {
      slidesPerView: 3,
      spaceBetween: 5,
    },
    750: {
      slidesPerView: 4,
      spaceBetween: 5,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 5,
    },
    1180: {
      slidesPerView: 6,
      spaceBetween: 5,
    },
    1380: {
      slidesPerView: 7,
      spaceBetween: 15,
    },
  },
});

// menu start
var menu = document.getElementById("menu");
var menuBtn = document.getElementById("menuBtn");
var body = document.body;
menuBtn.onclick = function () {
  menu.classList.toggle("active");
  menuBtn.classList.toggle("active");
  body.classList.toggle("active");
};
window.onclick = function (event) {
  if (event.target == menu) {
    menu.classList.remove("active");
    menuBtn.classList.remove("active");
    body.classList.remove("active");
  }
};
// menu end

// scroll start
let header = document.getElementById("header");
function scrollFunc() {
  if (window.pageYOffset >= 60) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
window.onscroll = function () {
  scrollFunc();
};
// scroll end

// faq start
const tabBtn = document.querySelectorAll(".tabBtn");
const tabEvent = document.querySelectorAll(".tabEvent");
tabBtn.forEach((e) => {
  onTabClick(tabBtn, tabEvent, e);
});
function onTabClick(tabBtns, tabItems, item) {
  item.addEventListener("click", function (e) {
    let currentBtn = item;
    let tabId = currentBtn.getAttribute("data-tab");
    let currentTab = document.querySelector(tabId);
    if (currentBtn.classList.contains("active")) {
      const faq = currentBtn.parentElement.querySelector(".tabEvent");
      if (faq) {
        faq.classList.remove("active");
        currentBtn.classList.remove("active");
      }
    } else if (!currentBtn.classList.contains("active")) {
      tabBtns.forEach(function (item) {
        item.classList.remove("active");
      });

      tabItems.forEach(function (item) {
        item.classList.remove("active");
      });
      currentBtn.classList.add("active");
      currentTab.classList.add("active");
    }
  });
}
// faq end

const themeChange = document.getElementById("themeChange");
const themeChangeBtn = themeChange.parentNode;
const tabItems = document.querySelectorAll(".tabItem");
const swiperWrapper = document.querySelector(".intro__inner-swiper-outer");
const swiperItems = swiperWrapper.querySelectorAll(".swiper-slide");
const circles = document.querySelectorAll(".circle");

themeChange.onchange = function () {
  if (themeChange.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    themeChangeBtn.classList.add("active");
    tabItems.forEach((tabItem) => {
      tabItem.classList.add("dark");
    });
    swiperItems.forEach((swiperItem) => {
      swiperItem.classList.add("dark");
    });
    circles.forEach((circle) => {
      circle.classList.add("dark");
    });
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    themeChangeBtn.classList.remove("active");
    tabItems.forEach((tabItem) => {
      tabItem.classList.remove("dark");
    });
    swiperItems.forEach((swiperItem) => {
      swiperItem.classList.remove("dark");
    });
    circles.forEach((circle) => {
      circle.classList.remove("dark");
    });
  }
};
