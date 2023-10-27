document.addEventListener('DOMContentLoaded', function () {
    const choices = document.querySelectorAll('.choice');
    const message = document.getElementById('message');
    const computerSelection = document.getElementById('computer-selection');
  
    choices.forEach(choice => {
      choice.addEventListener('click', function () {
        const playerSelection = this.id;
        const computerChoices = ['rock', 'paper', 'scissors'];
        const computerSelection = computerChoices[Math.floor(Math.random() * computerChoices.length)];
        const result = determineWinner(playerSelection, computerSelection);
  
        displayResult(playerSelection, computerSelection, result);
      });
    });
  
    function determineWinner(player, computer) {
      if (player === computer) {
        return 'It\'s a Tie!';
      }
  
      if (
        (player === 'rock' && computer === 'scissors') ||
        (player === 'paper' && computer === 'rock') ||
        (player === 'scissors' && computer === 'paper')
      ) {
        return 'You Win!';
      }
  
      return 'Computer Wins!';
    }
  
    function displayResult(player, computer, result) {
      message.textContent = `You chose ${player}, Computer chose ${computer}. ${result}`;
      document.getElementById('computer-selection').textContent = computer;
    }
  });
  