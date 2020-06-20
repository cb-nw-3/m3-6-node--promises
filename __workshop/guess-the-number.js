const inquirer = require("inquirer");
const hiddenNumber = Math.round(Math.random() * 100);
let tries = 0;
//console.log(hiddenNumber);

const question = {
  type: "input",
  name: "singleQuestion",
  message: "What is the Secret Number between 0 and 100?",
  validate: function (value) {
    var valid = !isNaN(parseFloat(value));
    return valid || "Please enter a number";
  },
};

function askQuestion() {
  console.log(`${5 - tries} tries left.`);
  tries++;
  if (tries < 6) {
    inquirer.prompt(question).then((answer) => {
      number = answer.singleQuestion;
      if (number > 100 || number < 0) {
        console.log("You're not even trying! (out of bounds)");
      } else if (number > hiddenNumber) {
        console.log("Too High! Try Again.");
        askQuestion();
      } else if (number < hiddenNumber) {
        console.log("Too Low! Try Again.");
        askQuestion();
      } else {
        console.log("Congratulations, you win!");
      }
    });
  } else {
    console.log(`Out of tries, sorry chump. The Number was ${hiddenNumber}`);
  }
}

askQuestion();
