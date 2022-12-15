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

const countdown = document.getElementById("countdown");
if (countdown) {
  let endDate = new Date(countdown.getAttribute("data-date"));
  let upgradeTime = endDate - Date.now();

  let seconds = upgradeTime / 1000;

  let countdownTimer = setInterval("timer()", 1000);

  function timer() {
    let days = Math.floor(seconds / 24 / 60 / 60);
    let hoursLeft = Math.floor(seconds - days * 86400);
    let hours = Math.floor(hoursLeft / 3600);
    let minutesLeft = Math.floor(hoursLeft - hours * 3600);
    let minutes = Math.floor(minutesLeft / 60);
    let remainingSeconds = Math.floor(seconds) % 60;
    function pad(n) {
      return n < 10 ? "0" + n : n;
    }
    countdown.innerHTML =
      pad(days) +
      ":" +
      pad(hours) +
      ":" +
      pad(minutes) +
      ":" +
      pad(remainingSeconds);
    if (seconds == 0) {
      clearInterval(countdownTimer);
      countdown.innerHTML = "Completed";
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
      console.log("navigator.clipboard");
      text.select();
      text.setSelectionRange(0, 99999);
      navigator.clipboard.writeText(text.value).then(
        () => {
          tooltip.classList.add("active");
        },
        (err) => console.error("Async: Could not copy text: ", err)
      );
    } else if (window.clipboardData) {
      console.log("window.clipboardData");
      window.clipboardData.setData("Text", text);
      tooltip.classList.add("active");
    } else {
      text.select();
      text.setSelectionRange(0, 99999);
      let success = document.execCommand("copy");
      console.log(`can't copy: not secure`, window.isSecureContext);
    }
    setTimeout(() => tooltip.classList.remove("active"), 1500);
  };

  copyBtn.onclick = () => {
    copy(copyInput);
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
const myCheck = document.getElementById("myCheck");

const sponsorTooltip = () => {
  const contentBtns = document.querySelectorAll(".check");

  contentBtns.forEach((contentBtn) => {
    contentBtn.onclick = (e) => {
      e.preventDefault();

      contentBtn.classList.toggle("active");

      setTimeout(() => contentBtn.classList.remove("active"), 1500);
      contentBtns.forEach((button) => {
        if (button !== contentBtn) {
          button.classList.remove("active");
        }
      });
    };
  });
};

sponsorTooltip();

// network select start

const networkSelect = document.getElementById("networkSelect");
const networkContent = document.getElementById("networkContent");

if (networkSelect) {
  const selectBtn = networkSelect.querySelector(".networkSelect__button");
  const selectContent = networkSelect.querySelector(".networkSelect__content");
  const selectItems = networkSelect.querySelectorAll(".networkSelect__item");
  const networkItems = networkContent.querySelectorAll(".networkItem");
  const networkCol = networkContent.querySelector(".network__inner-col");

  selectBtn.onclick = () => {
    selectBtn.classList.toggle("active");
    selectContent.classList.toggle("active");
  };

  selectItems.forEach((e) => {
    onTabClick(selectItems, networkItems, e);
  });
  function onTabClick(tabBtns, tabItems, item) {
    item.addEventListener("click", function (e) {
      let currentBtn = item;
      let tabId = currentBtn.getAttribute("data-select");
      let currentTab = document.querySelector(tabId);
      if (currentBtn.classList.contains("active")) {
        const faq = currentBtn.parentElement.querySelector(".networkItem");
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
          item.classList.add("delete");
        });
        currentBtn.classList.add("active");
        currentTab.classList.add("active");
        if (currentTab === document.getElementById("select-1")) {
          networkCol.classList.add("delete");
          console.log("asdad");
        } else {
          networkCol.classList.add("active");
          networkCol.classList.remove("delete");
        }
      }
    });
  }

  // selectItems.forEach((selectItem, index) => {
  //   selectItem.onclick = () => {
  //     selectItem.classList.toggle("active");

  //     networkItems.forEach((networkItem, index) => {
  //       console.log(networkItems[index])
  //       networkItem.classList.add("delete")

  //     });
  //   };
  // });
}

// network select end

// wow start
if (canvas) {
  var wow = new WOW({
    boxClass: "wow",
    animateClass: "animated",
    offset: 0,
    mobile: true,
    live: true,
    scrollContainer: null,
    resetAnimation: true,
  });
  wow.init();
}
// wow end
