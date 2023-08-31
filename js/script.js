"use strict";
// set variables for geting elements from html
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btn_close_moda = document.querySelector(".close-modal");
const btns_open_modal = document.querySelectorAll(".show-modal");
const btn_open_mobile_navigation = document.querySelector(".mobile_nav_btn");
const header = document.querySelector(".header");
const open_slider_btn = document.querySelector(".slider_btn");
const slider = document.querySelector(".slider_holder");
const elem = document.querySelector('input[name="foo"]');

// ********************************
// modal script
// ********************************
// open modal fuction
const open_modal_function = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

// close fuction
const close_modal_function = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

// create for lop for open modal buttons click fuction
for (let i = 0; i < btns_open_modal.length; i++) {
  btns_open_modal[i].addEventListener("click", open_modal_function);
}

// make a closing modal button click function
btn_close_moda.addEventListener("click", close_modal_function);
overlay.addEventListener("click", close_modal_function);

// add key press event for close modal
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    close_modal_function();
  }
});
// ********************************
// modal script
// ********************************

// ********************************
// mobile nav script
// ********************************
btn_open_mobile_navigation.addEventListener("click", function () {
  header.classList.toggle("nav_open");
});
// ********************************
// mobile nav script
// ********************************

// ********************************
// open slider event lisener
// ********************************
open_slider_btn.addEventListener("click", function () {
  header.classList.toggle("slider_open");
});
// ********************************
// open slider event lisener
// ********************************

// ********************************
// date picker
// ********************************
const datepicker = new Datepicker(elem, {
  language: "en",
});
// ********************************
// date picker
// ********************************
