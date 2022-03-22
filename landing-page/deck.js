///logic for war
const cardSuits = ["🏈", "🎱", "🏀", "⚽️"]; // variable suits for cards
// variables for value of cards // this create 52 cards
const cardValues = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K",
];

//this class has the logic for the suits// suits amd value of each card
class Card {
  constructor(suit, value) {
    this.suit = suit;
    this.value = value;
  }

  get cardColor() {
    return this.suit === "🎱" || this.suit === "⚽️" ? "black" : "red";
  }

  getHTML() {
    const cardDiv = document.createElement("div");
    cardDiv.innerText = this.suit;
    cardDiv.classList.add("card", this.cardColor);
    cardDiv.dataset.value = `${this.value} ${this.suit}`;
    return cardDiv;
  }
}
// this function loops through all the values and creates an erray and a freshdeck of cards
//for each suits and value combination.
function freshDeck() {
  return cardSuits.flatMap((suits) => {
    //condence the erray (all values flat within creating one erray)
    return cardValues.map((value) => {
      //loop through the values mapping them for each one.
      return new Card(suits, value);
    });
  });
}

// this class incapsulates a deck of cards(pile of cards)
export default class Deck {
  constructor(cards = freshDeck()) {
    // pass set limit of cards
    this.cards = cards;
  }
  get numberOfCards() {
    return this.cards.length; // this getter will give us the final index of our card
  }
  pop() {
    return this.cards.shift();
  }

  push(card) {
    this.cards.push(card);
  }

  shuffle() {
    // this  shuffle function loops through all the cards and swaps with another card (perfect shuffle)
    // this for loop shuffle the cards around
    for (let i = this.numberOfCards - 1; i > 0; i--) {
      //checks why i is greater than 0  all the way from the back of our list of the cards to the front.
      const newIdx = Math.floor(Math.random() * (i + 1)); // this math random index takes earlier in the deck of cards that we currently are.
      const oldV = this.cards[newIdx];
      this.cards[newIdx] = this.cards[i];
      this.cards[i] = oldV;
    }
  }
}
