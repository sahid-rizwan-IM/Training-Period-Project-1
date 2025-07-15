// const signupForm = document.getElementById("signupFormContent");
// const loginForm = document.getElementById("loginFormContent");
// const maincontent = document.getElementById("main-content");

// function openSignUpForm(){
//     loginForm.classList.add("hidden-form");
//     signupForm.classList.remove("hidden-form");
//     maincontent.style.height = "auto";
// }

// function openLoginForm(){
//     loginForm.classList.remove("hidden-form");
//     signupForm.classList.add("hidden-form");
//     maincontent.style.height = "100vh";
// }
// document.getElementById("login-btn").addEventListener("click", function() {
//     window.location.href = "/events";
// });

// // document.getElementById("signup-btn").addEventListener("click", function() {
// //     window.location.href = "#loginFormContent";
// //     window.location.href = "/templates/clg-admin-login.html";

// // });

// const adminRemindPoints = document.getElementById("reminding-points");
// function openAdminRemindPonits(){
//     adminRemindPoints.style.display = "block";
// }

// function closePopup(){
//     document.querySelector("#reminding-points").style.display = "none";
// }

// //Admin login form Validation
// const adminClgCode = document.getElementById("admin-clg-code");
// const adminClgCodeAlertmsg = document.getElementById("admin-clg-code-req");
// function validateAdminCollegeCode(){
//         const code = adminClgCode.value.trim();
//         if(code==""){
//             adminClgCodeAlertmsg.textContent = "College Code is required";
//             return false;
//         }
//         else if(isNaN(code)){
//             adminClgCodeAlertmsg.textContent = "Kindly, use Numbers";
//             return false;
//         }
//         else if(code.length!=4){
//             adminClgCodeAlertmsg.textContent = "only 4 digit is allowed";
//             return false;
//         }
//         else{
//             adminClgCodeAlertmsg.textContent = "";
//             return true;
//         }

// }

// const adminEmail = document.getElementById("admin-email");
// const adminEmailAlertmsg = document.getElementById("admin-email-req");
// const emailFormat = /^[a-z0-9.]+@[a-z]+\.[a-z]{2,}$/;  //must handle
// function validateAdminEmail(){
//     const email = adminEmail.value.trim();  
//     if(email==""){
//         adminEmailAlertmsg.textContent = "Email is required";
//         return false;
//     }else if(!emailFormat.test(email)){
//         adminEmailAlertmsg.textContent = "Enter a valid email";
//         return false;
//     }else{
//         adminEmailAlertmsg.textContent = "";
//         return true;
//     }
// }

// adminClgCode.addEventListener("input", validateAdminCollegeCode);
// adminEmail.addEventListener("input", validateAdminEmail);

// const adminLoginForm = document.getElementById("loginForm");

// adminLoginForm.addEventListener("submit", function(e) {
//     e.preventDefault();
//     const isValid = 
//         validateAdminCollegeCode() &&
//         validateAdminEmail();
    
//     if(isValid){
//         alert("Login Successfull!");
//         adminLoginForm.reset();
//     }
//     else{
//         validateAdminCollegeCode();
//         validateAdminEmail();
//         alert("Enter the valid and required fields!");
//     }
// });

// //ADMIN SIGN UP FORM VALIDATION
// const admincollegeName = document.getElementById("admin-reg-clg-name");
// const admincollegenameAlertmsg = document.getElementById("admin-reg-clg-name-req");
// function validatecollegeName(){
//     const clgName = admincollegeName.value.trim();
//     if(clgName==""){
//         admincollegenameAlertmsg.textContent = "Enter the College Name";
//         return false;
//     }
//     else if(clgName.length<3){
//         admincollegenameAlertmsg.textContent = "Minimum 3 characters Needed";
//         return false;
//     }
//     else if(clgName.length>60){
//         admincollegenameAlertmsg.textContent = "Maximum 60 characters are allowed";
//         return false;
//     }
//     else{
//         admincollegenameAlertmsg.textContent = "";
//         return true;
//     }
// }

// const adminPasscode = document.getElementById("admin-reg-pass");
// const adminPasscodeAlertmsg = document.getElementById("admin-reg-pass-req");
// function validateAdminPasscode(){
//     const isValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]{8,12}$/.test(password) &&
//                     !/\s/.test(password) && 
//                     (password.match(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/g) || []).length <= 1;
//     if(adminPasscode = ""){
//         adminPasscodeAlertmsg.textContent = "Passcode is required";
//         return false;
//     }
//     else if(!isValid.test(adminPasscode)){
//         adminPasscodeAlertmsg.textContent = "Satisfy the required conditions";
//         return false;
//     }
//     else{
//         adminPasscodeAlertmsg.textContent = "";
//         return true;
//     }
// }

// Toggle Forms
const signupForm = document.getElementById("signupFormContent");
const loginForm = document.getElementById("loginFormContent");
const maincontent = document.getElementById("main-content");

function openSignUpForm() {
    loginForm.classList.add("hidden-form");
    signupForm.classList.remove("hidden-form");
    maincontent.style.height = "auto";
}

function openLoginForm() {
    loginForm.classList.remove("hidden-form");
    signupForm.classList.add("hidden-form");
    maincontent.style.height = "100vh";
}

// Reminder popup toggle
const adminRemindPoints = document.getElementById("reminding-points");
function openAdminRemindPonits() {
    adminRemindPoints.style.display = "block";
}

function closePopup() {
    document.querySelector("#reminding-points").style.display = "none";
}

// ------------------------ LOGIN VALIDATION ------------------------
const adminClgCode = document.getElementById("admin-clg-code");
const adminClgCodeAlertmsg = document.getElementById("admin-clg-code-req");

function validateAdminCollegeCode() {
    const code = adminClgCode.value.trim();
    if (code === "") {
        adminClgCodeAlertmsg.textContent = "College Code is required";
        return false;
    } else if (isNaN(code)) {
        adminClgCodeAlertmsg.textContent = "Kindly use numbers only";
        return false;
    } else if (code.length !== 4) {
        adminClgCodeAlertmsg.textContent = "Only 4 digits allowed";
        return false;
    } else {
        adminClgCodeAlertmsg.textContent = "";
        return true;
    }
}

const adminEmail = document.getElementById("admin-email");
const adminEmailAlertmsg = document.getElementById("admin-email-req");
const emailFormat = /^[a-z0-9.]+@[a-z]+\.[a-z]{2,}$/;

function validateAdminEmail() {
    const email = adminEmail.value.trim();
    if (email === "") {
        adminEmailAlertmsg.textContent = "Email is required";
        return false;
    } else if (!emailFormat.test(email)) {
        adminEmailAlertmsg.textContent = "Enter a valid email";
        return false;
    } else {
        adminEmailAlertmsg.textContent = "";
        return true;
    }
}

adminClgCode.addEventListener("input", validateAdminCollegeCode);
adminEmail.addEventListener("input", validateAdminEmail);

const adminLoginForm = document.getElementById("loginForm");

adminLoginForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const isValid = validateAdminCollegeCode() && validateAdminEmail();

    if (isValid) {
        alert("Login Successful!");
        adminLoginForm.reset();
        window.location.href = "/events";
    } else {
        validateAdminCollegeCode();
        validateAdminEmail();
        alert("Enter valid and required login fields!");
    }
});

// ------------------------ SIGNUP VALIDATION ------------------------

// College Code
const signupClgCode = document.getElementById("admin-reg-clg-code");
const signupClgCodeAlert = document.getElementById("admin-reg-clg-code-req");
function validateSignupCode() {
    const code = signupClgCode.value.trim();
    if (code === "") {
        signupClgCodeAlert.textContent = "College Code is required";
        return false;
    } else if (isNaN(code)) {
        signupClgCodeAlert.textContent = "Use numbers only";
        return false;
    } else if (code.length !== 4) {
        signupClgCodeAlert.textContent = "Only 4 digits allowed";
        return false;
    } else {
        signupClgCodeAlert.textContent = "";
        return true;
    }
}

// College Name
const admincollegeName = document.getElementById("admin-reg-clg-name");
const admincollegenameAlertmsg = document.getElementById("admin-reg-clg-name-req");
function validateCollegeName() {
    const name = admincollegeName.value.trim();
    if (name === "") {
        admincollegenameAlertmsg.textContent = "Enter College Name";
        return false;
    } else if (name.length < 3) {
        admincollegenameAlertmsg.textContent = "Minimum 3 characters";
        return false;
    } else if (name.length > 60) {
        admincollegenameAlertmsg.textContent = "Max 60 characters allowed";
        return false;
    } else {
        admincollegenameAlertmsg.textContent = "";
        return true;
    }
}

// Email (already declared above)
const signupEmail = document.querySelector("#signupForm input[type='email']");
const signupEmailAlert = document.getElementById("admim-email-req");
function validateSignupEmail() {
    const email = signupEmail.value.trim();
    if (email === "") {
        signupEmailAlert.textContent = "Email is required";
        return false;
    } else if (!emailFormat.test(email)) {
        signupEmailAlert.textContent = "Enter a valid email";
        return false;
    } else {
        signupEmailAlert.textContent = "";
        return true;
    }
}

// Logo Upload
const logoImage = document.getElementById("logo-image");
const logoImageAlert = document.getElementById("logo-image-req");
function validateLogoImage() {
    if (logoImage.files.length === 0) {
        logoImageAlert.textContent = "Upload logo image";
        return false;
    } else {
        logoImageAlert.textContent = "";
        return true;
    }
}

// Password
const password = document.getElementById("admin-reg-pass");
const passwordAlert = document.getElementById("admin-reg-pass-req");
function validatePassword() {
    const value = password.value;
    const isValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,12}$/.test(value);
    if (value === "") {
        passwordAlert.textContent = "Passcode is required";
        return false;
    } else if (!isValid) {
        passwordAlert.textContent = "Password must have 8–12 chars, 1 uppercase, 1 lowercase, 1 digit, 1 symbol";
        return false;
    } else {
        passwordAlert.textContent = "";
        return true;
    }
}

// Confirm Password
const confirmPass = document.getElementById("admin-reg-confirm-pass");
const confirmPassAlert = document.getElementById("admin-reg-confirm-pass-req");
function validateConfirmPassword() {
    if (confirmPass.value !== password.value) {
        confirmPassAlert.textContent = "Passwords do not match";
        return false;
    } else {
        confirmPassAlert.textContent = "";
        return true;
    }
}

signupClgCode.addEventListener("input", validateSignupCode);
admincollegeName.addEventListener("input", validateCollegeName);
signupEmail.addEventListener("input", validateSignupEmail);
logoImage.addEventListener("change", validateLogoImage);
password.addEventListener("input", validatePassword);
confirmPass.addEventListener("input", validateConfirmPassword);

const signupFormSubmit = document.getElementById("signupForm");
signupFormSubmit.addEventListener("submit", async function (e) {
    e.preventDefault();

    const isValid =
        validateSignupCode() &&
        validateCollegeName() &&
        validateSignupEmail() &&
        validateLogoImage() &&
        validatePassword() &&
        validateConfirmPassword();

    if (isValid) {

        // const eventId = document.getElementById("edit-event-id").value.trim();
        // const isUpdate = eventId !== "";

        const endpoint = "http://localhost:3000/api/v2/adminusers/add-adminusers";

        const method = "POST";

        try {

            const formData = new FormData();
            formData.append("eventName", signupClgCode.value.trim());
            formData.append("eventType", admincollegeName.value.trim());
            formData.append("eventDate", signupEmail.value.trim());
            formData.append("eventDescription", password.value.trim());
            if (eventFile.files.length > 0) {
                formData.append("file", eventFile.files[0]);
            }

        const response = await fetch(endpoint, {
            method,
            body: formData
        });


        const result = await response.json();

        if (response.ok) {
            alert("Signup Successful!");
            signupFormSubmit.reset();
            // document.getElementById("edit-event-id").value = "";
            setTimeout(() => {
                openLoginForm();
            }, 1000);
        }
    } catch (err) {
        alert("Failed to create event. Try again later.");
        console.error(err);
    }
    // if (isValid) {

    //     const newAdminUser = {

    //     }
    //     alert("Signup Successful!");
    //     signupFormSubmit.reset();
    //     openLoginForm();
    // } else {
        validateSignupCode();
        validateCollegeName();
        validateSignupEmail();
        validateLogoImage();
        validatePassword();
        validateConfirmPassword();
        alert("Please fix validation errors before submitting.");
    }

});
