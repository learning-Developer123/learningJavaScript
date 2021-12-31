"use strict";
let secretNumber = Math.trunc(Math.random() * 30) + 1;
let score = 20;
let highscore = 0;
let challenges = 3;
var game;
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    document.querySelector(".message").textContent = "Enter a Number";
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent =
      "Correct Guess!!, You WON!!";
    document.querySelector("body").style.backgroundColor = "#40a238";
    document.querySelector(".secret-number").textContent = secretNumber;
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent =
        guess > secretNumber ? "Too High !" : "Too Low!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You Lost!";
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  document.querySelector(".message").textContent = "Start The Game.....";
  score = 20;
  document.querySelector(".highscore").textContent = 0;
  secretNumber = Math.trunc(Math.random() * 30) + 1;
  document.querySelector("body").style.backgroundColor = "#434434";
  document.querySelector(".guess").value = "";
  document.querySelector(".score").textContent = score;
  document.querySelector(".secret-number").textContent = "?";
});
