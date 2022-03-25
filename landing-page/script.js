import Deck from "./deck.js";
// this is an Object with the keys and values of cards
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

/// querys selectors  html --> JS to make them funtional in JS
const computerCardSlot = document.querySelector(".computercardslot");
const playerCardSlot = document.querySelector(".playercardslot");
const computerDeckEl = document.querySelector(".computerdeck");
const playerDeckEl = document.querySelector(".playerdeck");
const text = document.querySelector(".text");

/// variables created
let playerDeck;
let computerDeck;
let inRound;
let stop;
// this funtion prompts the username to be added to the game
function userName() {
  let username = prompt("Enter Your Name to Play!");
  if (username != "") {
    document.getElementById("text1").innerHTML = username;
  } else {
    alert("Username cannot be blank!");
  }
}
userName();

// eventlistener for game to start/flip/clenas the round
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
// the strt fuction /new deck /susffle / division between  the stack
startGame();
function startGame() {
  const deck = new Deck();
  deck.shuffle();

  const deckMidPoint = Math.ceil(deck.numberOfCards / 2);
  //creates the  52 division equality  between  the player deck and computer deck
  playerDeck = new Deck(deck.cards.slice(0, deckMidPoint));
  // devided the cars fro the player it slice in hald 26 cards
  computerDeck = new Deck(deck.cards.slice(deckMidPoint, deck.numberOfCards));
  // alice 26 cards within the deck
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
  /// this  pops the playerCArd and computer card into the system
  const playerCard = playerDeck.pop();
  const computerCard = computerDeck.pop();

  playerCardSlot.appendChild(playerCard.getHTML());
  computerCardSlot.appendChild(computerCard.getHTML());

  updateDeckCount();
  ////this roundwinner function  creates  the statements for winner and loser
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
