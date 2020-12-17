'use strict';

const displayMessage = function(message){
    document.querySelector('.message').textContent = message;
}

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function(){
    const guess = Number(document.querySelector('.guess').value);

    // No player input
    if(!guess){
        displayMessage("⛔️ No number!");
    // Win Conditions met
    } else if(guess === secretNumber){
        displayMessage('🎉 Correct Number!');
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('.number').textContent = secretNumber;
        if(score > highscore){
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
    // When input is wrong
    } else if(guess !== secretNumber){
        if(score > 0 && guess < secretNumber){
            guess < secretNumber ?  displayMessage("📉 Too low!") : displayMessage("📈 Too High!");
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            displayMessage('💥 Game Over!');
            document.querySelector('.score').textContent = 0;
        }
};

document.querySelector('.again').addEventListener('click', function(){
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;

    document.querySelector('.score').textContent = 20;
    displayMessage("Start Guessing...");

    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';

    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
});

});