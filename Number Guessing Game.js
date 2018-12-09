function randomRange(myMin, myMax) {
  return Math.floor(Math.random() * (myMax - myMin + 1) +myMin);
}

var guessCounter = 1;
var maxGuesses = 10;
var randomNum = randomRange(1, 10);

do {
var userGuess = parseInt(prompt("Guess a number between 1 and 10"));
    if (userGuess < randomNum) {
      alert("You guessed too low!");
    } else if (userGuess > randomNum) {
      alert("You guessed too high!");
    } else {
      alert("Congratulations!!! You guessed correctly!!");
    }
} while (userGuess != randomNum && ++guessCounter <maxGuesses );

 if (maxGuesses == guessCounter) {
   alert("YOU LOSE! You're all out of guesses!");
 }