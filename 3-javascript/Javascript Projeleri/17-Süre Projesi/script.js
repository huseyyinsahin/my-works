const remainingDiv = document.getElementById("remainingDiv");
const remainingForm = document.getElementById("remainingForm");
const dateInput = document.getElementById("date-picker");

const timeDiv = document.getElementById("timeDiv");
const timeSpans = document.querySelectorAll("span");
const resetButton = document.getElementById("resetButton");

const completeDiv = document.getElementById("complete");
const completeButton = document.getElementById("completeButton");

let chosenDate = "";
let currentDateValue = new Date().getTime();
let currentTimeInterval;
let localStroageTime;

const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;

const today = new Date().toISOString().split("T")[0];

dateInput.setAttribute("min", today);

function updateDOM() {
  currentTimeInterval = setInterval(() => {
    const now = new Date().getTime();
    const betweenDate = currentDateValue - now;
    // console.log(betweenDate);
    const days = Math.floor(betweenDate / day);
    const hours = Math.floor((betweenDate % day) / hour);
    const minutes = Math.floor((betweenDate % hour) / minute);
    const seconds = Math.floor((betweenDate % minute) / second);

    // console.log(days, hours, minutes, seconds);
    console.log(betweenDate);
    remainingDiv.hidden = true;

    if (betweenDate < 0) {
      timeDiv.hidden = true;
      clearInterval(currentTimeInterval);
      completeDiv.hidden = false;
    } else {
      timeDiv.hidden = false;

      timeSpans[0].textContent = `${days}`;
      timeSpans[1].textContent = `${hours}`;
      timeSpans[2].textContent = `${minutes}`;
      timeSpans[3].textContent = `${seconds}`;
    }
  }, 1000);
}

function calculateTime(e) {
  e.preventDefault();
  chosenDate = remainingForm.date.value;

  // console.log(new Date(chosenDate).getTime());
  // console.log(new Date().getTime());

  localStroageTime = {
    date: chosenDate,
  };
  localStorage.setItem("time", JSON.stringify(localStroageTime));

  if (chosenDate === "") {
    alert("Lütfen Tarih Seçiniz");
  } else {
    currentDateValue = new Date(chosenDate).getTime();
    updateDOM();
  }
}
function reset() {
  timeDiv.hidden = true;
  completeDiv.hidden = true;
  remainingDiv.hidden = false;

  clearInterval(currentTimeInterval);
  localStorage.removeItem("time");
}

function refleshTime() {
  if (localStorage.getItem("time")) {
    remainingDiv.hidden = true;
    localStroageTime = JSON.parse(localStorage.getItem("time"));
    chosenDate = localStroageTime.date;
    currentDateValue = new Date(chosenDate).getTime();
    updateDOM();
  }
}

remainingForm.addEventListener("submit", calculateTime);
resetButton.addEventListener("click", reset);
completeButton.addEventListener("click", reset);

refleshTime();
