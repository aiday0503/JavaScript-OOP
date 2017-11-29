< !doctype html >
    <
    html lang = "en" >
    <
    head >
    <
    title > Title < /title> <
script >

    //es5
    var Deck = function Deck() {
        this.deck = [];
        this.reset();
        this.shuffle();
    };

Deck.prototype.reset = function() {
    this.deck = [];
    var pips = ["Ace", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
    var suits = ["Spades", "Hearts", "Diams", "Clubs"];

    for (var suit in suits) {
        for (var pip in pips) {
            this.deck.push(pips[pip] + " of " + suits[suit])
        }
    }
    return this;
};


Deck.prototype.shuffle = function() {
    var m = this.deck.length,
        t, i;
    while (m) {
        i = Math.floor(Math.random() * m--);
        t = this.deck[m];
        this.deck[m] = this.deck[i];
        this.deck[i] = t;
    }
    return this;
}

Deck.prototype.deal = function() {
    return this.deck.pop()
}

var Player = function Player(name) {
    this.name = name;
    this.hand = [];
}

Player.prototype.draw = function(deck) {
    this.hand.push(deck.deal());
    return this;
}

Player.prototype.discard = function(i) {
    return this.hand.pop();
}

var deck1 = new Deck();
deck1.shuffle().shuffle();
console.log(deck1.deck)
console.log(deck1.deal)

var deck2 = new Deck()

var player1 = new Player('Aiday')
player1.draw(deck1).draw(deck2)
console.log(player1.hand)

//ES6

// class Deck{
//     constructor(){
//         this.deck = [];
//         this.reset();
//     }
// reset(){
//     this.deck = [];

//     let pips = ["Ace", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
//     let suits = ["Spades", "Hearts", "Diams", "Clubs"];

//     for(let suit in suits) {
//         for(let pip in pips) {
//             this.deck.push(`${suits[suit]} of ${pips[pip]}`);
//         }
//     }
//   }

//   shuffle(){

//   }
//   deal(){

//   }
// }







<
/script> < /
head > <
    body >
    <
    /body> < /
    html >