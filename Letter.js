var Letter = function(character){
    this.character = character;
    this.isGuessed = false;
    this.returnLetter = function(){
        if(this.isGuessed){
            return this.character;
        }else{
            return '_';
        }
    }
    this.checkLetter = function(guessedLetter){
        var wasCorrect=false;
        if(guessedLetter === this.character){
            this.isGuessed = true;
            wasCorrect=true;
        }
        return wasCorrect;
    }
}

module.exports = Letter;