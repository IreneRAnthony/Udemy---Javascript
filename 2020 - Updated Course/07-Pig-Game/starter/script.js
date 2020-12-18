'use strict';

// Selecting elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

let scores = [0,0];
let currentScore = 0;
let activePlayer = 0;
let playing = true;

diceEl.classList.add('hidden');

// General gameplay functions
const newGame = function(){
    playing = true;
    scores = [0,0];
    currentScore = 0;
    activePlayer = 0;

    score0El.textContent = 0;
    score1El.textContent = 0;
    current0El.textContent = 0;
    current1El.textContent = 0;
    
    diceEl.classList.add('hidden');
    player0El.classList.remove('player--winner');
    player1El.classList.remove('player--winner');
    player0El.classList.add('player--active');
    player1El.classList.remove('player--active');
};

const switchPlayer = function(){
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    currentScore = 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
};

const rollDice = function(){
    if(playing){
        // Generate a random number
        const number = Math.floor((Math.random() * 6) + 1);
        // Remove the hidden property to show the dice
        diceEl.classList.remove('hidden');
        // Depending on what was rolled, display the correct dice image
        diceEl.src = `dice-${number}.png`;
        // Depending on if the dice rolled 1, switch to next player
        if(number === 1){
            // Switch to next player
            switchPlayer();
        } else {
            // Add current dice value to score
            currentScore += number;
            document.getElementById(`current--${activePlayer}`).textContent = currentScore;
        }
    };
};

const holdScore = function(){
    if(playing){
        // Add current score to active player's score
        scores[activePlayer] += currentScore;
        document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
        // Check if player's score is >= 100
        // If so, finish game, if not switch players
        if(scores[activePlayer] >= 100){
            diceEl.classList.add('hidden');
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
            playing = false;
        } else {
            switchPlayer();
        }
    };
};

btnNew.addEventListener('click', newGame);
btnRoll.addEventListener('click', rollDice);
btnHold.addEventListener('click', holdScore);
