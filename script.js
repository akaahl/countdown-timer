const upperHalves = document.querySelectorAll('.upper-half');
const leftCircles = document.querySelectorAll('.left-circle');
const rightCircles = document.querySelectorAll('.right-circle');
const numbers = document.querySelectorAll('.numbers');
const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');

function flipInterval(arg) {
  let previousElement = arg.previousElementSibling.previousElementSibling;
  previousElement.style.transform = `rotateX(-180deg)`;
  previousElement.style.transition = `all 0.5s linear`;
  previousElement.style.background;

  setTimeout(() => {
    previousElement.style.transform = `rotateX(0deg)`;
    previousElement.style.transition = `all 0s`;
  }, 500);
}

function timeUpdate(time) {
  let timeCountdown = (time.innerHTML -= 1);
  time.innerHTML = timeCountdown < 10 ? '0' + timeCountdown : timeCountdown;
  setInterval(flipInterval(time), 500);
}

function updateCountdown() {
  timeUpdate(seconds);

  if (seconds.innerHTML == '0-1') {
    seconds.innerHTML = '59';
    timeUpdate(minutes);
  }
  if (minutes.innerHTML == '0-1') {
    minutes.innerHTML = '59';
    timeUpdate(hours);
  }

  if (hours.innerHTML == '0-1') {
    hours.innerHTML = '59';
    timeUpdate(days);
  }
}

setInterval(updateCountdown, 1000);
