/**
 * Adds a submit Function to the login form.
 * Prevents default form submission and performs basic validation and test authentication.
 */
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


/**
 * Toggles dark mode by adding or removing a 'dark' class on the body element.
 */
function toggleBackground() {
  document.body.classList.toggle('dark');
}