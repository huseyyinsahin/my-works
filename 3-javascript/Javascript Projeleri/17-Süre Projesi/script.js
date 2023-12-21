const remainingDiv = document.getElementById("remainingDiv");
const remainingForm = document.getElementById("remainingForm");
const dateInput = document.getElementById("date-picker");

let chosenDate = "";

const today = new Date().toISOString().split("T")[0];

dateInput.setAttribute("min", today);

function calculateTime(e) {
  e.preventDefault();
  chosenDate = remainingForm.date.value;
  if (chosenDate === "") {
    alert("Lütfen Tarih Seçiniz");
  }
}

remainingForm.addEventListener("submit", calculateTime);
