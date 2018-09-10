var Letter = require('./Letter');

var Word = function(wordToGuess){
    this.wordToGuess = wordToGuess;
    this.lettersArray = constructLettersArray(wordToGuess);
    this.currentState = function(){
        var currentString='';
        this.lettersArray.forEach(function(element){
            currentString + element.returnLetter();
        })
        return currentString;
    };
    this.checkLetter(guess){
        this.lettersArray.forEach(function(element){
            element.checkLetter();
        })
    }
}

var constructLettersArray = function(wordToGuess){
    var wordArray = wordToGuess.split("");
    var lettersArray = [];

    wordArray.forEach(function(element){
        var letter = new Letter(element);
        lettersArray.push(letter);
    })
    return lettersArray;
}
