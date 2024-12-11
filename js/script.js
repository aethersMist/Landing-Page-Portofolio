// hamburger
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#navbar-menu");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});

// typed

document.addEventListener("DOMContentLoaded", function () {
  // Target the element with the id "typed"
  var typedElement = document.getElementById("typed");

  // Initialize Typed.js
  var typed = new Typed("#typed", {
    strings: ["Front-end", "Web Dev", "Designer", "UI/UX"],
    typeSpeed: 130,
    backSpeed: 30,
    loop: true,
  });
});
