const programs = new Map();

function load(program) {
  programs.set(program.name, program);
}

function execute(event) {
  event.preventDefault();
  const commandElem = document.querySelector("#command");
  const inputELem = document.querySelector("#input");
  const outputElem = document.querySelector("#output");

  const args = commandElem.value.trim().split(" ").filter((arg) => arg !== "");
  const programName = args[0].toLowerCase();
  const program = programs.get(programName) ?? (() => "Error: Command not found.");

  commandElem.value = "";
  outputElem.value = program(inputELem.value, ...args);
}

load(function add(input, ...args) {
  return String(+args[1] + +args[2]);
});

load(function sub(input, ...args) {
  return String(+args[1] - +args[2]);
});

load(function copy(input, ...args) {
  return input;
});