function login() {
    const inputEl = document.querySelector("#name");
    localStorage.setItem("userName", nameFromInput.value);
    window.location.href = "JoinGame.html";
}

function gamesWon() { //will set the gamesWon element with the correct text
    let scores = getScores()
    let userName = localStorage.getItem("userName");
    htmlEl = document.querySelector("#gamesWon");
    if (scores.length !== 0) {
        let count = 0;
        scores.forEach((elem) => {
            if (userName in elem) {
                count += 1;
            }
        });
        htmlEl.textContent = "Games Won: " + count
    }
    else {
        htmlEl.textContent = "Games Won: 0"
    }
}
function getScores() {
    let scores = [];
    const scoresText = localStorage.getItem('scores');
    if (scoresText) {
        scores = JSON.parse(scoresText);
    }
    return scores;
}