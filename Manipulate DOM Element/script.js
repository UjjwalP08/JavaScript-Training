var score, roundScore, activatePlayer, gamePlaying,prev_score,win_score;


// Game Start from here
init();

roll_button = document.querySelector('.btn--roll');

// When the roll button is clikced
roll_button.addEventListener('click', function () {
  // only exist when our game is playing (not work when we found the winner)

  if (gamePlaying) {
    // For Create the dice we use the random function
    var dice = Math.floor(Math.random() * 6) + 1;

    roll_dice = document.querySelector('.dice');
    roll_dice.style.display = 'block';
    roll_dice.src = 'dice-' + dice + '.png';
    // console.log("Button Clicked");

    if (dice !== 1) { 
      roundScore = roundScore + dice;
      document.querySelector('#current--' + activatePlayer).innerHTML =
        roundScore;
    } else {
      // change the player if dice roll to 1
      changeplayer();
    }
  }
});

// When Hold button click add the current score in main score
hold_btn = document.querySelector('.btn--hold');

hold_btn.addEventListener('click', function () {
  if (gamePlaying) {
    // Add the score in main score
    score[activatePlayer] = score[activatePlayer] + roundScore;

    // Upadate to the Website
    document.getElementById('score--' + activatePlayer).innerHTML =
      score[activatePlayer];

    if (score[activatePlayer] >= 100  ) {
      document.getElementById('name--' + activatePlayer).innerHTML =
        'Winner!!!';
      roll_dice.style.display = 'none';
      document
        .querySelector('.player--' + activatePlayer)
        .classList.add('player--winner');
      document
        .querySelector('.player--' + activatePlayer)
        .classList.remove('player--active');
      // Game is over so set the gameplaying variable equal to false
      gamePlaying = false;
    } else {
      changeplayer();
    }
  }
});

// New game Button
new_btn = document.querySelector('.btn--new');
new_btn.addEventListener('click', init);

// Game start and New game function
function init() {
  // Start the game so set gamePlaying variable is true
  gamePlaying = true;
  // win_score = prompt("Enter the Wining score which you want to set")
  // win_score = 100;
  function getScore()
  {
    win_score = document.querySelector('#win_core').value;
  }
  console.log(win_score)

  // Inital Score of the Player
  score = [0, 0];
  roundScore = 0;
  activatePlayer = 0;
  // AcitavtePlayer = 0 means the First player
  // AcitavtePlayer = 1 means the Second player
  // We use 0 and 1 becoz this we can able to Access the player score index of score arary

  document.getElementById('current--0').innerHTML = '0';
  document.getElementById('current--1').innerHTML = '0';
  document.getElementById('score--0').innerHTML = '0';
  document.getElementById('score--1').innerHTML = '0';
  document.querySelector('.player--0').classList.remove('player--winner');
  document.querySelector('.player--1').classList.remove('player--winner');
  document.querySelector('.player--0').classList.remove('player--active');
  document.querySelector('.player--1').classList.remove('player--active');

  // Game always start withe the player 1
  document.querySelector('.player--0').classList.add('player--active');

  document.querySelector('.dice').style.display = 'none';

  // Reset the player names
  document.getElementById('name--0').innerHTML = 'Player 1';
  document.getElementById('name--1').innerHTML = 'Player 2';
}

function changeplayer() {
  activatePlayer === 0 ? (activatePlayer = 1) : (activatePlayer = 0);
  roundScore = 0;

  document.getElementById('current--0').innerHTML = '0';
  document.getElementById('current--1').innerHTML = '0';

  document.querySelector('.player--0').classList.toggle('player--active');
  document.querySelector('.player--1').classList.toggle('player--active');

  roll_dice.style.display = 'none';
}
