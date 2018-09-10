var Letter = require('./Letter');

var Word = function (wordToGuess) {
    this.wordToGuess = wordToGuess;
    this.lettersArray = constructLettersArray(wordToGuess);
    this.currentState = function () {
        var currentString = "";
        this.lettersArray.forEach(function (element) {

            currentString = currentString.concat(' ', element.returnLetter());

        })

        return currentString;
    };
    this.checkLetter = function (guess) {

        this.lettersArray.forEach(function (element) {
            element.checkLetter(guess);
        })
    };
    this.checkWord = function (guess){

        var wordGuessed = true;
        this.lettersArray.forEach(function(element){
            if(!element.isGuessed){
                wordGuessed = false;
            }
        })
        return wordGuessed;
    }
}

var constructLettersArray = function (wordToGuess) {
    var wordArray = wordToGuess.split("");
    var lettersArray = [];

    wordArray.forEach(function (element) {
        var letter = new Letter(element);
        lettersArray.push(letter);
    })
    return lettersArray;
}

module.exports = Word;