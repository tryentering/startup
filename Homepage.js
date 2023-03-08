function login() {
    inputEl = document.querySelector("#name");
    localStorage.setItem("userName", nameFromInput.value);
    window.location.href = "JoinGame.html";
}