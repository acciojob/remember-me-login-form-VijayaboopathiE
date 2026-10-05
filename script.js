const form = document.querySelector("form");

const username = document.getElementById("username");
const password = document.getElementById("password");
const checkbox = document.getElementById("checkbox");
const submit = document.getElementById("submit");
const existing = document.getElementById("existing");


// Hide existing user button initially
existing.style.display = "none";


// Check localStorage when page loads
function checkExistingUser() {
    const savedUsername = localStorage.getItem("username");
    const savedPassword = localStorage.getItem("password");

    if (savedUsername && savedPassword) {
        existing.style.display = "block";
    }
}

checkExistingUser();


// Form submission
form.addEventListener("submit", function (event) {

    event.preventDefault();

    alert("Logged in as " + username.value);

    if (checkbox.checked) {

        localStorage.setItem("username", username.value);
        localStorage.setItem("password", password.value);

        existing.style.display = "block";

    } else {

        localStorage.removeItem("username");
        localStorage.removeItem("password");

        existing.style.display = "none";
    }
});


// Existing user login
existing.addEventListener("click", function () {

    alert(
        "Logged in as " + localStorage.getItem("username")
    );

});