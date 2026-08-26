const langButton = document.querySelector(".header__lang-button");
const langList = document.querySelector(".header__lang-list");

langButton.addEventListener("click", () => {
  langList.classList.toggle("active");
});

const langWrapper = document.querySelector(".header__lang-wrapper");
const desktopSlot = document.querySelector(".header__container");
const burgerMenu = document.querySelector(".header__burger-main");
const headerMain = document.querySelector(".header__main");

const mediaQuery = window.matchMedia("(max-width: 1220px)");

function handleBreakpoint(e) {
  if (e.matches) {
    burgerMenu.appendChild(langWrapper);
  } else {
    desktopSlot.insertBefore(langWrapper, headerMain);
  }
}

handleBreakpoint(mediaQuery);
mediaQuery.addEventListener("change", handleBreakpoint);
