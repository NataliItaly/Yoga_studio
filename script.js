/*------------menu----------------- */

const burgerWrapper = document.querySelector(".burger-wrapper");
const burgerMenu = document.querySelector(".burger-menu");
const menu = document.querySelector(".menu");
const menuLinks = document.querySelectorAll(".menu-link");
const telLink = document.querySelector(".tel");
const socialLink = document.querySelectorAll(".social-link");
const headerSocialList = document.querySelector(".header-social-list");
const footerSocialList = document.querySelector(".footer-social-list");
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

// menu fade animation on hover

menu.addEventListener("mouseover", function (event) {
  if (event.target.classList.contains("menu-link")) {
    const link = event.target;
    menuLinks.forEach((item) => {
      if (item !== link) item.classList.add("faded");
    });
    telLink.classList.add("faded");
    event.target.classList.remove("faded");
  }
});

menu.addEventListener("mouseout", function (event) {
  if (event.target.classList.contains("menu-link")) {
    const link = event.target;
    menuLinks.forEach((item) => {
      if (item !== link) item.classList.remove("faded");
    });
    telLink.classList.remove("faded");
  }
});

headerSocialList.addEventListener("mouseover", function (event) {
  if (event.target.classList.contains("social-link")) {
    socialLink.forEach((item) => {
      if (event.target !== item) item.style.opacity = 0.6;
    });
  }
});

headerSocialList.addEventListener("mouseout", function (event) {
  if (event.target.classList.contains("social-link")) {
    socialLink.forEach((item) => {
      if (event.target !== item) item.style.opacity = 1;
    });
  }
});

telLink.addEventListener("mouseover", function () {
  menuLinks.forEach((item) => item.classList.add("faded"));
});

telLink.addEventListener("mouseout", function () {
  menuLinks.forEach((item) => item.classList.remove("faded"));
});

// slider

const currentSlide = document.querySelector(".current-card");
const totalSlides = document.querySelector(".total-cards");
const sliderCards = document.querySelectorAll(".slider-card");
const sliderContainer = document.querySelector(".slider-container");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const sliderPreviewWrapper = document.querySelector(".slider-preview-wrapper");
const previewItems = document.querySelectorAll(".preview-item");
const previewImgs = document.querySelectorAll(".preview-img");
const directionList = document.querySelector(".direction-list");
const contentLinks = document.querySelectorAll(".content-link");
let current = 0;
let translateWidth = function () {
  return sliderContainer.getBoundingClientRect().width;
};
//let sliderWidth = translateWidth * sliderCards.length;

//sliderCards.style.width = sliderWidth;

totalSlides.textContent = sliderCards.length;
currentSlide.textContent = current + 1;

sliderCards.forEach((card, index) => {
  card.style.transform = `translateX(${
    (index - current) * translateWidth()
  }px)`;
});

const setPreviewImg = function (i) {
  previewItems.forEach((item) => item.classList.remove("active-preview"));
  previewItems[i].classList.add("active-preview");
};

const setSliderImg = function (i) {
  sliderCards.forEach((card, index) => {
    card.style.transform = `translateX(${(index - i) * translateWidth()}px)`;
  });
};

nextBtn.addEventListener("click", function () {
  current++;
  if (current >= sliderCards.length) current = 0;
  setSliderImg(current);
  setPreviewImg(current);
});

prevBtn.addEventListener("click", function () {
  current--;
  if (current < 0) current = sliderCards.length - 1;
  setSliderImg(current);
  setPreviewImg(current);
});

sliderPreviewWrapper.addEventListener("click", function (event) {
  if (event.target.classList.contains("preview-img")) {
    const eventImg = event.target;
    previewImgs.forEach((img, index) => {
      if (img === eventImg) {
        current = index;
        setPreviewImg(current);
        setSliderImg(current);
      }
    });
  }
});

directionList.addEventListener("click", function (event) {
  if (event.target.classList.contains("content-link")) {
    const targetLink = event.target;
    const { index } = targetLink.dataset;
    current = index - 1;
    setPreviewImg(current);
    setSliderImg(current);
  }
});

// feedback slider

const feedbackList = document.querySelector(".feedback-list");
const feedbackItems = document.querySelectorAll(".feedback-item");
const prevFeedbackBtn = document.querySelector(".feedback-prev");
const nextFeedbackBtn = document.querySelector(".feedback-next");
let translateStep = function () {
  let itemWidth = parseInt(getComputedStyle(feedbackItems[0]).width);
  let listGap = parseInt(getComputedStyle(feedbackList).gap);
  return itemWidth + listGap;
}; //472;
let currentPosition = 0;

const calcLastDistance = function () {
  let listWidth = parseInt(getComputedStyle(feedbackList).width);
  let listGap = parseInt(getComputedStyle(feedbackList).gap);
  let itemWidth = parseInt(getComputedStyle(feedbackItems[0]).width);
  return listWidth - itemWidth * 2 - listGap;
};

nextFeedbackBtn.addEventListener("click", function () {
  if (Math.abs(currentPosition) + 1 >= calcLastDistance()) {
    currentPosition = 0;
  } else {
    currentPosition -= translateStep();
  }
  feedbackList.style.transform = `translateX(${currentPosition}px)`;
});

prevFeedbackBtn.addEventListener("click", function () {
  if (currentPosition === 0 || currentPosition === 1) {
    currentPosition = -calcLastDistance();
  } else {
    currentPosition += translateStep();
  }
  feedbackList.style.transform = `translateX(${currentPosition}px)`;
});
