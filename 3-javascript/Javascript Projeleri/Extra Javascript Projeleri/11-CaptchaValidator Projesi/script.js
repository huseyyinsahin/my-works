const canvas = document.getElementById("captcha-canvas");
let can = canvas.getContext("2d");
can.font = "30px Roboto";
can.fillStyle = "#08e5ff";

const input = document.getElementById("captcha-input");
const submit = document.getElementById("submit-button");
const refresh = document.getElementById("refresh-button");
const output = document.getElementById("output");

let nums = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 
                'H', 'I', 'J', 'K', 'L', 'M', 'N', 
                'O', 'P', 'Q', 'R', 'S', 'T', 'U', 
                'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 
                'c', 'd', 'e', 'f', 'g', 'h', 'i', 
                'j', 'k', 'l', 'm', 'n', 'o', 'p', 
                'q', 'r', 's', 't', 'u', 'v', 'w', 
                'x', 'y', 'z', '0', '1', '2', '3', 
                '4', '5', '6', '7', '8', '9'];

let array = [];
for (let i = 0; i <= 7; i++) {
  array.push(nums[Math.floor(Math.random() * nums.length)]);
}
let c = array.join("");
can.fillText(c, canvas.width / 4, canvas.height / 2);

input.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    if (input.value === c) {
      output.classList.remove("inCorrectCaptcha");
      output.classList.add("correctCaptcha");
      output.innerHTML = "Correct";
    } else {
      output.classList.remove("correctCaptcha");
      output.classList.add("inCorrectCaptcha");
      output.innerHTML = "Incorrect! Try Again";
    }
  }
});

submit.addEventListener("click", () => {
  if (input.value === c) {
    output.classList.remove("inCorrectCaptcha");
    output.classList.add("correctCaptcha");
    output.innerHTML = "Correct";
  } else {
    output.classList.remove("correctCaptcha");
    output.classList.add("inCorrectCaptcha");
    output.innerHTML = "Incorrect! Try Again";
  }
});

refresh.addEventListener("click", () => {
  input.value = "";
  output.innerHTML = "";
  can.clearRect(0, 0, canvas.width, canvas.height);
  let array = [];
  for (let i = 0; i <= 7; i++) {
    array.push(nums[Math.floor(Math.random() * nums.length)]);
  }
  c = array.join("");
  can.fillText(c, canvas.width / 4, canvas.height / 2);
});

setInterval(() => {
  output.innerHTML = "";
}, 4000);
