const inquirer = require('inquirer');
const hiddenNumber = Math.floor(Math.random() * 100) + 1;
console.log('This is the secret target:', hiddenNumber);

const question = [
  {
    type: 'number',
    name: 'answer',
    message: 'Guess the hidden number between 1 and 100\n',
  },
];

let counter = 5;
inquirer.prompt(question).then(recursive);
function recursive(answer) {
  if (counter <= 1) {
    console.log('=( you lost');
    return;
  }
  answer.answer != hiddenNumber
    ? (counter--,
      console.log(
        `Try again, but ${
          answer.answer > hiddenNumber ? 'lower' : 'higher'
        }!! ${counter} more opportunities. `
      ),
      inquirer.prompt(question).then(recursive))
    : console.log('YOU WON!!!!');
}
