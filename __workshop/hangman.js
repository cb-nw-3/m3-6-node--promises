const inquirer = require("inquirer");

const secretWord = "catapult";
const progress = "________";

let userGuesses = 8;

const question = {
  type: "input",
  name: "guess",
  message: "Guess a letter",
};

const main = () => {
  console.log("Let's play hangman: " + progress);
  promptUser();
};

const promptUser = () => {
  userGuesses--;

  if (userGuesses > -1) {
    inquirer
      .prompt(question)
      .then((answer) => {
        let guess = answer.guess;

        if (secretWord.includes(guess)) {
          let index = [];

          index.push(secretWord.indexOf(guess));

          index.forEach((element) => {
            progress.splice(index, 0, element);
          });
          console.log("Good guess: " + progress);
        }
      })
      .catch((error) => {
        if (error.isTtyError) {
          console.log("Couldn't be rendered in the current environment");
        } else {
          console.log("Error: ", error);
        }
      });
  } else {
    console.log("You ran out of guesses, sorry!");
  }
};

main();
