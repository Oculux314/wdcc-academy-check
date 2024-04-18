// alert("main.js online!")

function execute(event) {
  event.preventDefault();
  const commandElem = document.querySelector("#command");
  const inputELem = document.querySelector("#input");
  const outputElem = document.querySelector("#output");

  commandElem.value = "";
  outputElem.value = inputELem.value;
}