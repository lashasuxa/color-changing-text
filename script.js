function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}

const title = document.getElementById("title");
title.style.color = "grey ";
const titleSeparated = document.getElementById("title-separated");

const colors = [
  "red",
  "green",
  "blue",
  "yellow",
  "orange",
  "grey",
  "black",
  "pink",
];

const textInput = document.getElementById("textInput");
const resetBtn = document.getElementById("resetBtn");

textInput.oninput = (event) => {
  title.textContent = event.target.value;
  stop();
  start();
};
resetBtn.onclick = (event) => {
  stop();
  textInput.value = "";
};

let interval;

function start() {
  interval = setInterval(() => {
    Array.from(titleSeparated.childNodes).map((span, index) => {
      span.style.color = colors[getRandomInt(0, 7)];
      span.style.fontSize = `${getRandomInt(10, 40)}px`;
    });
  }, 500);

  for (let i = 0; i < title.textContent.length; i++) {
    let character = title.textContent[i];

    let span = document.createElement("span");
    span.textContent = character;
    titleSeparated.appendChild(span);
  }
}

function stop() {
  clearInterval(interval);
  Array.from(titleSeparated.childNodes).map((span) => {
    span.remove();
  });
}
