const screenWidth = window.innerWidth;

const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");
const navLink = document.querySelectorAll(".nav__link");

if (screenWidth < 820) {
  if (navToggle) {
    navToggle.addEventListener("click", () => {
      if (!navMenu.classList.contains("show-menu")) {
        navMenu.classList.add("show-menu");
        navToggle.style.display = "none";
        navClose.style.display = "block";
      }
    });
  }

  if (navClose) {
    navClose.addEventListener("click", () => {
      navMenu.classList.remove("show-menu");
      navToggle.style.display = "block";
      navClose.style.display = "none";
    });
  }

  const linkAction = () => {
    navMenu.classList.remove("show-menu");
    navToggle.style.display = "block";
    navClose.style.display = "none";
  };

  navLink.forEach((n) => n.addEventListener("click", linkAction));
} else {
  if (navToggle) {
    navToggle.style.display = "none";
  }

  if (navClose) {
    navClose.style.display = "none";
  }
}
