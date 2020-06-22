const inquirer = require('inquirer');

const hiddenNumber = Math.round(Math.random() * 100);
let chances = 5;

const question = {
    type: 'input',
    name: 'question',
    message: 'Guess the number between 0 and 100.',
    validate: function (value) {
        let check = !isNaN(parseFloat(value));
        return check || 'Sorry, it is not a number!';
    },
};

function guessNumber() {
    console.log(`${chances} chances left.`);
    chances--;
    if (chances >= 0) {
        inquirer.prompt(question).then((answer) => {
            let number = answer.question;
            if (number > hiddenNumber) {
                console.log('Too high...Try again!');
                guessNumber();
            } else if (number < hiddenNumber) {
                console.log('Too low...Try again!');
                guessNumber();
            } else {
                console.log('Congratulations, right number!');
            }
        });
    } else {
        console.log(`Out of tries, sorry chump.The Number was ${hiddenNumber}`);
    }
}

guessNumber();