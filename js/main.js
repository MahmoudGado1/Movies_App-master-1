const landingPage = document.querySelector(".home");
const imageArray = [ "home3.jpg"];
const randomOption = true;

function randomizeImgs() {
  if (randomOption && landingPage) {
    const firstRandom = Math.floor(Math.random() * imageArray.length);
    landingPage.style.backgroundImage = `url("img/${imageArray[firstRandom]}")`;
    setInterval(() => {
      const randomNumber = Math.floor(Math.random() * imageArray.length);
      landingPage.style.backgroundImage = `url("img/${imageArray[randomNumber]}")`;
    }, 5000);
  }
}

randomizeImgs();

const header = document.querySelector("header");
const menuIcon = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");
const menuIconI = document.querySelector("#menu-icon i");

if (menuIcon && navbar) {
  menuIcon.onclick = () => {
    navbar.classList.toggle("active");
    if (navbar.classList.contains("active")) {
      menuIconI.classList.remove("fa-bars");
      menuIconI.classList.add("fa-xmark");
      menuIcon.style.color = "#000";
    } else {
      menuIconI.classList.remove("fa-xmark");
      menuIconI.classList.add("fa-bars");
      menuIcon.style.color = ""; // restore to original (or use your default color)
    }
  };
}

window.addEventListener("scroll", () => {
  if (header) {
    header.classList.toggle("shadow", window.scrollY > 0);
  }
});
