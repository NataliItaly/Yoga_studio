/*------------menu----------------- */

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

/*-------------terms of membership------------ */

let termItem = document.querySelectorAll(".term-item");
let priceText = document.querySelectorAll(".price-text");
const prices = [
  [100, 280, 200],
  [500, 1500, 1000],
  [1000, 2500, 1800],
];

for (let i = 0; i < termItem.length; i++) {
  termItem[i].addEventListener("click", function (event) {
    event.preventDefault();
    for (let j = 0; j < priceText.length; j++) {
      priceText[j].innerHTML = prices[i][j] + " $";
    }
  });
}
