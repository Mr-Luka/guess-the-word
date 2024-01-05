// The unordered list where the player's guessed letters will appear
const ulGuessedLetters = document.querySelector(".guessed-letters");

// The Guess button
const guessButton = document.querySelector(".guess");

// The text input where the player will guess a letter
const letterInput = document.querySelector(".letter");

// The empty paragraph where the word in progress will appear
const wordInProgress = document.querySelector(".word-in-progress");

// The paragraph where the remaining guesses will display
const remaining = document.querySelector(".remaining");

// The span inside the paragraph where the remaining guesses will display
const remainingSpan = document.querySelector(".remaining span");

// The empty paragraph where messages will appear when the player guesses a letter
const message = document.querySelector(".message");

// hidden button for play again
const playAgain = document.querySelector(".play-again");

const word = "magnolia";

// Function that will add Placeholder for Each letter
const placeholder = function () {
    let symbol = [];
    for (let letter in word) {
        symbol.push("●");
    }
    wordInProgress.innerText = symbol.join("");
}
placeholder(word);


// Event Listener for the button
guessButton.addEventListener("click", function(e) {
    e.preventDefault();

    const valueInput = letterInput.value;
    letterInput.value = "";
})