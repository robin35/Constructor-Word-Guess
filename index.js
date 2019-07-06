//==============================================================================================================================
// Requirements
//==============================================================================================================================

var Word = require("./Word.js");
var inquirer = require("inquirer");
//var maxlength = require('inquirer-maxlength-input-prompt')
var colors = require('colors');


//==============================================================================================================================
// Global Variables
//==============================================================================================================================

var attemptsLeft = 20;


var letterArray;
var wordToGuess;
var wLength = 0;
var wordToGuessByLetter = [];

var userGuess = "";
var checkGuess;


//console.log("attemptsLeft: " + attemptsLeft);


//==============================================================================================================================
// Select Word to Play to Start Game
//==============================================================================================================================

function selectWord() {
    
    // Game words array
    var gameWords =  [
        "GEORGE WASHINGTON", "JOHN ADAMS", "THOMAS JEFFERSON", "JAMES MADISON", "JAMES MONROE", 
        "JOHN QUNICY ADAMS", "ANDREW JACKSON", "MARTIN VAN BUREN", "WILLIAM HENRY HARRISON", "JOHN TYLER", 
        "JAMES K POLK", "ZACHARY TAYLOR", "MILLARD FILLMORE", "FRANKLIN PIERCE", "JAMES BUCHANAN", 
        "ABRAHAM LINCOLN", "ANDREW JOHNSON", "ULYSSES S GRANT", "RUTHERFORD B HAYES", "JAMES GARFIELD", 
        "CHESTER A ARTHUR", "GROVER CLEVELAND", "BENJAMIN HARRISON", "WILLIAM MCKINLEY", "THEODORE ROOSEVELT", 
        "WILLIAM HOWARD TAFT", "WOODROW WILSON", "WARREN G HARDING", "CALVIN COOLIDGE", "HERBERT HOOVER", 
        "FRANKLIN D ROOSEVELT", "HARRY S TRUMAN", "DWIGHT D EISENHOWER", "JOHN F KENNEDY", "LYNDON B JOHNSON", 
        "RICHARD M NIXON", "GERALD R FORD", "JAMES CARTER", "RONALD REAGAN", "GEORGE H W BUSH", 
        "WILLIAM J CLINTON", "GEORGE W BUSH", "BARACK OBAMA", "DONALD J TRUMP"
    ];

    // Determine the size of the gameWords array
    var arraySize = gameWords.length;
    
    // Select a random number from the arraySize
    var randomIndex = Math.floor((Math.random() * arraySize));
    
    // Select the word from the gameWords array that corresponds to the randomIndex.  This is the word to guess.
    wordToGuess = gameWords[randomIndex];
    wLength = wordToGuess.length;

    wordToGuessByLetter = wordToGuess.split("");
    
    console.log("wordToGuess: " + wordToGuess);
}


selectWord();
var newWord = new Word;
letterArray = newWord.makeLettersArray(wordToGuessByLetter, wLength);
checkGuess = newWord.checkGuess(userGuess);
wordToDisplay = newWord.wordToDisplay();



//==============================================================================================================================
// GAME LOGIC
//==============================================================================================================================

    playGame()


    




    function playGame() {

        console.log("\nI'm thinking of a President...can you guess which one?".green);
        console.log("Who am I?: ".green + wordToDisplay);

      inquirer
        .prompt([
            {
            type: "input",
            message: "\n You have "+ attemptsLeft + " guess(es). Guess a letter!",
            name: "guess"
            },
        ])
        .then(function(inquirerResponse) {

            var userGuessRaw = inquirerResponse.guess;
            userGuess = userGuessRaw.toUpperCase();          
            checkGuess = newWord.checkGuess(userGuess);
            wordToDisplay = newWord.wordToDisplay();
           
           if (checkGuess === "Correct") {
               console.log("\nYour guess is correct!".green);
           }
           else {
               console.log("\nTry Again\n".red);
           }

           attemptsLeft--;

            if(wordToGuess === wordToDisplay){
                console.log("\nYou won! The answer is: \n");
                console.log(wordToGuess.green);
            }
            else if(attemptsLeft > 0) {
                playGame();
           }
           else{
                console.log("\nYou are out of guesses. The answer is: \n");
                console.log(wordToGuess.green);
           }

        });

    }


    attemptsLeft = 12;
    userGuess = "";

//}


//==============================================================================================================================
// MAIN LOGIC
//==============================================================================================================================


//function startGame() {
//    selectWord();
//    Word.newWord(wordToGuessByLetter);
//    Word.checkGuess(userGuess);
//    playGame();
//}


//==============================================================================================================================
// START GAME
//==============================================================================================================================

//startGame();