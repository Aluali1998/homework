const buttons = document.querySelectorAll("[data-modal-title]");
const modalTitle = document.querySelector(".modal-buy__title");
const modal = document.querySelector(".modal");
const modalWindow = document.querySelector(".modal__window");
const modalName = document.querySelector(".modal-buy__label--name");
const modalTel = document.querySelector(".modal-buy__label--tel");
const modalEmail = document.querySelector(".modal-buy__label--email");
const modalLogin = document.querySelector(".modal-buy__label--login");
const modalClose = document.querySelector(".modal__close");
const password = document.querySelector(".modal-buy__label--password");
const modalSubmit = document.querySelector(".modal-buy__submit");
const modalOpen = document.querySelector(".modal-buy__open");
const register = [modalName, modalTel, modalEmail];
const login = [modalLogin, password, modalOpen];

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    modalTitle.textContent = button.dataset.modalTitle;

    if (button.dataset.modalTitle === "Вход в аккаунт") {
      login.forEach((add) => {
        add.classList.add("visible");
      });
      register.forEach((hidden) => {
        hidden.classList.add("hidden");
      });
      modalSubmit.textContent = "Вход";
      register.forEach((field) => {
        field.querySelector("input").disabled = true;
      });
    } else {
      login.forEach((add) => {
        add.classList.remove("visible");
      });
      register.forEach((hidden) => {
        hidden.classList.remove("hidden");
      });
      register.forEach((field) => {
        field.querySelector("input").disabled = false;
      });
      modalSubmit.textContent = "Отправить";
    }
    modal.classList.add("modal--open");
    modalWindow.classList.add("modal__window--open");
    document.body.style.overflow = "hidden";
  });
});

modalClose.addEventListener("click", () => {
  modal.classList.remove("modal--open");
  modalWindow.classList.remove("modal__window--open");
  document.body.style.overflow = "";
});

modal.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.classList.remove("modal--open");
    modalWindow.classList.remove("modal__window--open");
    document.body.style.overflow = "";
  }
});
