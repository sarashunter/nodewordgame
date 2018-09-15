var Letter = require('./Letter');

var Word = function (wordToGuess) {
    this.wordToGuess = wordToGuess;
    this.wrongGuesses = 0;
    this.lettersArray = constructLettersArray(wordToGuess);
    this.currentState = function () {
        var currentString = "";
        this.lettersArray.forEach(function (element) {

            currentString = currentString.concat(' ', element.returnLetter());

        })

        return currentString;
    };
    this.checkLetter = function (guess) {
        var wasAnInstance = false;

        this.lettersArray.forEach(function (element) {
            var letterExists = element.checkLetter(guess);
            if (letterExists) {
                wasAnInstance = true;
            }
        })
        if (!wasAnInstance) {
            this.wrongGuesses += 1;
            console.log("That letter isn't in the word.  Wrong guesses: " + this.wrongGuesses);
            if (this.wrongGuesses >= 5) {
                console.log("You ran out of guesses.");
                // playAgain();
            }
        }
    };
    this.checkWord = function (guess) {

        var wordGuessed = true;
        if (this.wrongGuesses >= 5) {
            wordGuessed = true;
        } else {
            this.lettersArray.forEach(function (element) {
                if (!element.isGuessed) {
                    wordGuessed = false;
                }
            })
        }
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