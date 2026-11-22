const langButton = document.querySelector(".header__lang-button");
const langList = document.querySelector(".header__lang-list");
const langWrapper = document.querySelector(".header__lang-wrapper");
const desktopSlot = document.querySelector(".header__container");
const burgerMenu = document.querySelector(".header__burger-main");
const headerMain = document.querySelector(".header__main");

const mediaQuery = window.matchMedia("(max-width: 1220px)");

langButton.addEventListener("click", (event) => {
  langList.classList.toggle("active");
});

document.addEventListener("click", (event) => {
  if (!langWrapper.contains(event.target)) {
    langList.classList.remove("active");
  }
});

function handleBreakpoint(e) {
  if (e.matches) {
    burgerMenu.appendChild(langWrapper);
  } else {
    desktopSlot.insertBefore(langWrapper, headerMain);
  }
}

handleBreakpoint(mediaQuery);
mediaQuery.addEventListener("change", handleBreakpoint);
