// JavaScript Code

let menuBtn = document.querySelector(".menu-btn");
let menu = document.querySelector(".nav-links");

menuBtn.addEventListener("click", activeClass);

function activeClass() {
  menuBtn.classList.toggle("active");
  menu.classList.toggle("active");
}

const links = document.querySelectorAll(".nav__link");

links.forEach((link) => {
  link.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent the default link behavior (navigating to a new page)

    const targetId = this.getAttribute("href").substring(1); // Get the target section id
    const targetSection = document.getElementById(targetId); // Get the target section element

    if (targetSection) {
      // Check if the target section exists
      targetSection.scrollIntoView({ behavior: "smooth" }); // Scroll to the target section smoothly
      menuBtn.classList.remove("active"); // Close the menu by removing the "active" class
      menu.classList.remove("active"); // Close the menu by removing the "active" class
    }
  });
});

let homeSection = document.querySelector(".home");
window.addEventListener("scroll", scrollFunction);

function scrollFunction() {
  if (window.scrollY > 60) {
    homeSection.classList.add("active");
  } else {
    homeSection.classList.remove("active");
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll(".nav__link");

  links.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault(); // Prevent the default link behavior (navigating to a new page)

      const targetId = this.getAttribute("href").substring(1); // Get the target section id
      const targetSection = document.getElementById(targetId); // Get the target section element

      if (targetSection) {
        // Check if the target section exists
        targetSection.scrollIntoView({ behavior: "smooth" }); // Scroll to the target section smoothly
      }
    });
  });
});
