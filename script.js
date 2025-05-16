function send(event) {
    event.preventDefault();
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const error = document.getElementById("error");
    if (!username || !password) {
        error.style.color = "red";
        error.textContent = "Bitte alle Felder ausfüllen";
        return;
    }
    if (username === "admin" && password === "1234") {
        error.style.color = "green";
        error.textContent = "Login erfolgreich!";
    } else {
        error.style.color = "red";
        error.textContent = "Login fehlgeschlagen!";
    }
}


function toggleBackground() {
  document.body.classList.toggle('dark');
}