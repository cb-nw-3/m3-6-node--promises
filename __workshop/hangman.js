const inquirer = require('inquirer')
const words = require('an-array-of-english-words')

// select random word in package
let randomWord = words[Math.floor(Math.random() * words.length)];
let numberOfTries = 6; // two arms, two legs, body, head
// put the word into an array
let wordArray = randomWord.split('');
// change the wordArray in blank space
let tempAnswer = wordArray.map(() => '_ ');

// end the game if tempAnswer (user found answer) has a blank space
// otherwise recall the function
function endGame() {
  if (!tempAnswer.includes('_ ')) {
    console.log('Congratulations!')
  } else {
    guessWord();
  }
}

// print out the letter that the user guessed if they're in the word
function printGoodLetters(letter) {
  tempAnswer = tempAnswer.map((item, index) => {
    if (item === '_ ' && wordArray[index] === letter) {
      return `${letter} `
    } else {
      return item
    }
  })
}

const question = {
  type: 'input',
  name: 'letterGuess',
  message: 'Guess the word or guess a letter.',
  validate: input => {
    if (input.length === 1 || input === randomWord) {
      return true
    } else {
      return 'try just one letter or the complete word'
    }
  }
}

function guessWord() {
  console.log(`\n\n${numberOfTries} tries left\n`);
  console.log(tempAnswer.join('') + '\n')
  if (numberOfTries > 0) {
    inquirer.prompt(question).then(answer => {
      letter = answer.letterGuess;
      if (wordArray.includes(letter)) {
        printGoodLetters(letter);
        endGame();
      } else if (letter === randomWord) {
        console.log(randomWord)
        console.log('Congratulations!')
      } else {
        numberOfTries--;
        guessWord();
      }
    })
  } else {
    console.log(`No more guesses, the word was ${randomWord}`);
  }
}

guessWord()