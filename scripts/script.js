"use strict";
const avatar1 = document.querySelector(".avatar-img1");
const body = document.querySelector("body");

// Variables for how to play Modal
let howToPlay1 = document.querySelector(".how-to-play-1");
let modalBox1 = document.querySelector(".modal-1");
let btnCloseModal1 = document.querySelector(".close-modal1");
let howToPlay2 = document.querySelector(".how-to-play-2");
let modalBox2 = document.querySelector(".modal-2");
let btnCloseModal2 = document.querySelector(".close-modal2");
let howToPlay3 = document.querySelector(".how-to-play-3");
let modalBox3 = document.querySelector(".modal-3");
let btnCloseModal3 = document.querySelector(".close-modal3");

let overlayModal1 = document.querySelector(".overlay1");
let overlayModal2 = document.querySelector(".overlay2");
let overlayModal3 = document.querySelector(".overlay3");

avatar1.addEventListener("mouseenter", () => {
  avatar1.src = "../images/Avatar2.png";
  avatar1.style.cursor = "pointer";
});
avatar1.addEventListener("mouseleave", () => {
  avatar1.src = "../images/Avatar.png";
  avatar1.style.cursor = "none";
});

// View the how to play Modal
const closeModal1 = function () {
  modalBox1.classList.add("hidden");
  overlayModal1.classList.add("hidden");
  checkHiddenToToggleScrolling1();
};
const openModal1 = function () {
  modalBox1.classList.remove("hidden");
  overlayModal1.classList.remove("hidden");
  checkHiddenToToggleScrolling1();
};
const closeModal2 = function () {
  modalBox2.classList.add("hidden");
  overlayModal2.classList.add("hidden");
  checkHiddenToToggleScrolling2();
};
const openModal2 = function () {
  modalBox2.classList.remove("hidden");
  overlayModal2.classList.remove("hidden");
  checkHiddenToToggleScrolling2();
};

const closeModal3 = function () {
  modalBox3.classList.add("hidden");
  overlayModal3.classList.add("hidden");
  checkHiddenToToggleScrolling2();
};
const openModal3 = function () {
  modalBox3.classList.remove("hidden");
  overlayModal3.classList.remove("hidden");
  checkHiddenToToggleScrolling3();
};

function checkHiddenToToggleScrolling1() {
  if (!modalBox1.classList.contains("hidden")) {
    // Disable scroll
    body.style.overflow = "hidden";
  } else {
    // Enable scroll
    body.style.overflow = "auto";
  }
}
function checkHiddenToToggleScrolling2() {
  if (!modalBox2.classList.contains("hidden")) {
    // Disable scroll
    body.style.overflow = "hidden";
  } else {
    // Enable scroll
    body.style.overflow = "auto";
  }
}
function checkHiddenToToggleScrolling3() {
  if (!modalBox3.classList.contains("hidden")) {
    // Disable scroll
    body.style.overflow = "hidden";
  } else {
    // Enable scroll
    body.style.overflow = "auto";
  }
}

// for (var i = 0; i < howToPlayLinks.length; i++) {
//   //   console.log(howToPlayLinks[i].textContent);
//   howToPlayLinks[i].addEventListener("click", openModal);
// }
howToPlay1.addEventListener("click", openModal1);
howToPlay2.addEventListener("click", openModal2);
howToPlay3.addEventListener("click", openModal3);

btnCloseModal1.addEventListener("click", closeModal1);
btnCloseModal2.addEventListener("click", closeModal2);
btnCloseModal3.addEventListener("click", closeModal3);

overlayModal1.addEventListener("click", closeModal1);
overlayModal2.addEventListener("click", closeModal2);
overlayModal3.addEventListener("click", closeModal3);
