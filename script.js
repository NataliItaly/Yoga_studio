const burgerWrapper = document.querySelector(".burger-wrapper");
const burgerMenu = document.querySelector(".burger-menu");
const menu = document.querySelector(".menu");
const menuSpan = document.querySelector(".menu-span");

burgerWrapper.addEventListener("click", function () {
  burgerMenu.classList.toggle("rotate");
  menu.classList.toggle("open");
  if (menu.classList.contains("open")) {
    menuSpan.innerHTML = "close";
    menuSpan.style.color = "#ffffff";
  } else {
    menuSpan.innerHTML = "menu";
    menuSpan.style.color = "#8e80a9";
  }
});
