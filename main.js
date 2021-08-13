const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

window.alert("use username:prashant and password:123");

loginButton.addEventListener("click", (a) => {
    a.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "prashant" && password === "123") {
        alert("You have successfully logged in.");
        window.location.href = "quiz.html"
        // location.reload();
    } else {
        loginErrorMsg.style.opacity = 1;
    }
})