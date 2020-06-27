const inquirer = require('inquirer')

let amountofGuesses = 5;
let randomNumber = Math.floor(Math.random() * 101);

const question = {
  type: 'number',
  name: 'numberGuess',
  message: 'Find the number between 0 and 100',
  validate: function(userInput) {
    if (typeof userInput === 'number') {
      return true
    } else {
      return console.log('not a good input')
    }
  }
}

function guessNumber() {
  console.log(`${amountofGuesses} tries left`)

  if (amountofGuesses > 0) {
    inquirer.prompt(question)
      .then(answer => {
        number = answer.numberGuess;
        if (number > 100 || number < 0) {
          console.log('out of bounds');
          guessNumber();
        } else if (number > randomNumber) {
          console.log('too high');
          amountofGuesses--;
          guessNumber();
        } else if (number < randomNumber) {
          console.log('too low');
          amountofGuesses--;
          guessNumber();
        } else {
          console.log(`right answer: ${number}`);
          return number
        }
      })
  } else {
    console.log(`no more guess, right number: ${randomNumber}`)
  }
}

guessNumber()

