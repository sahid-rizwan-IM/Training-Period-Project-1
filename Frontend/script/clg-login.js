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

const adminRemindPoints = document.getElementById("#admin-reminding-points");
function openAdminRemindPonits() {
    adminRemindPoints.classList.remove("remind-hidden");
}

function closePopup() {
    document.querySelector("#reminding-points").style.display = "none";
}

const loginClgCode = document.getElementById("login-clg-code");
const loginClgCodeAlertmsg = document.getElementById("login-clg-code-req");

function validateAdminCollegeCode() {
    const code = loginClgCode.value.trim();
    if (code === "") {
        loginClgCodeAlertmsg.textContent = "College Code is required";
        return false;
    } else if (isNaN(code)) {
        loginClgCodeAlertmsg.textContent = "Kindly use numbers only";
        return false;
    } else if (code.length !== 4) {
        loginClgCodeAlertmsg.textContent = "Only 4 digits allowed";
        return false;
    } else {
        loginClgCodeAlertmsg.textContent = "";
        return true;
    }
}

const loginEmail = document.getElementById("login-email");
const loginEmailAlertmsg = document.getElementById("login-email-req");
const emailFormat = /^[a-z0-9.]+@[a-z]+\.[a-z]{2,}$/;

function validateAdminEmail() {
    const email = loginEmail.value.trim();
    if (email === "") {
        loginEmailAlertmsg.textContent = "Email is required";
        return false;
    } else if (!emailFormat.test(email)) {
        loginEmailAlertmsg.textContent = "Enter a valid email";
        return false;
    } else {
        loginEmailAlertmsg.textContent = "";
        return true;
    }
}

const loginPassword = document.getElementById("login-pass");
const loginPasswordAlertmsg = document.getElementById("login-pass-req");

function validateAdminPassword() {
    const password = loginPassword.value.trim();
    if (password === "") {
        loginPasswordAlertmsg.textContent = "Password is required";
        return false;
    } else if (password.length < 6) {
        loginPasswordAlertmsg.textContent = "Minimum 6 characters required";
        return false;
    } else {
        loginPasswordAlertmsg.textContent = "";
        return true;
    }
}

loginPassword.addEventListener("input", validateAdminPassword);
loginClgCode.addEventListener("input", validateAdminCollegeCode);
loginEmail.addEventListener("input", validateAdminEmail);

const adminLoginForm = document.getElementById("loginForm");

adminLoginForm.addEventListener("submit", async function (e) {
    e.preventDefault();
    const isValid = validateAdminCollegeCode() && validateAdminEmail() && validateAdminPassword();

    if (!isValid) {
        alert("Enter valid and required login fields!");
        return;
    }

    try {
        const response = await fetch("http://localhost:3000/api/v4/auth/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                email: loginEmail.value.trim(),
                collegeCode: loginClgCode.value.trim(),
                password: loginPassword.value.trim(),
            })
        });

        const result = await response.json();

        if (!response.ok) {
            alert(result.message || "Login failed.");
            return;
        }
        // res.status(200).json({
        //     success: true,
        //     userid: user._id, 
        //     role: user.role,
        //     message: "Login successful"
        // });
        alert("Login Successful!");
        localStorage.setItem("userid", result.userid);
        if (result.role === "college admin") {
            window.location.href = "/events";
        } else if (result.role === "student") {
            window.location.href = "/student-dashboard";
        }


    } catch (error) {
        console.error("Login Error:", error);
        alert("An error occurred while logging in.");
    }
});



//-------------------- Sign up ---------------

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
        admincollegenameAlertmsg.textContent = "College Name required";
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
    if (confirmPass.value === ""){
        confirmPassAlert.textContent = "Enter to confirm password";
        return false;
    } else if(password.value===""){
        confirmPassAlert.textContent = "set the passcode first!";
        return false;
    }else if (confirmPass.value !== password.value) {
        confirmPassAlert.textContent = "Passcode do not match";
        return false;
    } else {
        confirmPassAlert.textContent = "";
        return true;
    }
}

const clgAfflicationNum = document.getElementById("admin-aff-num");
const clgAfflicationNumAlert = document.getElementById("admin-aff-num-req");
function validateAfflicationNum() {
    const affNum = clgAfflicationNum.value.trim();
    if (affNum === "") {
        clgAfflicationNumAlert.textContent = "College Afflication Number is required";
        return false;
    } else if (isNaN(affNum)) {
        clgAfflicationNumAlert.textContent = "Kindly, Use numbers only";
        return false;
    } else if (affNum.length <5 || affNum.length >8) {
        clgAfflicationNumAlert.textContent = "Length must be between 5 to 8";
        return false;
    } else {
        clgAfflicationNumAlert.textContent = "";
        return true;
    }
}

const collegeLocation= document.getElementById("admin-location");
const collegeLocationAlertmsg = document.getElementById("admin-location-req");
function validateCollegeLocation() {
    const location= collegeLocation.value.trim();
    if (location === "") {
        collegeLocationAlertmsg.textContent = "College Location requires";
        return false;
    } else if (location.length < 5) {
        collegeLocationAlertmsg.textContent = "Minimum 5 characters";
        return false;
    } else if (location.length > 20) {
        collegeLocationAlertmsg.textContent = "Max 20 characters allowed";
        return false;
    } else {
        collegeLocationAlertmsg.textContent = "";
        return true;
    }
}

const studentExtraReq = document.querySelector(".studentreq");
const clgAdminExtraReq = document.querySelector(".collegeadminreq");
const userRoleSelection = document.getElementById("userRole");
function userRole(){
    if (userRoleSelection.value === "college admin"){
        clgAdminExtraReq.classList.remove("clgExtraDetailsHidden");
        studentExtraReq.style.display = "none";

    } else{
        clgAdminExtraReq.classList.add("clgExtraDetailsHidden");
        studentExtraReq.style.display = "block";
    }
}

// Student Name
const studentNameInput = document.getElementById("student-name");
const studentNameAlert = document.getElementById("student-name-req");

function validateStudentName() {
    const name = studentNameInput.value.trim();
    if (name === "") {
        studentNameAlert.textContent = "Student name is required";
        return false;
    } else if (name.length < 3) {
        studentNameAlert.textContent = "Minimum 3 characters";
        return false;
    } else if (name.length > 50) {
        studentNameAlert.textContent = "Maximum 50 characters allowed";
        return false;
    } else {
        studentNameAlert.textContent = "";
        return true;
    }
}

// Registration Number
const studentRegInput = document.getElementById("student-regno");
const studentRegAlert = document.getElementById("student-regno-req");

function validateStudentRegNo() {
    const reg = studentRegInput.value.trim();
    const regFormat = /^[0-9]{6,12}$/; // Allow 6 to 12 digits
    if (reg === "") {
        studentRegAlert.textContent = "Registration number is required";
        return false;
    } else if (!regFormat.test(reg)) {
        studentRegAlert.textContent = "Only digits (6–12 characters)";
        return false;
    } else {
        studentRegAlert.textContent = "";
        return true;
    }
}



signupClgCode.addEventListener("input", validateSignupCode);
admincollegeName.addEventListener("input", validateCollegeName);
signupEmail.addEventListener("input", validateSignupEmail);
logoImage.addEventListener("change", validateLogoImage);
password.addEventListener("input", validatePassword);
confirmPass.addEventListener("input", validateConfirmPassword);
clgAfflicationNum.addEventListener("input", validateAfflicationNum);
collegeLocation.addEventListener("input", validateCollegeLocation);
userRoleSelection.addEventListener("change", userRole);
studentNameInput.addEventListener("input", validateStudentName);
studentRegInput.addEventListener("input", validateStudentRegNo);


const adminUserLogoFile = logoImage;

const signupFormSubmit = document.getElementById("signupForm");
signupFormSubmit.addEventListener("submit", async function (e) {
    e.preventDefault();

    let isValid = validateSignupEmail() &&  validateSignupCode() && validatePassword() && validateConfirmPassword();

    const selectedRole = userRoleSelection.value;

    if (selectedRole === "college admin") {
        isValid = isValid &&
            validateCollegeName() &&
            validateLogoImage() &&
            validateAfflicationNum() &&
            validateCollegeLocation();
    } else if (selectedRole === "student") {
        isValid = isValid &&
            validateStudentName() &&
            validateStudentRegNo();
    }



    if (isValid) {

        // const eventId = document.getElementById("edit-event-id").value.trim();
        // const isUpdate = eventId !== "";

        const endpoint = "http://localhost:3000/registeredusers/add-user";

        try {

            const selectedRole = userRoleSelection.value;
            const formData = new FormData();
            formData.append("role", selectedRole); // send role to backend
            formData.append("collegeCode", signupClgCode.value.trim());
            formData.append("email", signupEmail.value.trim());
            formData.append("password", password.value.trim());

            if (selectedRole === "college admin") {
                formData.append("collegeName", admincollegeName.value.trim());
                formData.append("affiliationNumber", clgAfflicationNum.value.trim());
                formData.append("location", collegeLocation.value.trim());

                if (logoImage.files.length > 0) {
                    // formData.append("logo", adminUserLogoFile.files[0]);
                    formData.append("logofile", document.getElementById("logo-image").files[0]);
                    
                }
            } else if (selectedRole === "student") {
                formData.append("studentName", studentNameInput.value.trim());
                formData.append("registerNumber", studentRegInput.value.trim());
            }

        const response = await fetch(endpoint, {
            method: "POST",
            body: formData
        });

        for (let [key, value] of formData.entries()) {
            console.log(key, value);
        }
        const result = await response.json();

        if (response.ok) {
            alert("Signup Successful!");
            signupFormSubmit.reset();
            // document.getElementById("edit-event-id").value = "";
            setTimeout(() => {
                openLoginForm();
            }, 1000);
        } else {
        alert(result?.error || "Signup failed.");
    }
    } catch (err) {
        alert("Failed to create an account. Try again later.");
        // console.error(err);
    } 
    } else {
        validateSignupCode();
        validateSignupEmail();
        validatePassword();
        validateConfirmPassword();
        const selectedRole = userRoleSelection.value;

        if (selectedRole === "college admin") {
                validateCollegeName();
                validateLogoImage();
                validateAfflicationNum();
                validateCollegeLocation();
        } else if (selectedRole === "student") {
                validateStudentName();
                validateStudentRegNo();
        }
        alert("Please fix validation errors before submitting.");
    }

});
