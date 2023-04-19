async function gamesWon() { //will set the gamesWon element with the correct text
    let scores = await getScores();
    htmlEl = document.querySelector("#gamesWon");
    userName = localStorage.getItem("userName");
    if (scores.length !== 0) {
        let count = 0;
        scores.forEach((elem) => {
            if (Object.values(elem).indexOf(userName) > -1) {
                count += 1;
            }
        });
        htmlEl.textContent = "Games Won: " + count
    }
    else {
        htmlEl.textContent = "Games Won: 0"
    }
}
async function getScores() {
    let scores = [];
    try {
    const scoresText = await fetch('/api/scores');
    scores = await scoresText.json();
    localStorage.setItem('scores', JSON.stringify(scores));
    } catch {
        const scoresText = localStorage.getItem('scores');
        if (scoresText) {
          scores = JSON.parse(scoresText);
        }
      }
    return scores;
}
function generatePlayerList() {
    userName = localStorage.getItem("userName");
    let playerListElem = document.querySelector(".playerlist");
    playerListElem.innerHTML = '<li>' + userName +  '</li>'
}
function createRoom() {
    let r = (Math.random() + 1).toString(36).substring(7);
    localStorage.setItem("roomCode", r);
}
function joinRoom() {
    const textInfo = document.querySelector("#room-code");
    // let currRooms = localStorage.getItem("roomCode");
    localStorage.setItem("roomCode", textInfo.value);
}
function loadLobby() {
    generatePlayerList();
    setRoomCode();
    configureWebSocket();
}
function setRoomCode() {
    roomCode = localStorage.getItem("roomCode");
    roomCodeElem = document.querySelector(".room-code");
    roomCodeElem.textContent = "Room Code: " + roomCode;
}

function configureWebSocket() {
    const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';
    this.socket = new WebSocket(`${protocol}://${window.location.host}/ws`);
    this.socket.onopen = (event) => {
      this.displayMsg('system', 'game', 'connected');
    };
    this.socket.onclose = (event) => {
      this.displayMsg('system', 'game', 'disconnected');
    };
    this.socket.onmessage = async (event) => {
      const msg = JSON.parse(await event.data.text());
      if (msg.type === GameEndEvent) {
        this.displayMsg('player', msg.from, `scored ${msg.value.score}`);
      } else if (msg.type === GameStartEvent) {
        this.displayMsg('player', msg.from, `started a new game`);
      }
    };
  }

  function displayMsg(cls, from, msg) {
    const chatText = document.querySelector('#player-messages');
    chatText.innerHTML =
      `<div class="event"><span class="${cls}-event">${from}</span> ${msg}</div>` + chatText.innerHTML;
  }

  function broadcastEvent(from, type, value) {
    const event = {
      from: from,
      type: type,
      value: value,
    };
    this.socket.send(JSON.stringify(event));
  }