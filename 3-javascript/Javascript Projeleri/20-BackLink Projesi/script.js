const modal = document.getElementById("modal");
const modalShow = document.getElementById("show-modal");
const modalClose = document.getElementById("close-modal");
const websitename = document.getElementById("website-name");

function showModal() {
  modal.classList.add("show-modal");
  websitename.focus();
}

modalShow.addEventListener("click", showModal);
modalClose.addEventListener("click", () => {
  modal.classList.remove("show-modal");
});
