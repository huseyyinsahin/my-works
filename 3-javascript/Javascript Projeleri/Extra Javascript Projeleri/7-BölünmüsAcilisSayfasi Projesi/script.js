const container = document.querySelector(".container");
const left = document.querySelector(".left");
const right = document.querySelector(".right");

left.addEventListener("click", () => {
  container.classList.add("hover-left");
  container.classList.remove("hover-right");
});

right.addEventListener("click", () => {
  container.classList.add("hover-right");
  container.classList.remove("hover-left");
});
