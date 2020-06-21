const inquirer = require("inquirer");

const hiddenNumber = Math.floor(Math.random() * 100) + 1;

let userGuesses = 5;

const question = {
  type: "input",
  name: "guess",
  message: "Guess a number from 1 to 100",
};

const main = () => {
  console.log("Welcome to Guess the Number");
  promptUser();
};

const promptUser = () => {
  userGuesses--;

  if (userGuesses > -1) {
    inquirer
      .prompt(question)
      .then((answer) => {
        let guess = Number(answer.guess);

        if (guess === hiddenNumber) {
          console.log("Winner winner chicken dinner!");
          return;
        } else if (guess < hiddenNumber) {
          question.message = "Number is too low, try again";
          promptUser();
        } else if (guess > hiddenNumber) {
          question.message = "Number is too high, try again";
          promptUser();
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
