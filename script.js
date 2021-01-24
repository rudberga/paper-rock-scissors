const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
  return userInput;
  }
  else {
  console.log('Invalid input, please try again');
}};

function getComputerChoice() {
  var randomNumber = Math.floor(Math.random() * 3);  
  if (randomNumber === 0) {
    return 'rock';
  }
  else if (randomNumber === 1) {
    return 'paper';
  }
  else if (randomNumber === 2) {
    return 'scissors';
  }
}

function determineWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return "It's a tie!";
  }
  if (userChoice === 'bomb') {
    return "Explosion! You won!";
  }
  if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return 'The computer won!';
    } else {
      return 'You won!';
    }
  }
  if (userChoice === 'paper') {
    if (computerChoice === 'scissors') {
      return 'The computer won!';
    } else {
      return 'You won!';
    }
  }
  if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      return 'The computer won!';
    } else {
      return 'You won!';
    }
  }
}

function playGame() {
  var userChoice = getUserChoice('bomb');
  console.log(userChoice);
  var computerChoice = getComputerChoice();
  console.log(computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
}

playGame();