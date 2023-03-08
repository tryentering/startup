class Card {
    constructor(type) {
        this.type = type;
        this.clickable = false
        this.visable = false
    }
}

class Game {
    cards;
    isTurn;
    stack;
    bidding;
    playing;
    revealing;
    currBid;
    opponentsCards;

    constructor() {
        this.cards = 0;
        this.stack = [];
        this.isTurn = false;
        this.bidding = false;
        this.playing = true;
        this.revealing = false;
        this.currBid = 0;
        this.opponentsCards = 4; //will hold the number of cards opponents have played
    }

    startTurn() {
        isTurn = true;
        if (this.stack.length > 0 && this.playing) {
            bidding = true;
        }
        if (bidding) {
            this.updateBid()
        }
    }
    endTurn() {
        isTurn = false;
    }
    playCard(card) {
        if (this.playing && this.isTurn) {
            console.print("called play card on" + card);
            this.stack.push(card);
            this.cards += 1
            this.endTurn();
        }
        else {
            console.log("out of turn click");
        }
    }
    updateBid() { //will update bid for minimum value from opponents and max value from cards played
        const range = document.querySelector('#range');
        range.min = this.currBid;
        range.max = this.cards + this.opponentsCards;
        const rangeOutput = document.querySelector('#rangeOutput');
        range.addEventListener('input', function() {
          rangeOutput.textContent = range.value;
        });
    }
}

const game = new Game();
game.updateBid()