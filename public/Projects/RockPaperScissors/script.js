"use strict";
const score = document.getElementById("score");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const rock = document.getElementById("rock");
const winText = document.getElementById("winText");
const playAgain = document.getElementById("playAgain");
const buttons = document.getElementById("buttons");
const picked = document.getElementById("picked");
const imgPlayer = document.getElementById("imgPlayer");
const imgAI = document.getElementById("imgAI");
const buttonPlayer = document.getElementById("buttonPlayer");
const buttonAI = document.getElementById("buttonAI");

// const score = document.getElementById("score");
let totalScore = 0;
score.textContent = "0";

const init = function () {
    buttonAI.classList.add("notShown");
    playAgain.classList.add("notShown");
    winText.classList.add("notShown");
};

buttonPlayer.classList.remove("yellow-picked", "red-picked", "blue-picked");
buttonAI.classList.remove("yellow-picked", "red-picked", "blue-picked");
init();

const win = function () {
    totalScore += 1;
    setTimeout(function () {
        score.textContent = totalScore;
        winText.textContent = "You win";
        playAgain.classList.remove("notShown");
        winText.classList.remove("notShown");
    }, 1500);
};

const lose = function () {
    totalScore = 0;
    setTimeout(function () {
        winText.textContent = "You lose";
        playAgain.classList.remove("notShown");
        winText.classList.remove("notShown");
        score.textContent = "0";
    }, 1500);
};

const draw = function () {
    setTimeout(function () {
        winText.textContent = "Draw";
        playAgain.classList.remove("notShown");
        winText.classList.remove("notShown");
    }, 1500);
};

const showHouse = function () {
    buttonAI.classList.remove("notShown");
};

const play = function (button) {
    buttons.classList.add("hidden");
    picked.classList.remove("hidden");

    if (AImove() === "scissors" && button === "rock") {
        // player wins
        win();
        imgPlayer.src = "images/icon-rock.svg";
        imgAI.src = "images/icon-scissors.svg";
        buttonPlayer.classList.add("red-picked");
        buttonAI.classList.add("yellow-picked");
        showHouse();
    } else if (AImove() === "paper" && button === "scissors") {
        // works
        // player wins
        win();
        imgPlayer.src = "images/icon-scissors.svg";
        imgAI.src = "images/icon-paper.svg";
        buttonPlayer.classList.add("yellow-picked");
        buttonAI.classList.add("blue-picked");
        showHouse();
    } else if (AImove() === "rock" && button === "paper") {
        // works
        // player wins
        win();
        imgPlayer.src = "images/icon-paper.svg";
        imgAI.src = "images/icon-rock.svg";
        buttonPlayer.classList.add("blue-picked");
        buttonAI.classList.add("red-picked");
        showHouse();
    } else if (AImove() === "scissors" && button === "paper") {
        //works
        // AI wins
        imgPlayer.src = "images/icon-paper.svg";
        imgAI.src = "images/icon-scissors.svg";
        buttonPlayer.classList.add("blue-picked");
        buttonAI.classList.add("yellow-picked");
        showHouse();
        lose();
    } else if (AImove() === "paper" && button === "rock") {
        // AI wins
        imgPlayer.src = "images/icon-rock.svg";
        imgAI.src = "images/icon-paper.svg";
        buttonPlayer.classList.add("red-picked");
        buttonAI.classList.add("blue-picked");
        showHouse();
        lose();
    } else if (AImove() === "rock" && button === "scissors") {
        //AI wins
        imgPlayer.src = "images/icon-scissors.svg";
        imgAI.src = "images/icon-rock.svg";
        buttonPlayer.classList.add("yellow-picked");
        buttonAI.classList.add("red-picked");
        showHouse();
        lose();
    } else {
        // draw
        winText.textContent = "DRAW";
        if (button === "scissors") {
            imgPlayer.src = "images/icon-scissors.svg";
            imgAI.src = "images/icon-scissors.svg";
            buttonPlayer.classList.add("yellow-picked");
            buttonAI.classList.add("yellow-picked");
            showHouse();
            draw();
        } else if (button === "rock") {
            imgPlayer.src = "images/icon-rock.svg";
            imgAI.src = "images/icon-rock.svg";
            buttonPlayer.classList.add("red-picked");
            buttonAI.classList.add("red-picked");
            showHouse();
            draw();
        } else {
            imgPlayer.src = "images/icon-paper.svg";
            imgAI.src = "images/icon-paper.svg";
            buttonPlayer.classList.add("blue-picked");
            buttonAI.classList.add("blue-picked");
            showHouse();
            draw();
        }
    }
};

const AImove = function () {
    let move = Math.floor(Math.random() * 3 + 1);
    if (move === 1) {
        return "paper";
    } else if (move === 2) {
        return "scissors";
    } else {
        return "rock";
    }
};

paper.addEventListener("click", function () {
    play("paper");
});

scissors.addEventListener("click", function () {
    play("scissors");
});

rock.addEventListener("click", function () {
    play("rock");
});

playAgain.addEventListener("click", function () {
    buttons.classList.remove("hidden");
    picked.classList.add("hidden");
    buttonPlayer.classList.remove("yellow-picked", "red-picked", "blue-picked");
    buttonAI.classList.remove("yellow-picked", "red-picked", "blue-picked");
    init();
});
