const btn = document.querySelector("button");
const firstText = [];
const infoMessage = `THE DEAL
The deck is divided evenly, with each player receiving 26 cards, dealt one at a time, face down. Anyone may deal first. Each player places their stack of cards face down, in front of them.
THE PLAY
Each player turns up a card at the same time and the player with the higher card takes both cards and puts them, face down, on the bottom of his stack.
If the cards are the same rank, it is War. Each player turns up one card face down and one card face up. The player with the higher cards takes both piles (six cards). If the turned-up cards are again the same rank, each player places another card face down and turns another card face up. The player with the higher card takes all 10 cards, and so on.
`;

btn.addEventListener("click", function () {
  const player1 = document.getElementById("firsttext");

  if (player1.value != "") {
    firstText.push(player1.value);
    alert(infoMessage);
    return firstText;
  } else {
    alert(infoMessage);
  }
});
