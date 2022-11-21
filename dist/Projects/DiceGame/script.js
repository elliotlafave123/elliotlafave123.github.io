'use strict';

// selecting elements
const player1EL = document.querySelector('.player--1');
const player0EL = document.querySelector('.player--0');
const score0EL = document.getElementById('score--0');
const score1EL = document.getElementById('score--1');
const current0EL = document.getElementById('current--0');
const current1EL = document.getElementById('current--1');
const diceEL = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');


let scores, currentScore, activePlayer, playing;

// starting conditions
function startGame() {
    score0EL.textContent = 0;
    score1EL.textContent = 0;
    current0EL.textContent=0;
    current1EL.textContent=0;
 
    playing = true;
    currentScore = 0;
    activePlayer = 0;
    scores = [0,0];

    diceEL.classList.add('hidden');  // hide the dice at beginning
    player0EL.classList.remove('player--winner');
    player1EL.classList.remove('player--winner');
    player0EL.classList.add('player--active');
    player1EL.classList.remove('player--active');
}

startGame();

const switchPlayer = function() {
    activePlayer = activePlayer === 0 ? 1 : 0;
    currentScore = 0;
    current0EL.textContent=0;
    current1EL.textContent=0;
    player0EL.classList.toggle('player--active');
    player1EL.classList.toggle('player--active');
}

// rolling the dice
btnRoll.addEventListener('click', function() {
    if(playing) {
        // 1.Generate a random dice roll
        const dice = Math.trunc(Math.random()*6) + 1;

        // 2. display the dice
        diceEL.classList.remove('hidden');
        diceEL.src = `dice-${dice}.png`

        // 3. Check for rolled 1
        if(dice !== 1) {
            // add dice to current score
            currentScore += dice;
            document.getElementById(`current--${activePlayer}`).textContent = currentScore;
        } else { 
            // if true switch player
            document.getElementById(`current--${activePlayer}`).textContent = 0;
            switchPlayer();
        }
    }
})

// holding the score 
btnHold.addEventListener('click', function() {
    if(playing) {
        // add current score to active player
        scores[activePlayer] += currentScore;
        document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];

        // check if a players score is > 100
        if (scores[activePlayer] >= 100) {
            // Finish the game
            playing = false;
            diceEL.classList.add('hidden');
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
        }   else {
            switchPlayer();
        }      
    }   
})

btnNew.addEventListener('click', function() {startGame()})