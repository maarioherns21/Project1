import Deck from "./deck.js"; 
//key values of cards 
const CardValueMap = {
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9,
  10: 10,
  J: 11,
  Q: 12,
  K: 13,
  A: 14,
};

/// querys html --> JS to make them funtional in JS
const computerCardSlot = document.querySelector(".computercardslot");
const playerCardSlot = document.querySelector(".playercardslot");
const computerDeckEl = document.querySelector(".computerdeck");
const playerDeckEl = document.querySelector(".playerdeck");
const text = document.querySelector(".text");


let playerDeck;
let computerDeck;
let inRound;
let stop;
// eventlistener for game to start/flip
document.addEventListener("click", () => {
  if (stop) {
    startGame();
    return;
  }

  if (inRound) {
    cleanBeforeRound();
  } else {
    flipCards();
  }
});
// the strt fuction /new deck /susffle 
startGame();
function startGame() {
  const deck = new Deck();
  deck.shuffle();

  const deckMidPoint = Math.ceil(deck.numberOfCards / 2);
  playerDeck = new Deck(deck.cards.slice(0, deckMidPoint));
  computerDeck = new Deck(deck.cards.slice(deckMidPoint, deck.numberOfCards));
  inRound = false;
  stop = false;

  cleanBeforeRound();
}
function cleanBeforeRound() {
  inRound = false;
  computerCardSlot.innerHTML = "";
  playerCardSlot.innerHTML = "";
  text.innerText = "";

  updateDeckCount();
}
/// outcomes fuction 
function flipCards() {
  inRound = true;

  const playerCard = playerDeck.pop();
  const computerCard = computerDeck.pop();

  playerCardSlot.appendChild(playerCard.getHTML());
  computerCardSlot.appendChild(computerCard.getHTML());

  updateDeckCount();

  if (isRoundWinner(playerCard, computerCard)) {
    text.innerText = "win";
    playerDeck.push(playerCard);
    playerDeck.push(computerCard);
  } else if (isRoundWinner(computerCard, playerCard)) {
    text.innerText = "lose";
    computerDeck.push(playerCard);
    computerDeck.push(computerCard);
  } else {
    text.innerText = "Draw";
    playerDeck.push(playerCard);
    computerDeck.push(computerCard);
  }

  if (isGameOver(playerDeck)) {
    text.innerText = "You LOSE!!";
    stop = true;
  } else if (isGameOver(computerDeck)) {
    text.innerText = " You win";
    stop = true;
  }
}

function updateDeckCount() {
  computerDeckEl.innerText = computerDeck.numberOfCards;
  playerDeckEl.innerText = playerDeck.numberOfCards;
}

function isRoundWinner(cardOne, cardTwo) {
  return CardValueMap[cardOne.value] > CardValueMap[cardTwo.value];
}

function isGameOver(deck) {
  return deck.numberOfCards === 0;
}


