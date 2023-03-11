class Game {
    // numFlowers;
    // numSkulls;
    // cards;
    // isTurn;
    // stack;
    // op1Stack;
    // op2Stack;
    // op3Stack;
    // discarding;
    // playing; //Phase one is only playing
    // bidding; //Phase two is playing or bidding
    // //Phase three is only bidding
    // revealing; //Phase dour is only revealing
    // prevBid; //ythe bid of this player from the last turn
    // currBid; //the current bid from any player
    // leftToReveal; //cards to reveal to win the round (phase 4)
    // phaseInfo;
    // roundsWon;

    constructor() {
        this.stDelay = 1000;
        this.numFlowers = 3;
        this.numSkulls = 1;
        this.cards = 0;
        this.stack = [];
        this.op1Stack = [];
        this.op2Stack = [];
        this.op3Stack = [];
        this.discarding = false;
        this.isTurn = false;
        this.bidding = false;
        this.playing = true;
        this.revealing = false;
        this.prevBid = 0;
        this.currBid = 0;
        this.phaseInfo = document.querySelector("t");
        this.roundsWon = 0;
    }

    startTurn() {
        this.isTurn = true;
        if (!this.playing && !this.revealing && !this.bidding) { //handles end game when one player needs to reveal.
            //Is a precaution as that player's turn shouldn't end
            this.phaseInfo.textContent = "Revealing\n" + this.leftToReveal + "Cards left to reveal";
            this.endTurn();
        }
        if (this.stack.length > 0 && this.playing) { //for after everyone has layed a card
            this.bidding = true;
        }
        else if (!this.bidding) { //for before everyone has layed a card
            document.querySelector(".remainingCards").classList.remove("noEvents");
            document.querySelectorAll("button").forEach((elem) => elem.disabled = true);
            this.phaseInfo.textContent = "Set Up";
        }
        if (this.playing && this.bidding) {
            this.phaseInfo.textContent = "Playing Cards";
        }
        else if (this.bidding) {
            this.phaseInfo.textContent = "Bidding. Current Bid is " + this.currBid;
        }
        if (this.currBid > 0 && this.currBid == this.prevBid && !this.playing) { //if this is the only player in bidding
            this.phaseInfo.textContent = "You've won the bid!";
            document.querySelector(".remainingCards").classList.add("noEvents");
            setTimeout(() => {
                this.phaseInfo.textContent = "Revealing. " + this.leftToReveal + " cards left to reveal"
            }, 2000);
            this.bidding = false;
            this.revealing = true;
            this.leftToReveal = this.currBid;
        }
        if (this.bidding) {
            this.updateBid()
            document.querySelectorAll("button").forEach((elem) => elem.disabled = false)
        }
        if (this.playing) {
            document.querySelectorAll(".remainingCards > img").forEach((elem) => elem.clickable = true);
        }
        if (this.revealing) {
            document.querySelectorAll(".stack > img").forEach((elem) => elem.clickable = true);
        }
    }
    async endTurn() {
        //ToDo some kind of toast?
        this.isTurn = false;
        document.querySelectorAll("button").forEach((elem) => elem.disabled = true);
        document.querySelectorAll("card").forEach((elem) => elem.clickable = false);
        await this.opponentsTurns();
    }
    async playCard(card) {
        if (this.discarding) {
            this.discarding = false;
            if (card.id == "flower") {
                this.numFlowers -= 1;
            }
            else if (card.id === "skull") {
                this.numSkulls -= 1;
            }
            this.phaseInfo.textContent = "You discarded a " + card.id;
            await delay(this.stDelay);
        }
        else if (this.playing && this.isTurn && card.clickable) {
            console.log("called play card on" + card);
            this.stack.splice(0, 0, card.id);
            this.cards += 1;
            card.remove();
            const thisStackEl = document.querySelector("#thisCards > img");
            thisStackEl.src = card.src;
            this.endTurn();
        }
        else {
            console.log("out of turn click");
        }
    }
    updateBid() { //will update bid for minimum value from opponents and max value from cards played
        const range = document.querySelector('#range');
        range.min = this.currBid + 1;
        range.max = this.cards + this.op1Stack.length + this.op2Stack.length + this.op3Stack.length;
        const rangeOutput = document.querySelector('#rangeOutput');
        range.addEventListener('input', function () {
            rangeOutput.textContent = range.value;
        });
        //TODO make sure a bid is possible. i.e. if the min >= max endTurn();
    }
    makeBid() {
        if (this.bidding && this.isTurn) {
            const rangeOutput = document.querySelector('#rangeOutput');
            this.currBid = parseInt(rangeOutput.textContent);
            this.prevBid = this.currBid;
            this.playing = false;
            this.endTurn();
        }
        else {
            console.log("Out of turn bid");
        }
    }
    dropOutOfBidding() {
        this.bidding = false;
        this.endTurn();
    }
    async opponentsTurns() {
        if (this.playing) {
            this.op1Stack.push("flower")
            this.op2Stack.push("flower")
            this.op3Stack.push("flower")
        }
        if (this.bidding) {
            //update bid
        }
        await delay(this.stDelay);
        this.startTurn();
    }
    async revealCard(card) {
        if (this.revealing && this.isTurn) {
            this.phaseInfo.textContent = "Revealing. " + this.leftToReveal + " cards left to reveal";
            console.log("stack clicked with " + this.leftToReveal + "left to reveal");
            let toReveal = "temp";
            if (card.parentElement.id === "player1cards") {
                toReveal = this.op1Stack.shift();
            }
            else if (card.parentElement.id === "player2cards") {
                toReveal = this.op2Stack.shift();
            }
            else if (card.parentElement.id === "player3cards") {
                toReveal = this.op3Stack.shift();
            }
            else if (card.parentElement.id === "thisCards") {
                toReveal = this.stack.shift();
            }
            if (toReveal === "flower") {
                this.leftToReveal -= 1;
                this.phaseInfo.textContent = "Success! " + this.leftToReveal + " cards left to reveal";
                console.log("flower choosen"); //some kind of toast?
                if (this.leftToReveal == 0) {
                    await delay(this.stDelay);
                    this.roundWon();
                }
            }
            else if (toReveal === "skull") {
                document.querySelector(".remainingCards").classList.remove("noEvents");
                await this.roundLost();
            }
        }
        else {
            console.log("clicked stack out of turn/in wrong phase");
        }
    }
    async roundWon() {
        this.phaseInfo.textContent = "All the flowers are revealed! Round won!";
        await delay(this.stDelay);
        this.roundsWon += 1;
        await this.resetRound();
        this.startTurn();
    }
    async roundLost() {
        this.discarding = true;
        //discard a card
        this.phaseInfo.textContent = "A skull has been revealed! Round lost ;(";
        await delay(this.stDelay);
        await this.resetRound();
        let remainingCards = document.querySelector(".remainingCards");
        try {
            await this.discardCard();
        }
        catch (e) {
            this.phaseInfo.textContent = "No card choosen " + remainingCards.lastChild.id + " will be removed";
            if (remainingCards.lastChild.id === "flower") {
                this.numFlowers -= 1;
            }
            if (remainingCards.lastChild.id === "skull") {
                this.numSkulls -= 1;
            }
            await delay(this.stDelay);
        }
        finally {
            this.discarding = false;
            this.phaseInfo.textContent = remainingCards.lastChild.id + " will be removed";
            await delay(this.stDelay);
        }
        this.setRemainingCards();
        this.startTurn();
    }
    async discardCard() {
        document.querySelectorAll(".remainingCards > img").forEach((elem) => elem.clickable = true);
        return new Promise(async (resolve, reject) => {
        let timeLeft = 10;
        this.phaseInfo.textContent = "Choose a card to discard: " + timeLeft;
        async function timeToDiscard() {
            for (let i = 0; i < 10; ++i) {
                await delay(game.stDelay);
                timeLeft -= 1;
                game.phaseInfo.textContent = "Choose a card to discard: " + timeLeft;
            }
        }
        await timeToDiscard();
        let remainingCards = document.querySelector(".remainingCards");
        if (this.numFlowers + this.numSkulls === remainingCards.childElementCount) {
            reject(true);
        }
        else {
            resolve(true);
        }
    });
    }
    setRemainingCards() {
        let remainingCards = document.querySelector(".remainingCards");
        remainingCards.innerHTML = "";
        let elem = `<img class = "card" id = "skull" onclick="game.playCard(this)" src = "SkullCard.jpeg">`;
        for (let i = 0; i < this.numSkulls; ++i) {
            remainingCards.innerHTML = elem;
        }
        elem = `<img class = "card" id = "flower" onclick="game.playCard(this)" src = "FlowerCard.jpeg">`;
        for (let i = 0; i < this.numFlowers; ++i) {
            remainingCards.innerHTML += elem;
        }
    }
    async resetRound() {
        if (this.roundsWon === 2) {
            await this.gameWon();
        }
        else {
            this.cards = 0;
            this.stack = [];
            this.op1Stack = [];
            this.op2Stack = [];
            this.op3Stack = [];
            this.isTurn = false;
            this.bidding = false;
            this.playing = true;
            this.revealing = false;
            this.leftToReveal = 0;
            this.prevBid = 0;
            this.currBid = 0;
            this.setRemainingCards();
            let thisStack = document.querySelector("#thisCards");
            let elem = `<img class = "card" onclick = "game.revealCard(this)" src = "EmptyCard.jpg"></img>`;
            thisStack.innerHTML = elem;
        }
    }
    async gameWon() {
        //update the other players
        this.phaseInfo.textContent = "You won the game! Congrats!";
        await delay(2000);
        await this.resetGame();
        this.updateScoreCount();
        //add info to local storage
    }
    async resetGame() {
        this.numFlowers = 3;
        this.numSkulls = 1;
        this.phaseInfo.textContent = "Reseting Game";
        await delay(this.stDelay);
        this.roundsWon = 0;
        await this.resetRound();
    }
    updateScoreCount() {
        let scores = [];
        const scoresText = localStorage.getItem('scores');
        if (scoresText) {
            scores = JSON.parse(scoresText);
        }
        scores = this.updateScores(this.getPlayerName(), scores);

        localStorage.setItem('scores', JSON.stringify(scores));
    }
    updateScores(userName, scores) {
        const date = new Date().toLocaleDateString();
        const newScore = { name: userName, date: date }
        scores.push(newScore);
        return scores;
    }
    getPlayerName() {
        console.log(localStorage.getItem('userName'));
        return localStorage.getItem('userName') ?? 'Not logged In';
    }
}
function delay(milliseconds) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(true);
        }, milliseconds)
    });
}

const game = new Game();
game.startTurn();