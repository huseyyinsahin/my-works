const getTodos = (resource) => {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();
    request.addEventListener("readystatechange", () => {
      if (request.readyState === 4 && request.status === 200) {
        const data = JSON.parse(request.responseText);
        resolve(data);
      } else if (request.readyState === 4) {
        reject("Başarılı cevap alamadık!");
      }
    });

    request.open("GET", resource);
    request.send();
  });
};

getTodos("example/can.json")
  .then((data) => {
    console.log("Promise 1 ", data);
    return getTodos("example/osman.json");
  })
  .then((data) => {
    console.log("Promise 2 ", data);
    return getTodos("example/tuba.json");
  })
  .then((data) => {
    console.log("Promise 3 ", data);
  })
  .catch((err) => {
    console.log(err);
  });
