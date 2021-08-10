'use strict';
/*console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🎊 Correct number'

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value= 23;
console.log(document.querySelector('.guess').value);*/

let secretNumber = Math.trunc(Math.random() * 25) + 1;
let score = 10;
let highScore = 0;
//document.querySelector('.number').textContent = secretNumber;
// console.log(secretNumber);

function displayMsg(message) {
  document.querySelector('.message').textContent = message;
}

function displaynum(number) {
  document.querySelector('.number').textContent = number;
}

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //When no input
  if (!guess) {
    // console.log(`No number`);
    // document.querySelector('.message').textContent = `⛔ No number!`;
    displayMsg(`⛔ No number!`);
  }

  //Wehn player wins
  else if (secretNumber === guess) {
    // document.querySelector('.message').textContent = `🎉Correct answer!`;
    displayMsg(`🎉Correct answer!`);
    // document.querySelector('.number').textContent = secretNumber;
    displaynum(secretNumber);

    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (secretNumber !== guess) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      //   guess > secretNumber ? 'Too high' : 'Too low';
      displayMsg(guess > secretNumber ? 'Too high' : 'Too low');

      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent = `💣 You lost the game!`;
      displayMsg(`💣 You lost the game!`);
      document.querySelector('body').style.backgroundColor = 'red';
      document.querySelector('.score').textContent = 0;
    }
  }

  //When guess is too high
  /*else if (guess > secretNumber) {
    // console.log(`Entered value is high`);
    if (score > 0) {
      document.querySelector('.message').textContent = `📈 value is too high!`;
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = `💣 You lost the game!`;
      document.querySelector('body').style.backgroundColor = 'red';
    }
  }

  //When guess is too low
  else if (guess < secretNumber) {
    if (score > 0) {
      document.querySelector('.message').textContent = `📉 value is too low!`;
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = `💣 You lost the game!`;
      document.querySelector('body').style.backgroundColor = 'red';
    }
  }*/
});

document.querySelector('.again').addEventListener('click', function () {
  // console.log(`clicked again`);
  score = 10;
  secretNumber = Math.trunc(Math.random() * 25) + 1;
  // guess = Number(document.querySelector('.guess').value='';
  document.querySelector('body').style.backgroundColor = '#75a2aa96';
  // document.querySelector('.message').textContent = 'Start guessing..';
  displayMsg(`🤔 Start guessing`);
  // document.querySelector('.number').textContent = secretNumber;
  displaynum(secretNumber);
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  document.querySelector('.number').style.width = '15rem';
});
