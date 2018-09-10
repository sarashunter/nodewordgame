var inquirer = require('inquirer');
var Word = require('./Word');

var randomWordsArray = ['cat'];

var randomWord = randomWordsArray[0];
var currentWordObject = new Word(randomWord);

console.log(currentWordObject.currentState());

function round() {

    if (!currentWordObject.checkWord()) {
        turn();
    } else {
        console.log("new round?");
    }
}

turn();

function turn() {
    if (!currentWordObject.checkWord()) {

        inquirer.prompt([
            {
                type: 'input',
                message: 'Guess a letter:',
                name: 'guess'
            }
        ]).then(function (response) {
            displayGuess(response.guess);
        })

        var displayGuess = function (guess) {
            console.log(`
You guessed: ${guess}
    `);
            currentWordObject.checkLetter(guess);
            console.log(currentWordObject.currentState());
            turn();
        }
    }else{
        console.log("Word has been guessed");
    }
}