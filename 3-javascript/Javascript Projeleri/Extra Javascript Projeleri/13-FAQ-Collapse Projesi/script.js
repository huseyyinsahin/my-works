const faqToggle = document.querySelectorAll(".faq-toggle");

faqToggle.forEach((toggle) => {
  toggle.addEventListener("click", () => {
    toggle.parentNode.classList.toggle("active");
  });
});
