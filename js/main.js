
var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];

var cardOne = cards[0];
cardsInPlay.push(cards[0]);
console.log("User flipped " + cardsInPlay);

var cardTwo = cards[2];
cardsInPlay.push(cards[2]);
console.log("User flipped " + cardsInPlay[1]); 

if (cardsInPlay.length === 2) {
	//check to see if 2 cards equal
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
	} else {
		alert("Sorry, try again.");	
	}
}