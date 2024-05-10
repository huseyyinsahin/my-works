// 1.çözüm

// const insertDiv = document.getElementById("insert");

// document.addEventListener("keydown", (event) => {
//   const newDivs = document.querySelectorAll(".newDiv");

//   newDivs.forEach((div) => {
//     div.remove();
//   });

//   for (let i = 0; i < 3; i++) {
//     let newDiv = document.createElement("div");
//     newDiv.classList.add("key", "newDiv");
//     switch (i) {
//       case 0:
//         newDiv.textContent =
//           event.key === " " ? "Key :Space" : "Key :" + event.key;
//         break;
//       case 1:
//         newDiv.textContent = "KeyCode :" + event.keyCode;
//         break;
//       case 2:
//         newDiv.textContent = "Code :" + event.code;
//         break;
//       default:
//         break;
//     }

//     insertDiv.appendChild(newDiv);
//   }
// });

// 2.Çözüm

const insertDiv = document.getElementById("insert");

window.addEventListener("keydown", (event) => {
  insertDiv.innerHTML = `
  <div class="key">
    ${event.key === " " ? "Space" : event.key}
    <small>event.key</small>
  </div>
  <div class="key">
    ${event.keyCode}
    <small>event.keyCode</small>
  </div>
  <div class="key">
    ${event.code}
    <small>event.code</small>
  </div>`;
});
