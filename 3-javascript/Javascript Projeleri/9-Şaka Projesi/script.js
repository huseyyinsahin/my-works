const jokeButton = document.getElementById("jokeButton");
const joke = document.getElementById("joke");

const apiKey = "5sSpLyfqaIFSFT93E7A6lA==GnUSkTsMOp5nbyza";
const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1";

const options = {
  method: "GET",
  headers: {
    "X-Api-Key": apiKey,
  },
};
async function getJoke() {
  try {
    joke.textContent = "Updating...";
    jokeButton.textContent = "Loading...";
    jokeButton.disabled = true;

    const response = await fetch(apiURL, options);
    const data = await response.json();
    debugger;

    jokeButton.disabled = false;
    jokeButton.textContent = "Tell me a joke";
    joke.textContent = data[0].joke;
  } catch (error) {
    joke.textContent = "Try Again Later";
    jokeButton.disabled = false;
    jokeButton.textContent = "Tell me a joke";
  }
}

jokeButton.addEventListener("click", getJoke);
