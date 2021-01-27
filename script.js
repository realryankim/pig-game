'use strict';

// Selecting elements
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');

// getElementsById... sss??? Oh... Come On!!!
// let current0El = document.getElementsById('current--0');

let current0El = document.getElementById('current--0');
let current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// Starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

let currentScore = 0;
// Rolling dice functionality
btnRoll.addEventListener('click', function () {
  // 1. Generating a random dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;
  console.log(dice);

  // 2. Display Dice
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;

  // Unnecessary for loop code
  //   diceEl.classList.remove('hidden');
  //   for (let i = 1; i <= 6; i++) {
  //     if (dice === i) {
  //       diceEl.src = `dice-${i}.png`;
  //     }
  //   }

  // DRY CODE!!!
  //   if (dice === 1) {
  //     diceEl.src = 'dice-1.png';
  //   }
  //   if (dice === 2) {
  //     diceEl.src = 'dice-2.png';
  //   }
  //   if (dice === 3) {
  //     diceEl.src = 'dice-3.png';
  //   }
  //   if (dice === 4) {
  //     diceEl.src = 'dice-4.png';
  //   }
  //   if (dice === 5) {
  //     diceEl.src = 'dice-5.png';
  //   }
  //   if (dice === 6) {
  //     diceEl.src = 'dice-6.png';
  //   }

  // 3. Check for rolled 1:
  if (dice !== 1) {
    // Add dice to current score
    currentScore += dice;
    current0El.textContent = currentScore;
  } else {
    // switch to next player
  }
});
