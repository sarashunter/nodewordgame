var Letter = require('./Letter');

var Word = function(wordToGuess){
    this.wordToGuess = wordToGuess;
    this.lettersArray = constructLettersArray(wordToGuess);

    wordToGuess.split("").forEach
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
