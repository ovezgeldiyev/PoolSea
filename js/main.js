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
  slidesPerView: 7,
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
    370: {
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
// swiper end

// menu start
var menu = document.getElementById("menu");
var menuBtn = document.getElementById("menuBtn");
var body = document.body;
const html = document.querySelector("html");

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

// scrollMagic
const intro = document.querySelector("#startPoint");
const controller = new ScrollMagic.Controller();
const duration = 2000;
let scene = new ScrollMagic.Scene({
  duration: duration,
  triggerElement: intro,
  triggerHook: 0.07,
})

  .setPin(intro)
  .addTo(controller);

// canvas start
const canvas = document.querySelector(".animation-scrolling");

if (canvas) {
  const context = canvas.getContext("2d");

  const generatePath = (index) => {
    if (html.getAttribute("data-theme") == "light") {
      return `./images/canvas/white/${(index || 1)
        .toString()
        .padStart(4, "0")}.jpg`;
    } else {
      return `./images/canvas/black/${(index || 1)
        .toString()
        .padStart(4, "0")}.jpg`;
    }
  };

  const speed = 0.6;

  const frameCount = parseInt(intro.getAttribute("data-frames"));
  canvas.height = 1100;
  canvas.width = 1940;
  const img = new Image();
  img.src = generatePath(1);
  img.onload = function () {
    context.drawImage(img, 0, 0);
  };
  window.addEventListener("scroll", () => {
    const scrollTop = html.scrollTop;
    const maxScrollTop = html.scrollHeight - window.innerHeight;
    const scrollFraction = frameCount / duration;
    const frameIndex = Math.min(
      frameCount - 1,
      Math.floor(speed * scrollTop * scrollFraction)
    );
    requestAnimationFrame(() => updateImage(frameIndex));
  });

  const updateImage = (index) => {
    img.src = generatePath(index);
    context.drawImage(img, 0, 0);
  };

  const preloadImages = () => {
    img.src = generatePath(1);
    img.onload = function () {
      context.drawImage(img, 0, 0);
    };
    for (let i = 1; i < frameCount; i++) {
      const img = new Image();
      img.src = generatePath(i);
    }
  };
  preloadImages();
}

// canvas end

// copy start
const copyBtn = document.getElementById("copyBtn");

if (copyBtn) {
  const copyInput = document.getElementById("copyInput");
  const tooltip = copyBtn.querySelector("span");
  const copy = (text) => {
    if (navigator.clipboard !== undefined) {
      navigator.clipboard.writeText(text).then(
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
    copy(copyInput.value);
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

themeChange.onchange = function () {
  if (themeChange.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    themeChangeBtn.classList.add("active");
    imageChange();
    circles.forEach((circle) => {
      circle.classList.add("dark");
    });
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    themeChangeBtn.classList.remove("active");
    imageChange();
    circles.forEach((circle) => {
      circle.classList.remove("dark");
    });
  }
};
// themeChange end

const warn = document.getElementById("warn");
if (warn) {
  const warnClose = document.getElementById("warnClose");
  warnClose.onclick = () => {
    warn.style.display = "none";
  };
}

const sponsorTooltip = () => {
  const content = document.querySelector("#sponsorsTooltip");
  content.classList.add("active");
  setTimeout(() => content.classList.remove("active"), 1500);
};
