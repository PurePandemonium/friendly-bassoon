function Card(name, types, cost) {
	this.name = name;
	this.types = types;
	this.cost = cost;
}
let Types = {
	currency: "Currency",
	worker: "Worker"
}

const INITIAL_DWARF_CARDS = [
new Card("Urist", ["worker"], 3 ),
new Card("Etur", ["worker"], 3 ),
new Card("Sigun", ["worker"], 3 ),
new Card("Dakost", ["worker"], 3 ),
new Card("Litast", ["worker"], 3 ),
new Card("Kogan", ["worker"], 3 ),
new Card("Ingish", ["worker"], 3 )
]

function COIN_CARD() {return new Card("Coin", [Types.currency], 0)};

let Deck = {
  cards: [new COIN_CARD(), new Card("Coin", [Types.currency], 0), {name: "Coin", types: [Types.currency], cost: 0}, "coin"],
  shuffle: function(){
	  // shuffle algorithm reference: https://stackoverflow.com/a/12646864
	  
	for (let i = cards.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[cards[i], cards[j]] = [cards[j], cards[i]];
    }
	  return 0;},
  whynot: function(){console.log("oh hi");},
  reset: function(){
	  // move all cards from hand and discard to deck, then shuffle the deck. 
		cards = cards.concat(hand.cards);
		hand.empty();
		cards = cards.concat(discard.cards);
		discard.empty();
	}
  

};

let hand = {
  cards: [],
  empty: function(){cards = [];}
};
let discard = {
  cards: [],
  empty: function(){cards = [];}
};

function DisplayHand() {
	for (card of Deck.cards) {
		console.log(card.name);
		var inputElement = document.createElement('input');
		inputElement.type = "button"
		inputElement.addEventListener('click', function(){
			console.log(card.name);
		});
		document.body.appendChild(inputElement);
	}
}