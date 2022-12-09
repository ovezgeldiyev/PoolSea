var html = document.querySelector("html");

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

// canvas end