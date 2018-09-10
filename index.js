var inquirer = require('inquirer');
var Word = require('./Word');

var randomWordsArray = ['cat'];

var randomWord = randomWordsArray[0];

var currentWordObject = new Word(randomWord);

console.log(currentWordObject.currentState());

inquirer.prompt([
    {
        type: 'input',
        message: 'Whats your letter guess?',
        name: 'guess'
    }
]).then(function(response){
    console.log("You guessed: " + response.guess);
    currentWordObject.checkLetter(response.guess);
    console.log(currentWordObject.currentState());
})