const upperHalves = document.querySelectorAll(".upper-half");
const leftCircles = document.querySelectorAll(".left-circle");
const rightCircles = document.querySelectorAll(".right-circle");
const numbers = document.getElementById("numbers");

setInterval(() => {
  upperHalves.forEach((upperhalf) => {
    upperhalf.style.transform = `rotateX(-180deg)`;
    upperhalf.style.transformOrigin = `bottom`;
    upperhalf.style.transformStyle = `preserve-3d`;
    upperhalf.style.transition = `transform 1s linear`;
  });
}, 1000);
