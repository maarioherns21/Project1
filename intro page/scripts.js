const infoMessage = `THE GOAL
To be the first player to win all 52 cards

THE DEAL
The deck is divided evenly, with each player receiving 26 cards, dealt one at a time, face down. Each player places their stack of cards face down, in front of them.

THE PLAY
Each player turns up a card at the same time and the player with the higher card takes both cards and puts them, face down, on his stack. If the cards are the same rank, it is War. 
If the turned-up cards are again the same rank, each player places another card face down and turns another card face up. The player with the higher card takes all, and so on.

HOW TO KEEP SCORE
The game ends when one player has won all the cards.
`;

document.getElementById("myBtn").addEventListener("click", myFunction);

function myFunction() {
  alert (infoMessage);
}

function playSound () {
  document.getElementById('play').play();
};

