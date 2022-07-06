"use strict";

const bannerBox = document.querySelector("#bannerBox > ul");
const bannerItem = document.querySelectorAll(".new_tem");

const preBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

const size = bannerItem[0].clientWidth;

let counter = 0;

nextBtn.addEventListener("click", () => {
  if (counter < bannerItem.length - 1) {
    counter++;
    bannerBox.style.transform = "translateX(" + -size * counter + "px)";
  } else if (counter === bannerItem.length - 1) {
    counter = 0;
    bannerBox.style.transform = "translateX(" + -size * counter + "px)";
  }
});

preBtn.addEventListener("click", () => {
  if (counter > 0) {
    counter--;
    bannerBox.style.transform = "translateX(" + -size * counter + "px)";
  }
});

const menu_bar = document.getElementById("menu_bar");
const menu_list = document.querySelector(".menu_list");

menu_bar.addEventListener("mouseover", () => {
  if (menu_list.classList.contains("on")) {
    menu_list.classList.remove("on");
  } else {
    menu_list.classList.add("on");
  }
});

menu_list.addEventListener("mouseover", () => {
  if (menu_list.classList.contains("on")) {
  } else {
    menu_list.classList.add("on");
  }
});

menu_list.addEventListener("mouseleave", () => {
  if (menu_list.classList.contains("on")) {
    menu_list.classList.remove("on");
  } else {
    menu_list.classList.add("on");
  }
});
