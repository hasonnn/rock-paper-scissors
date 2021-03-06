const getUserChoice = (userInput) => {
    userInput = prompt("Choose rock, paper or scissors");
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
      return userInput;
    } else {
      console.log('Please only choose rock, paper or scissors!');
      getUserChoice(userInput)
    };
  }; 
  
  const getComputerChoice = () => {
    randomNumber = Math.floor(Math.random() * 3) 
      switch (randomNumber) {
        case 0:
          return 'rock';
          break;
        case 1:
          return 'paper';
          break;
        case 2:
          return 'scissors';
          break;
      };
    };
  
  const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
      return 'Draw'
    }
    if (userChoice === 'rock'){
      if (computerChoice === 'paper'){
        return 'Computer won!'
      } else {
        return 'User won!'
      }
    };
    if (userChoice === 'paper'){
      if (computerChoice === 'scissors') {
        return 'Computer won!'
      } else {
        return 'User won!'
      }
    };
    if (userChoice === 'scissors'){
      if (computerChoice === 'rock') {
        return 'Computer won!'
      } else {
        return 'User won!'
      }
    };
  };
  
  const playGame = () => {
    let userChoice = getUserChoice();
    let computerChoice = getComputerChoice();
    console.log(`You chose ${userChoice} and the computer chose ${computerChoice}`);
    console.log(determineWinner(userChoice, computerChoice));
  };
  
  playGame()
  