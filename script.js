let textBox = document.querySelector("textArea");
let wordCount = document.querySelector("#wordCount");
let charCount = document.querySelector("#charCount");
let spaceCount = document.querySelector("#spaceCount");
let charWithSpaceCount = document.querySelector("#charWithSpaceCount");

function calculateWords(e) {
  let value = e.target.value;
  updateWordCounter(value.split(" ").length);
  updateCharCounter(value.length);
  updateSpaceCounter(value.split(" ").length);
  updateCharWithSpaceCounter(value.length);
}

function updateWordCounter(count) {
  wordCount.textContent = count;
}

function updateCharCounter(count) {
  charCount.textContent = count;
}

function updateSpaceCounter(count) {
  spaceCount.textContent = count;
}

function updateCharWithSpaceCounter(count) {
  charWithSpaceCount.textContent = count;
}

textBox.addEventListener("input", calculateWords);
