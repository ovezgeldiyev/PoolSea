

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
const introContent = document.getElementById("introContent");
// scroll start
function scrollFunc() {
  if (window.pageYOffset >= 60) {
    header.classList.add("sticky");
    if(introContent) {
      introContent.classList.add("active");
    }
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
const myTab = document.getElementById("myTab");


tabBtn.forEach((e) => {
  onTabClick(tabBtn, tabEvent, e);
});
function onTabClick(tabBtns, tabItems, item) {
  item.addEventListener("click", function (e) {
    let currentBtn = item;
    let tabId = currentBtn.getAttribute("data-tab");
    let currentTab = document.querySelector(tabId);
    if (currentBtn.classList.contains("active")) {
      const faq = myTab.querySelector(".tabEvent");
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



// copy start
const copy = document.getElementById("copy");
if (copy) {
  const copyClips = document.querySelectorAll(".copyClip");

  const copy = (text, tooltip) => {
    if (navigator.clipboard !== undefined) {
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

  copyClips.forEach((copyClip) => {
    const copyBtn = copyClip.querySelector("button");
    const copyInput = copyClip.querySelector("input");
    const tooltip = copyClip.querySelector("span");
    copyClip.onclick = () => {
      copy(copyInput, tooltip);
    };
  });
}

// copy end
