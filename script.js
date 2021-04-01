const upperHalves = document.querySelectorAll('.upper-half');
const leftCircles = document.querySelectorAll('.left-circle');
const rightCircles = document.querySelectorAll('.right-circle');
const numbers = document.querySelectorAll('.numbers');
const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');

function flipInterval() {
  upperHalves.forEach(upperhalf => {
    upperhalf.style.transform = `rotateX(-180deg)`;
    upperhalf.style.transition = `all 1s linear`;
  });

  numbers.forEach(number => {
    number.style.transform = `rotateX(-180deg)`;
    number.style.transition = `all 1s linear`;
  });

  setTimeout(() => {
    upperHalves.forEach(upperhalf => {
      upperhalf.style.transform = `rotateX(0deg);`;
    });

    numbers.forEach(number => {
      number.style.transform = `rotateX(0deg)`;
    });
  }, 1000);
}

// setInterval(flipInterval, 1000);

// Todo: fix CSS upper half and timer container background color

function nextweek() {
  var today = new Date();
  var nextweek = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() + 8,
    today.getHours() + 23,
    today.getMinutes() + 55,
    today.getSeconds() + 41
  );

  const diff = nextweek - today;
  // const days = Math.floor(diff / 1000 / 60 / 60 / 24);

  // const daysCountdown = today.getDate() + 8 - today.getDate();
  // const hoursCountdown = today.getHours() + 23 - today.getHours();
  // const minutesCountdown = today.getMinutes() + 55 - today.getMinutes();
  // const secondsCountdown = today.getSeconds() + 14 - today.getSeconds();
  console.log(typeof days.innerHTML);
}

nextweek();

function timeUpdate(time) {
  let timeCountdown = (time.innerHTML -= 1);
  time.innerHTML = timeCountdown < 10 ? '0' + timeCountdown : timeCountdown;
}

function updateCountdown() {
  timeUpdate(seconds);

  if (seconds.innerHTML == '0-1') {
    seconds.innerHTML = '59';
    timeUpdate(minutes);

    if (minutes.innerHTML == '0-1') {
      minutes.innerHTML = '59';
      timeUpdate(hours);

      if (hours.innerHTML == '0-1') {
        hours.innerHTML = '59';
        timeUpdate(days);
      }
    }
  }
}

setInterval(updateCountdown, 1000);
