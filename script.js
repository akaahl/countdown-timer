const upperHalves = document.querySelectorAll('.upper-half');
const leftCircles = document.querySelectorAll('.left-circle');
const rightCircles = document.querySelectorAll('.right-circle');
const numbers = document.getElementById('numbers');

function flipInterval() {
  upperHalves.forEach(upperhalf => {
    upperhalf.style.persperctive = `1000px`;
    upperhalf.style.transform = `rotateX(-180deg)`;
    upperhalf.style.transformOrigin = `bottom`;
    upperhalf.style.transformStyle = `preserve-3d`;
    upperhalf.style.transition = `transform 1s linear`;
  });

  numbers.style.transform = `rotateX(-180deg)`;
  // numbers.style.transform = `translate(-50%, -50%)`;
  // numbers.style.transform = `scaleY(-1)`;
  numbers.style.transformOrigin = `center`;
  numbers.style.transformStyle = `preserve-3d`;
  numbers.style.transition = `transform 0.5s linear`;
}

// setInterval(flipInterval, 1000);
// setTimeout(() => {
//   upperHalves.forEach(upperhalf => {
//     upperhalf.style.transform = `rotateX(0deg);`;
//   });

//   numbers.style.transform = `translate(-50%, -50%)`;
//   numbers.style.transformOrigin = `center`;

//   numbers.style.transform = `rotateX(180deg)`;
// }, 1000);

// Todo: fix CSS upper half and timer container background color
