document.getElementById('playBtn').addEventListener('click', function() {
  const player1 = document.getElementById('player1').value || 'Player 1';
  const player2 = document.getElementById('player2').value || 'Player 2';
  const choice1 = document.getElementById('choice1').value;
  const choice2 = document.getElementById('choice2').value;
  const resultDiv = document.getElementById('result');

  let result = '';
  if (choice1 === choice2) {
    result = `${player1} and ${player2} tied!`;
  } else if (
    (choice1 === 'rock' && choice2 === 'scissors') ||
    (choice1 === 'paper' && choice2 === 'rock') ||
    (choice1 === 'scissors' && choice2 === 'paper')
  ) {
    result = `${getWinMessage(choice1, choice2)} ${player1} wins!`;
  } else if (
    (choice2 === 'rock' && choice1 === 'scissors') ||
    (choice2 === 'paper' && choice1 === 'rock') ||
    (choice2 === 'scissors' && choice1 === 'paper')
  ) {
    result = `${getWinMessage(choice2, choice1)} ${player2} wins!`;
  } else {
    result = 'Please select Rock, Paper, or Scissors!';
  }
  resultDiv.textContent = result;
  document.getElementById('playAgainBtn').style.display = 'inline-block';
});

document.getElementById('playAgainBtn').addEventListener('click', function() {
  document.getElementById('result').textContent = '';
  document.getElementById('choice1').selectedIndex = 0;
  document.getElementById('choice2').selectedIndex = 0;
  this.style.display = 'none';
});

function getWinMessage(winner, loser) {
  if (winner === 'rock' && loser === 'scissors') {
    return 'Rock smashes Scissors!';
  } else if (winner === 'paper' && loser === 'rock') {
    return 'Paper covers Rock!';
  } else if (winner === 'scissors' && loser === 'paper') {
    return 'Scissors cuts Paper!';
  }
  return '';
}
