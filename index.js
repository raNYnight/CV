const carousel = document.querySelector(".carousel");
const sliderLeft = document.querySelector(".slider_left");
const sliderRight = document.querySelector(".slider_right");
const pageNumberNode = document.querySelector("#page-number");
let moveLength = 500;
let page = 1;

window.addEventListener("resize", () => {
  if (document.body.offsetWidth < 691) {
    moveLength = 300;
    carousel.style.left = "0px";
  }
  if (document.body.offsetWidth > 691) {
    moveLength = 500;
    carousel.style.left = "0px";
  }
});

sliderRight.addEventListener("click", moveRight);
sliderRight.classList.add("active-btn");
carousel.addEventListener("transitionend", (event) => {
  sliderLeft.addEventListener("click", moveLeft);
  sliderRight.addEventListener("click", moveRight);
  if (page > 1) {
    sliderLeft.classList.add("active-btn");
  }
  if (page === 1) {
    sliderLeft.removeEventListener("click", moveLeft);
    sliderLeft.classList.remove("active-btn");
  }
  if (page === 9) {
    sliderRight.removeEventListener("click", moveRight);
    sliderRight.classList.remove("active-btn");
  }
  if (page < 9) {
    sliderRight.classList.add("active-btn");
  }
});
{
}

function moveLeft() {
  page -= 1;
  pageNumberNode.textContent = page;
  let left = parseInt(carousel.style.left);
  left = left + moveLength;
  carousel.style.left = `${left}px`;
  sliderLeft.removeEventListener("click", moveLeft);
  sliderRight.removeEventListener("click", moveRight);
}
function moveRight() {
  page += 1;
  pageNumberNode.textContent = page;
  let left = parseInt(carousel.style.left);
  left = left - moveLength;
  carousel.style.left = `${left}px`;
  sliderLeft.removeEventListener("click", moveLeft);
  sliderRight.removeEventListener("click", moveRight);
}

const hamburger = document.querySelector(".hamburger"),
  menu = document.querySelector(".header-nav"),
  menuLinks = document.querySelectorAll(".nav-link"),
  line = document.querySelectorAll(".line");

hamburger.addEventListener("click", burgerFunc);
menu.addEventListener("click", (e) => {
  let target = e.target;
  if (target.classList.contains("nav-link")) {
    burgerFunc();
  }
  if (!target.matches("nav-item") && menu.classList.contains("open")) {
    burgerFunc();
  }
});
function burgerFunc() {
  menu.classList.toggle("open");
  hamburger.classList.toggle("active");
  line.forEach((item) => {
    item.classList.toggle("line-active");
  });
}
