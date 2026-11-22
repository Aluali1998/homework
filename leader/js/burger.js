const burger = document.querySelector(".header__burger");
const main = document.querySelector(".header__burger-main");
const burgerClose = document.querySelector(".burger__close");
const body = document.querySelector(".page__body");

burger.addEventListener("click", () => {
  main.classList.add("active");
  document.body.style.overflow = "hidden";
});

body.addEventListener("click", (event) => {
  if (
    main.classList.contains("active") &&
    !main.contains(event.target) &&
    !burger.contains(event.target)
  ) {
    main.classList.remove("active");
    document.body.style.overflow = "";
  }
});
