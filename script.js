'use strict';
/*
  NOTE: This code is written in a beginner-friendly way.
  It may not follow best practices or the DRY (Don't Repeat Yourself) principle perfectly,
  because I am still learning JavaScript and focusing on understanding the logic.
  A more professional and optimized version will be implemented later.

  Beginner's version — may break the DRY principle 🙈
  Just practicing and learning. A cleaner, pro version is coming soon!
*/
const img = document.querySelector('.dice');
let score1 = document.getElementById('score--0');
let score2 = document.getElementById('score--1');
let current1 = document.getElementById('current--0');
let current2 = document.getElementById('current--1');
let rollBtn = document.querySelector('.btn--roll');
let holdBtn = document.querySelector('.btn--hold');
let newBtn = document.querySelector('.btn--new');
let sectionPlayer1 = document.querySelector('.player--0');
let sectionPlayer2 = document.querySelector('.player--1');
const player1 = document.getElementById('name--0');

//starting condition and some variables
let currentScore, playing, sum, sum2;
//initial position function
const init = function () {
  score1.textContent = 0;
  score2.textContent = 0;
  current1.textContent = 0;
  current2.textContent = 0;
  currentScore = 0;
  img.classList.add('hidden');
  playing = true;
  sectionPlayer1.classList.remove('player--winner');
  sectionPlayer2.classList.remove('player--winner');
  sectionPlayer1.classList.add('player--active');
  sectionPlayer2.classList.remove('player--active');
};
init(); //calling the function:

//switch players function
const switchPlayer = function () {
  if (sectionPlayer1.classList.contains('player--active')) {
    current1.textContent = 0;
    currentScore = 0;
    sectionPlayer1.classList.remove('player--active');
    sectionPlayer2.classList.add('player--active');
  } else {
    current2.textContent = 0;
    currentScore = 0;
    sectionPlayer2.classList.remove('player--active');
    sectionPlayer1.classList.add('player--active');
  }
};

rollBtn.addEventListener('click', function () {
  if (playing) {
    //1.Generating a random dice roll:
    let rollingNumber = Math.trunc(Math.random() * 6) + 1;
    //2.Display dice:
    img.classList.remove('hidden');
    img.src = `dice-${rollingNumber}.png`;
    //3.sum of dice:
    currentScore += rollingNumber;
    //4.checking on the active player:
    if (sectionPlayer1.classList.contains('player--active')) {
      current1.textContent = currentScore;
    } else {
      current2.textContent = currentScore;
    }
    //5.if rollingNumber =1
    if (rollingNumber === 1) {
      switchPlayer();
    }
  }
});

holdBtn.addEventListener('click', function () {
  if (playing) {
    if (sectionPlayer1.classList.contains('player--active')) {
      sum = Number(score1.textContent) + currentScore;
      score1.textContent = sum;

      //winner check of player 1 using nested if:
      if (sum >= 100) {
        sectionPlayer1.classList.remove('active--player');
        sectionPlayer1.classList.add('player--winner');
        img.classList.add('hidden');
        playing = false;
      } else {
        switchPlayer();
      }
    } else if (sectionPlayer2.classList.contains('player--active')) {
      sum2 = Number(score2.textContent) + currentScore;
      score2.textContent = sum2;

      //winner check of player 2 using nested if:
      if (sum2 >= 100) {
        sectionPlayer2.classList.remove('active--player');
        sectionPlayer2.classList.add('player--winner');
        img.classList.add('hidden');
        playing = false;
      } else {
        switchPlayer();
      }
    }
  }
});
newBtn.addEventListener('click', init);

/*
This is more professional code:
//selecting elements
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const img = document.querySelector('.dice');
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');

const rollBtn = document.querySelector('.btn--roll');
const holdBtn = document.querySelector('.btn--hold');
const newBtn = document.querySelector('.btn--new');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

//starting conditions
let scores, currentScore, activePlayer, playing;

//some initial variables
const init = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;
  current1El.textContent = 0;
  current0El.textContent = 0;
  score0El.textContent = 0;
  score1El.textContent = 0;
  img.classList.add('hidden');
  player0.classList.remove('player--winner');
  player1.classList.remove('player--winner');
  player0.classList.add('player--active');
  player1.classList.remove('player--active');
};
init();
//switch player function
const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;
  player0.classList.toggle('player--active');
  player1.classList.toggle('player--active');
};

//rolling dice functionality
rollBtn.addEventListener('click', function () {
  if (playing) {
    //1.Generating a random dice roll:
    const dice = Math.trunc(Math.random() * 6) + 1;

    //2.Display dice:
    img.classList.remove('hidden');
    img.src = `dice-${dice}.png`;

    //3.if condition
    if (dice !== 1) {
      //Add dice to current score
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      //switch to next player
      switchPlayer();
      currentScore = 0;
      activePlayer = 0;
    }
  }
});

holdBtn.addEventListener('click', function () {
  if (playing) {
    //1.Add current score to active player
    scores[activePlayer] += currentScore;
    //scores[1]=scores[1]+currentScore
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    //2. check if player's score is >= 100
    if (scores[activePlayer] >= 5) {
      playing = false;
      img.classList.add('hidden');
      //finish the game
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
      rollBtn.addEventListener('click', function () {});
    } else {
      switchPlayer();
    }
  }
});

newBtn.addEventListener('click', init);
*/
