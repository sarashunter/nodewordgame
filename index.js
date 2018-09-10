var inquirer = require('inquirer');
var Word = require('./Word');

var randomWordsArray = ['cat'];

var randomWord = randomWordsArray[0];

var currentWordObject = new Word(randomWord);

console.log(currentWordObject.currentState());

function turn() {
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
    }
}