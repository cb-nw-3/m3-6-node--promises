const inquirer = require('inquirer');

// Create a random number between 1 and 100. Call it the hidden number
const hiddenNumber = Math.round(Math.random() * 100);

// Start with 5 guesses
let guesses = 5;

function guessTheNumber() {
    guesses--;
    // console.log(hiddenNumber);

    inquirer
        .prompt([
            {
                type: 'input',
                name: 'answer',
                message: 'Guess a number between 0 and 100): '
            },            
        ])
        .then((response) => {
            if (Number(response.answer) === hiddenNumber ) {
                console.log('You win!!!')
            } else if ( guesses === 0 ) {
                console.log('No more guesses - you lose!!!')
            } else if (Number(response.answer) > 100 || Number(response.answer) < 0 ) {
                console.log(`You're out of range! Only ${guesses} more chance!`);
                guessTheNumber();
            } else if (Number(response.answer) > hiddenNumber ) {
                console.log(`Too high! Only ${guesses} more chance!`);
                guessTheNumber();
            } else if (Number(response.answer) < hiddenNumber ) {
                console.log(`Too low! Only ${guesses} more chance!`);
                guessTheNumber();
            } else {
                console.log(`That wasn't a number I recognise! Only ${guesses} more chance!`)
                guessTheNumber();
            }
        })
        .catch(error => {
            console.log('error ', error)
            process.exit(1);
        })
};

guessTheNumber();
