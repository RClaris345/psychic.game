function generateAlphabet() {
  var arr = [];
  for (var i = 97; i <= 122; i++) {
    arr.push(String.fromCharCode(i));
  }
  return arr;
}

var userScore = 0;
var computerScore = 0;
var losses = 0;
var guessesLeft = 12;
var alphabet = generateAlphabet();
var $alreadyGuessed = document.getElementById("already-guessed");
var $userScore = document.getElementById("user-score");
var $computerScore = document.getElementById("computer-score");
var $guessesLeft = document.getElementById("guesses-left");
console.log($alreadyGuessed);

var computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
var $computerGuess = document.getElementById("computer-guess");
console.log("Computer Guess:", computerGuess);

var alreadyGuessedArr = [];
document.getElementById("guesses-left").innerText = guessesLeft;

// document.getElementById("user-score").innerText = userScore;
// document.getElementById("computer-score").innerText = computerScore;
// // document.getElementById("computer-guess").innerText = computerGuess;

document.onkeyup = function(event) {
  guessesLeft--;
  var userGuess = event.key.toLowerCase();
  alreadyGuessedArr.push(userGuess);
  // $computerScore.textcontent = computerScore;

  if(userGuess === computerGuess){
    userScore++;
    guessesLeft = 12;
    alreadyGuessedArr = [];
    computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
    document.getElementById("computer-guess").innerText = computerGuess;
    document.getElementById("user-score").innerText = userScore;
    document.getElementById("computer-score").innerText = computerScore;
  } else if (guessesLeft === 0) {
    computerScore++;
    guessesLeft = 12;
    alreadyGuessedArr = [];
    computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
    document.getElementById("computer-guess").innerText = computerGuess;
    $computerScore.textcontent = computerScore;
    document.getElementById("computer-score").innerText = computerScore;
  }

  $alreadyGuessed.textContent = alreadyGuessedArr.join(",   ");
  document.getElementById("guesses-left").innerText = guessesLeft;

  
};




// function userGuess() {
//   // If there are still more questions, render the next one.
//   if (userGuess <= alreadyGuessedArr[8]) {
//     document.querySelector("#").innerHTML = questions[questionIndex].q;
//   }
//   // If there aren't, render the end game screen.
//   else {
//     document.querySelector("#question").innerHTML = "Game Over!";
//     document.querySelector("#score").innerHTML =
//       "Final Score: " + score + " out of " + questions.length;
//   }
// }
