"use strict";

function typeWriter(el) {
  const textArray = el.innerHTML.split("");
  el.innerHTML = "";
  textArray.forEach((letter, i) =>
    setTimeout(() => (el.innerHTML += letter), 95 * i)
  );

  setInterval(() => typeWriter(el), 8000);
}

typeWriter(elementEl);

function playAudio(x) {
  x.play();
  x.currentTime = 0;
}

document.addEventListener("click", (e) => {
  let body = document.querySelector("body");
  let div = document.createElement("div");
  let x = document.getElementById("myAudio");
  let randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  div.style.left = `${e.clientX - 10}px`;
  div.style.top = `${e.clientY - 10}px`;
  div.style.backgroundColor = randomColor;
  div.setAttribute("class", "dot");
  body.append(div);
  playAudio(x);
  setTimeout(() => {
    body.removeChild(div);
  }, 1100);
});
