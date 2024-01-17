const search = document.querySelector(".search");
const input = document.querySelector(".input");
const btn = document.querySelector(".btn");

function open() {
  search.classList.toggle("active");
  input.focus();
}

btn.addEventListener("click", open);
