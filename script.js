let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

//generate random number between 0-9
function generateTarget() {
    return Math.round(Math.random() * 9);
  }
  // function takes 3 parameters and compares them, decides the closest guess as the winner
  function compareGuesses(numUser, numComp, numSecret) {
    let diffUser = Math.abs(numSecret - numUser);
    let diffComp = Math.abs(numSecret - numComp);
    return diffUser < diffComp || diffUser === diffComp ? true : false;
  }
  // function that updates the scores
  function updateScore(winner) {
    winner === "human" ? humanScore += 1 : computerScore += 1;
  }
  // function that updates the rounds
  function advanceRound() {
    currentRoundNumber++;
  }