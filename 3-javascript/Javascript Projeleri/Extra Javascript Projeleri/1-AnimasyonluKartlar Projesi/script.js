const animations = document.querySelectorAll(".animation");

animations.forEach((animation) => {
  animation.addEventListener("click", () => {
    animationRemove();
    animation.classList.add("active");
  });
});

function animationRemove() {
  animations.forEach((animation) => {
    animation.classList.remove("active");
  });
}
