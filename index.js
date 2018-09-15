var inquirer = require('inquirer');
var Word = require('./Word');

var randomWordsArray = ['cat', 'dog', 'apple', 'banana'];

function game() {
    level();
}
function level() {
    var randomIndex = Math.floor(Math.random() * randomWordsArray.length);
    randomWord = randomWordsArray[randomIndex];
    currentWordObject = new Word(randomWord);
    console.log("New word chosen");
    console.log(currentWordObject.currentState());
    turn();
}

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
    } else {
        playAgain();
    }
}

function playAgain(){
    inquirer.prompt([
        {
            type: 'list',
            message: 'Play again?',
            name: 'again',
            choices: ['yes', 'no']
        }
    ]).then(function (response) {
        if (response.again === 'yes') {
            level();
        }
    })
}

game();