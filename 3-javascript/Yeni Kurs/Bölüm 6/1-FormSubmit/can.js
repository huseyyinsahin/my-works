const form = document.querySelector(".signupform");
const username = document.querySelector("#username");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  //  console.log('Form gönderildi')
  // console.log(username.value);
  console.log(form.username.value);
});
