const inquirer = require("inquirer");
let keyword = "";
let tries = 0;
let wordState = [];

keyword.split("").forEach((letter, index) => {
  let currentEntry = {
    index,
    letter,
    discovered: false,
  };
  wordState.push(currentEntry);
});

//console.log(keyword);
//console.log(wordState);

const question = {
  type: "input",
  name: "singleQuestion",
  message: "Guess a letter or the full secret word if you know it?",
  validate: function (input) {
    input = input.toLowerCase();
    inputArray = input.split("");
    let isValid = inputArray.every((character) => {
      if (character.charCodeAt(0) >= 97 && character.charCodeAt(0) <= 122) {
        return true;
      } else return false;
    });
    return isValid || "No numbers allowed in Hangman™";
  },
};

function askQuestion() {
  console.log(
    `\n_."._."._."._."._."._."._."._."._."._."._."._."._."._."._."._\n\n
            ${8 - tries} tries left.`
  );
  console.log(
    `           Current progress: ${showProgress()}\n\n_."._."._."._."._."._."._."._."._."._."._."._."._."._."._."._\n`
  );
  tries++;
  if (tries < 9) {
    inquirer.prompt(question).then((answer) => {
      answerString = answer.singleQuestion;
      answerString = answerString.toLowerCase();

      if (answerString.length === 1) {
        //check letter against each letter of the word
        let howManyHits = 0;
        wordState.forEach((letterObject) => {
          if (letterObject.letter === answerString) {
            letterObject.discovered = true;
            howManyHits++;
          }
        });

        if (
          wordState.every((letterObject) => letterObject.discovered === true)
        ) {
          console.log(`Congrats! The word was indeed ${showProgress()}`);
          askPlayAgain();
        }

        if (howManyHits > 0) {
          console.log(
            `Nice, I found ${howManyHits} ${answerString}'s in the word`
          );
          askQuestion();
        } else {
          console.log(`There were no ${answerString} in the secret word`);
          askQuestion();
        }
      } else if (answerString === keyword) {
        console.log("Congratulations! You found the word");
        askPlayAgain();
      } else {
        console.log("Nope, that was not the secret word!");
        askQuestion();
      }
    });
  } else {
    console.log(`Out of tries, sorry chump. The word was ${keyword}`);
    askPlayAgain();
  }
}

gameSetup();
askQuestion();

function showProgress() {
  let partialReveal = [];
  wordState.forEach((letterObject) => {
    if (letterObject.discovered) {
      partialReveal.push(letterObject.letter);
    } else {
      partialReveal.push("_");
    }
  });
  return partialReveal.join(" ");
}

function gameSetup() {
  keyword = "testimony";
  tries = 0;
  wordState = [];

  keyword.split("").forEach((letter, index) => {
    let currentEntry = {
      index,
      letter,
      discovered: false,
    };
    wordState.push(currentEntry);
  });
}

function askPlayAgain() {
  const question = {
    type: "confirm",
    name: "playAgain",
    message: "Do you want to play again?",
    default: false,
  };

  inquirer.prompt(question).then((answers) => {
    if (answers.playAgain) {
      gameSetup();
      askQuestion();
    } else {
      return;
    }
  });
}
