// timer start

const countdown = document.getElementById("countdown");
let endDate = new Date(countdown.getAttribute("data-date"));
let upgradeTime = endDate - Date.now();

var seconds = upgradeTime / 1000;

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

// timer end
