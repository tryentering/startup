async function login() {
  loginOrCreate(`/api/auth/create`);
}

async function loginOrCreate(endpoint) {
  const userName = document.querySelector('#name')?.value;
  const password = document.querySelector('#password')?.value;
  const response = await fetch(endpoint, {
    method: 'post',
    body: JSON.stringify({ user: userName, password: password}),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  const body = await response.json();

  if (response?.status === 200) {
    localStorage.setItem('userName', userName);
    window.location.href = 'play.html';
  } else {
    if (endpoint !== `/api/auth/login`) {
      loginOrCreate(`/api/auth/login`)
    }
  }
}

function play() {
  window.location.href = 'play.html';
}

async function getUser(name) {
  let scores = [];
  // See if we have a user with the given email.
  const response = await fetch(`/api/user/${name}`);
  if (response.status === 200) {
    return response.json();
  }

  return null;
}

function setDisplay(controlId, display) {
  const playControlEl = document.querySelector(`#${controlId}`);
  if (playControlEl) {
    playControlEl.style.display = display;
  }
}

function displayPicture() {
    const random = Math.floor(Math.random() * 1000);
    fetch(`https://picsum.photos/v2/list?page=${random}&limit=1`)
      .then((response) => response.json())
      .then((data) => {
        const containerEl = document.querySelector('#picture');
  
        const width = containerEl.offsetWidth;
        const height = containerEl.offsetHeight;
  
        const imgUrl = `https://picsum.photos/id/${data[0].id}/${width}/${height}?grayscale`;
        const imgEl = document.createElement('img');
        imgEl.setAttribute('src', imgUrl);
        containerEl.appendChild(imgEl);
      });
  }
  displayPicture();