// Exercise 6 - Guess The Number
// This exercise will be done in a new file, guess-the-number.js.

// Using the inquirer module, write a program that will play the "guess the number game":

// Create a random number between 1 and 100. Call it the hidden number
// Start with 5 guesses
// As long as there are guesses left:
// Ask the user for a number between 1 and 100 until they give you one
// If they find the hidden number, they win the game. END
// Otherwise, tell them whether their guess is lower or higher than the hidden number
// Loop back
// The user has lost the game. END

const inquirer = require("inquirer");

const randomNumber = Math.round(Math.random() * 100);
// console.log(randomNumber); // ;)
let guessNumber = 5;

function guessTheNumber() {
  guessNumber = guessNumber - 1;

  inquirer
    .prompt([
      {
        type: "input",
        name: "question",
        message: "Try to find the lucky number form 0 to 100!",
      },
    ])
    .then((answers) => {
      if (guessNumber == 0) {
        console.log("You lost!");
      } else if (answers.question == randomNumber) {
        console.log("You won!");
      } else if (answers.question > randomNumber) {
        console.log(
          "The number you entered is too high. " +
            guessNumber +
            " guesses left."
        );
        guessTheNumber();
      } else if (answers.question < randomNumber) {
        console.log(
          "The number you entered is too low. " + guessNumber + " guesses left."
        );
        guessTheNumber();
      } else {
        console.log("Oops, the number must be between 0 and 100!");
      }
    });
}

guessTheNumber();
