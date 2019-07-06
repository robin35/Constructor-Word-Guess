//==============================================================================================================================
// Constructor Function
//==============================================================================================================================

function Letter(letter, guessed) {
    this.letter = letter;
    this.guessed = guessed;   
};

Letter.prototype.checkGuess = function(userGuess) {
    if (this.letter === userGuess) {
        this.guessed = true;
        return "Correct";
    };
};

Letter.prototype.wordToDisplay = function() {
    if(this.guessed === true){
        return this.letter;
    }
    else {
        return "_ ";
    }
};


//==============================================================================================================================
// Export
//==============================================================================================================================

module.exports = Letter;

