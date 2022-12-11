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
var swiper2 = new Swiper(".mySwiper2", {
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
    750: {
      slidesPerView: 4,
      spaceBetween: 5,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 10,
    },
  },
});
// swiper end

// menu start
var menu = document.getElementById("menu");
var menuBtn = document.getElementById("menuBtn");
var body = document.body;
var html = document.querySelector("html");
let header = document.getElementById("header");

window.onresize = () => {
  menu.classList.remove("active");
  menuBtn.classList.remove("active");
  body.classList.remove("active");
  header.classList.remove("active");
};
menuBtn.onclick = function () {
  menu.classList.toggle("active");
  menuBtn.classList.toggle("active");
  body.classList.toggle("active");
  header.classList.toggle("active");
};
window.onclick = function (event) {
  if (event.target == menu) {
    menu.classList.remove("active");
    menuBtn.classList.remove("active");
    body.classList.remove("active");
    header.classList.remove("active");
  }
};
// menu end

// scroll start
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

// tab start
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
// tab end
// faq start
const faqBtn = document.querySelectorAll(".faqBtn");
const faqEvent = document.querySelectorAll(".faqEvent");
faqBtn.forEach((e) => {
  onFaqClick(faqBtn, faqEvent, e);
});
function onFaqClick(faqBtns, faqItems, item) {
  item.addEventListener("click", function (e) {
    let currentBtn = item;
    let faqId = currentBtn.getAttribute("data-faq");
    let currentTab = document.querySelector(faqId);
    if (currentBtn.classList.contains("active")) {
      const faq = currentBtn.parentElement.querySelector(".faqEvent");
      if (faq) {
        faq.classList.remove("active");
        currentBtn.classList.remove("active");
      }
    } else if (!currentBtn.classList.contains("active")) {
      faqBtn.forEach(function (item) {
        item.classList.remove("active");
      });

      faqItems.forEach(function (item) {
        item.classList.remove("active");
      });
      currentBtn.classList.add("active");
      currentTab.classList.add("active");
    }
  });
}
// faq end

// timer start
let upgradeTime = 3283200;
let seconds = upgradeTime;
const countdown = document.getElementById("countdown");
if (countdown) {
  let countdownTimer = setInterval("timer()", 1000);

  function timer() {
    let days = Math.floor(seconds / 24 / 60 / 60);
    let hoursLeft = Math.floor(seconds - days * 86400);
    let hours = Math.floor(hoursLeft / 3600);
    let minutesLeft = Math.floor(hoursLeft - hours * 3600);
    let minutes = Math.floor(minutesLeft / 60);
    let remainingSeconds = seconds % 60;
    function pad(n) {
      return n < 10 ? "0" + n : n;
    }
    document.getElementById("countdown").innerHTML =
      pad(days) +
      ":" +
      pad(hours) +
      ":" +
      pad(minutes) +
      ":" +
      pad(remainingSeconds);
    if (seconds == 0) {
      clearInterval(countdownTimer);
      document.getElementById("countdown").innerHTML = "Completed";
    } else {
      seconds--;
    }
  }
}

// timer end

// copy start
const copyBtn = document.getElementById("copyBtn");
const copyInput = document.getElementById("copyInput");

if (copyBtn) {
  const tooltip = copyBtn.querySelector("span");

  const copy = (text) => {
    if (navigator.clipboard !== undefined) {
      text.select();
      text.setSelectionRange(0, 99999);
      navigator.clipboard.writeText(text.value).then(
        () => {},
        (err) => console.error("Async: Could not copy text: ", err)
      );
    } else if (window.clipboardData) {
      window.clipboardData.setData("Text", text);
    } else {
      console.log(`can't copy: not secure`);
    }
  };

  copyBtn.onclick = () => {
    copy(copyInput);
    tooltip.classList.add("active");
    setTimeout(() => tooltip.classList.remove("active"), 1500);
  };
}

// copy end

// themeChange start
const themeChange = document.getElementById("themeChange");
const themeChangeBtn = themeChange.parentNode;
const circles = document.querySelectorAll(".circle");

const imagesDark = document.querySelectorAll(".dark");
const imagesLight = document.querySelectorAll(".light");

const imageChange = () => {
  if (html.getAttribute("data-theme") == "light") {
    imagesLight.forEach((image) => {
      image.style.display = "block";
    });
    imagesDark.forEach((image) => {
      image.style.display = "none";
    });
  } else {
    imagesLight.forEach((image) => {
      image.style.display = "none";
    });
    imagesDark.forEach((image) => {
      image.style.display = "block";
    });
  }
};
imageChange();
var canvas = document.querySelector(".animation-scrolling");

if (localStorage.getItem("data-theme")) {
  html.setAttribute("data-theme", localStorage.getItem("data-theme"));
  toggleDark(1);
}

function toggleDark(r) {
  const dataTheme = html.getAttribute("data-theme");
  let theme_switch;
  if (dataTheme === "light") {
    theme_switch = 1;
  } else {
    theme_switch = 0;
  }
  if (r) {
    theme_switch = !theme_switch;
  }
  if (theme_switch) {
    html.setAttribute("data-theme", "dark");
    themeChangeBtn.classList.add("active");
    localStorage.setItem("data-theme", "dark");
    imageChange();
    circles.forEach((circle) => {
      circle.classList.add("dark");
    });
  } else {
    html.setAttribute("data-theme", "light");
    themeChangeBtn.classList.remove("active");
    imageChange();
    circles.forEach((circle) => {
      circle.classList.remove("dark");
    });
    localStorage.setItem("data-theme", "light");
  }
  if (canvas) {
    preloadImages();
  }
}

// themeChange end

const warn = document.getElementById("warn");
const warnClose = document.getElementById("warnClose");
const warnOuter = document.getElementById("warnOuter");

if (warn) {
  warnClose.onclick = () => {
    warn.classList.add("active");
    warnOuter.classList.add("active");
  };
}

const sponsorTooltip = () => {
  const content = document.querySelector("#sponsorsTooltip");
  content.classList.add("active");
  setTimeout(() => content.classList.remove("active"), 1500);
};
