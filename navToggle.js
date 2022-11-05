const burgerBtn = document.querySelector(".burger");
const showClass = document.querySelectorAll(".show");
const categBtn = document.querySelector(".categories");
const adminBtn = document.querySelector(".admin");
const btnArr = [burgerBtn, categBtn, adminBtn];

const toggleShowClass = (btn, elem) => {
  btn.addEventListener("click", () => {
    elem.classList.toggle("show");
  });
};

btnArr.forEach((btn, i) => toggleShowClass(btn, showClass[i]));
