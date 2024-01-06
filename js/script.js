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

let word = "magnolia";
let guessedLetters = [];

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
    message.innerText = "";

    const guess = letterInput.value;
    const goodGuess = checkInput(guess)

    if (goodGuess) {
        makeGuess(guess);
    }

    letterInput.value = "";
})

// Function that will check the players input
const checkInput = function (input) {
    const acceptedLetters = /[a-zA-Z]/;

    if (input.length === 0) {
        message.innerText = "Please enter one letter";
    } else if (input.length > 1) {
        message.innerText = "Please enter a single letter";
    } else if (!input.match(acceptedLetters)) {
        message.innerText = "Please enter one letter from A-Z";
    } else {
        return input;
    }
}


// Function that will capture the input 
const makeGuess = function (letter) {
    letter = letter.toUpperCase();
    if (guessedLetters.includes(letter)) {
        message.innerText = `You have already guessed this ${letter}`
    } else {
        guessedLetters.push(letter);
        console.log(guessedLetters);
        showGuessedLetters();
        updateWordInProgress(guessedLetters);
    }
}



// Function that will show the guessed Letters
const showGuessedLetters = function () {
    ulGuessedLetters.innerHTML = "";

    for (let letter of guessedLetters) {
        let li = document.createElement("li");
        li.innerText = letter;
        ulGuessedLetters.append(letter);
    }
}

// function that will update the Word in Progress
// this function will replace symbols with the correct letters guessed
const updateWordInProgress = function(guessedLetters) {
    const wordUpper = word.toUpperCase();
    const wordArray = wordUpper.split("");

    const showLetter = [];
    for (let letter of wordArray) {
        if (guessedLetters.includes(letter)) {
            showLetter.push(letter.toUpperCase());
        } else {
            showLetter.push("●")
        }
    }
    wordInProgress.innerText = showLetter.join("");
    checkWin();
}

// Function that will check if the player has won
const checkWin = function() {
    if (wordInProgress.innerText === word.toUpperCase()) {
        message.classList.add("win");
        message.innerHTML = `<p class="highlight">You guessed the correct word! Congrats!</p>`
    }
}