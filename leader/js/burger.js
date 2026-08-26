const burger = document.querySelector(".header__burger");
const main = document.querySelector(".header__burger-main");

burger.addEventListener("click", () => {
  main.classList.toggle("active");
});
