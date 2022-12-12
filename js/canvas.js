var html = document.querySelector("html");

// scrollMagic
const intro = document.querySelector("#startPoint");
const duration = 2000;
let controller = null;
let scene = null;

const initController = () => {
  controller = new ScrollMagic.Controller();
  scene = new ScrollMagic.Scene({
    duration: duration,
    triggerElement: intro,
    triggerHook: 0.07,
  })
    .setPin(intro)
    .addTo(controller);
};
initController();

// canvas start
var canvas = document.querySelector(".animation-scrolling");

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

const scrollFunc2 = () => {
  const scrollTop = html.scrollTop;
  const maxScrollTop = html.scrollHeight - window.innerHeight;
  const scrollFraction = frameCount / duration;
  const frameIndex = Math.min(
    frameCount - 1,
    Math.floor(speed * scrollTop * scrollFraction)
  );
  requestAnimationFrame(() => updateImage(frameIndex));
};

const updateImage = (index) => {
  img.src = generatePath(index);
  context.drawImage(img, 0, 0);
};

var preloadImages = () => {
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

window.addEventListener("scroll", scrollFunc2);
window.addEventListener("resize", () => {
  const innerWidth = window.innerWidth;
  let isEnabled = innerWidth > 750;

  if (!isEnabled) {
    if (!!controller) {
      scene.removePin(intro);
      scene.removeClassToggle(true);
      scene.remove();
      scene = scene.destroy(true);
      controller = controller.destroy(true);
      window.removeEventListener("scroll", scrollFunc2);
    }
  } else {
    if (!controller) {
      window.addEventListener("scroll", scrollFunc2);
      initController();
    }

  }
});
// canvas end
