const signupForm = document.getElementById("signupFormContent");
const loginForm = document.getElementById("loginFormContent");
const maincontent = document.getElementById("main-content");

function openSignUpForm(){
    loginForm.classList.add("hidden-form");
    signupForm.classList.remove("hidden-form");
    maincontent.style.height = "auto";
}

function openLoginForm(){
    loginForm.classList.remove("hidden-form");
    signupForm.classList.add("hidden-form");
    maincontent.style.height = "100vh";
}