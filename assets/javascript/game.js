var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var wins = 0;
var words = ["analytic", "hegel", "continental", "plato", "descartes", "deconstruction", "nietzsche", "idealism", "foucault", "existentialism", "socrates", "stoicism", "skepticism", "materialism", "leibniz", "marx", "pragmatism", "technolibertarianism", "neohumanism", "spinoza", "lebensphilosophie", "kant", "ontology", "dialectic", "sartre", "heidegger", "derrida"];
var guesses = 12;
var wordLetters = [];
var emptySpaces = 0;
var emptyPlaceDisplay = [];
var alreadyGuessed = [];

function startGame () {
    selectedWord = words[Math.floor(Math.random() * words.length)];
    wordLetters = selectedWord.split("");
    emptySpaces = wordLetters.length;

    guesses = 12;
    alreadyGuessed = [];
    emptyPlaceDisplay = [];

    for (var i = 0; i < emptySpaces; i++) {
        emptyPlaceDisplay.push("_");
    }

    document.getElementById("selectedWord").innerHTML = emptyPlaceDisplay.join(" ");
    document.getElementById("guessesRemain").innerHTML = guesses;
    document.getElementById("numberWins").innerHTML = wins;



    console.log(selectedWord);
    console.log(wordLetters);
    console.log(emptySpaces);
    console.log(emptyPlaceDisplay);
}

function compareLetter(letter) {
    var letterInWord = false;
    for (var i = 0; i < emptySpaces; i++){
        if(selectedWord[i] == letter) {
            letterInWord = true;
        }
    }
    if(letterInWord) {
        for (var i = 0; i < emptySpaces; i++){
            if(selectedWord[i] == letter) {
                emptyPlaceDisplay[i] = letter;
            }
        }
    }
    else {
        alreadyGuessed.push(letter);
        guesses--
    }

    console.log(emptyPlaceDisplay);
}

function gameStats() {
    console.log("Wins: " + wins + "Guesses remaining: " + guesses);


    document.getElementById("selectedWord").innerHTML = emptyPlaceDisplay.join(" ");
    document.getElementById("guessesRemain").innerHTML = guesses;
    document.getElementById("alreadyGuessed").innerHTML = alreadyGuessed.join(" ");

    if (wordLetters.toString() == emptyPlaceDisplay.toString()) {
        wins++;
    

        document.getElementById("numberWins").innerHTML = wins;
        startGame();
    }
    else if (guesses == 0) {
        document.getElementById("guessesRemain").innerHTML = guesses;
        startGame();
        }
    }
    
startGame();

document.onkeyup = function(event){
    var letterGuesses = String.fromCharCode(event.keyCode).toLowerCase();
    compareLetter(letterGuesses);
    gameStats();
    console.log(letterGuesses);
}