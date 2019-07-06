//==============================================================================================================================
// Dependencies
//==============================================================================================================================

var Letter = require("./Letter.js");


//==============================================================================================================================
// Global Variables
//==============================================================================================================================    

var lettersArray = [];


//==============================================================================================================================
// Constructor Function
//==============================================================================================================================  

function Word(word) {
    this.word = word;
};

Word.prototype.makeLettersArray = function(wordToGuessByLetter, wLength) {
    for (var i = 0; i < wLength; i++) {
        lettersArray[i] = new Letter(wordToGuessByLetter[i]);
    }
    this.word = lettersArray;
    return this.word;
};

Word.prototype.checkGuess = function(userGuess) {
    var checkGuessAgainstLetters = "";
    var checkGuess = "";
    for(eachIndex in lettersArray) {
        checkGuessAgainstLetters = lettersArray[eachIndex].checkGuess(userGuess);
        if (checkGuessAgainstLetters === "Correct") {
            checkGuess = "Correct";
        };
    };
    return checkGuess;
};

Word.prototype.wordToDisplay = function() {
    var eachIndex;
    var displayString = "";
    var wordToDisplay = "";

    for(eachIndex in lettersArray) {
        if(lettersArray[eachIndex].letter === " ") {
            displayString = " ";
            lettersArray[eachIndex].guessed = true;
        }
        else{
        displayString = lettersArray[eachIndex].wordToDisplay();
        }
        wordToDisplay += displayString;
    }  
        return wordToDisplay;
};


//==============================================================================================================================
// Export
//==============================================================================================================================

module.exports = Word;
