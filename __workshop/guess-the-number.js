const inquirer = require("inquirer");

let randomNumber = Math.round(Math.random() * 99 + 1);
console.log(randomNumber);

let question = {
  type: "input",
  name: "userNumber",
  message: "Guess a number bewteen 1 and 100",
};
let tries = 5;
function inquirerFunction() {
  tries -= 1;
  inquirer.prompt([question]).then((answer) => {
    if (tries == 0) {
      console.log("No more tries, you lost !");
    } else if (answer.userNumber == randomNumber) {
      console.log("YOU WIN");
    } else if (answer.userNumber > randomNumber) {
      console.log("Try lower");
      inquirerFunction();
    } else {
      console.log("Try Higher");
      inquirerFunction();
    }
  });
}

inquirerFunction();
