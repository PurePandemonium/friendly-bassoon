let Deck = {
  cards: ["coin", "coin", "coin", "coin", "coin", "coin", "coin", "coin", "coin", "coin", "coin"],
  shuffle: function(){
	  // reference: https://stackoverflow.com/a/12646864
	  
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


