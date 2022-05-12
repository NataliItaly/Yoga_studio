const burgerWrapper = document.querySelector(".burger-wrapper");
const burgerMenu = document.querySelector(".burger-menu");
const menu = document.querySelector(".menu");

burgerWrapper.addEventListener("click", function () {
  burgerMenu.classList.add("rotate");
  menu.classList.toggle("open");
});
