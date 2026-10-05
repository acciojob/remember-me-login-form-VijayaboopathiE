//your JS code here. If required.
const form = document.getElementById("login-form");
const username = document.getElementById("username");
const password = document.getElementById("password");
const checkbox = document.getElementById("checkbox");
const existing = document.getElementById("existing");


// Check if credentials already exist
window.addEventListener("load", function () {

    const savedUsername = localStorage.getItem("username");
    const savedPassword = localStorage.getItem("password");

    if (savedUsername && savedPassword) {
        existing.style.display = "block";
    }

});


// Login form submission
form.addEventListener("submit", function (event) {

    event.preventDefault();

    const user = username.value;
    const pass = password.value;

    alert("Logged in as " + user);

    if (checkbox.checked) {

        localStorage.setItem("username", user);
        localStorage.setItem("password", pass);

        existing.style.display = "block";

    } else {

        localStorage.removeItem("username");
        localStorage.removeItem("password");

        existing.style.display = "none";
    }

});


// Login as existing user
existing.addEventListener("click", function () {

    const savedUsername = localStorage.getItem("username");

    if (savedUsername) {
        alert("Logged in as " + savedUsername);
    }

});