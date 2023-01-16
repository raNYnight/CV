const carousel = document.querySelector(".carousel");
const sliderLeft = document.querySelector(".slider_left");
const sliderRight = document.querySelector(".slider_right");
const pageNumberNode = document.querySelector("#page-number");
let page = 1;
let moveLength = 500;

sliderRight.addEventListener("click", moveRight);
sliderRight.classList.add("active");
carousel.addEventListener("transitionend", (event) => {
  sliderLeft.addEventListener("click", moveLeft);
  sliderRight.addEventListener("click", moveRight);
  if (page > 1) {
    sliderLeft.classList.add("active");
  }
  if (page === 1) {
    sliderLeft.removeEventListener("click", moveLeft);
    sliderLeft.classList.remove("active");
  }
  if (page === 9) {
    sliderRight.removeEventListener("click", moveRight);
    sliderRight.classList.remove("active");
  }
  if (page < 9) {
    sliderRight.classList.add("active");
  }
  console.log(event);
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
