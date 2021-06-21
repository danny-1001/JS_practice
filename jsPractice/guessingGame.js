//Guessing Game exercise

function guessGame() {
  //   let randomNum = Math.random() * 11;
  let randomNum = Math.floor(Math.random() * 11);
  let guess;
  do {
    guess = prompt(`Guess a number between 1-10!`);
    console.log(guess,randomNum);
    if (randomNum > guess) {
      console.log(`You guessed too low!`);
    } else if (randomNum < guess) {
      console.log(`You guessed to high!`);
    }
  } while (guess != randomNum);{
      console.log(`You won!... for now`)
  }
}

guessGame();
