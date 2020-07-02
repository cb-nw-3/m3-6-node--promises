var inquirer = require('inquirer');
const fs = require('fs');
const wordListPath = require('word-list');
const wordArray = fs.readFileSync(wordListPath, 'utf8').split('\n');
var chalkPipe = require('chalk-pipe');
const title = ` 
 _                                             
| |                                            
| |__   __ _ _ __   __ _  _ __ ___   __ _ _ __  
| '_   / _' | '_   / _' |  '_ ' _   / _' | '_  
| | | | (_| | | | | (_| |  | | | | | (_| | | | |
|_| |_| __,_|_| |_| __, | _| |_| |_| __,_|_| |_|
                    __/ |                      
                   |___/    `;

console.log(title);
console.log(wordArray[Math.floor(Math.random() * wordArray.length)]);

// var game = {
//   wordBank: wordList,
//   guessesRemaining: 10, // per word
//   currentWrd: null, // the word object

//   startGame: function () {
//     // make sure the user has 10 guesses
//     this.guessesRemaining = 10;

//     // get a random word from the array
//     var j = Math.floor(Math.random() * this.wordBank.length);
//     this.currentWrd = this.wordBank[j];

//     // Inform User game has begun
//     console.log(
//       'Figure out the Programming Language. Do you have what it takes?'
//     );

//     // Show the empty letters ( _ _ _ _ ) and guesses, etc.
//     displayHangman = new lettersToDisplay(this.currentWrd);
//     displayHangman.parseDisplay();
//     console.log('Guesses Left: ' + game.guessesRemaining);

//     // prompt for a letter
//     keepPromptingUser();
//   },
// };
