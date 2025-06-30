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
document.getElementById("login-btn").addEventListener("click", function() {
    window.location.href = "/templates/college-admin.html";
});

// document.getElementById("signup-btn").addEventListener("click", function() {
//     window.location.href = "#loginFormContent";
//     window.location.href = "/templates/clg-admin-login.html";

// });

const adminRemindPoints = document.getElementById("reminding-points");
function openAdminRemindPonits(){
    adminRemindPoints.style.display = "block";
}

function closePopup(){
    document.querySelector("#reminding-points").style.display = "none";
}

//Admin login form Validation
const adminClgCode = document.getElementById("admin-clg-code");
const adminClgCodeAlertmsg = document.getElementById("admin-clg-code-req");
function validateAdminCollegeCode(){
        const code = adminClgCode.value.trim();
        if(code==""){
            adminClgCodeAlertmsg.textContent = "College Code is required";
            return false;
        }
        else if(isNaN(code)){
            adminClgCodeAlertmsg.textContent = "Kindly, use Numbers";
            return false;
        }
        else if(code.length!=4){
            adminClgCodeAlertmsg.textContent = "only 4 digit is allowed";
            return false;
        }
        else{
            adminClgCodeAlertmsg.textContent = "";
            return true;
        }

}

const adminEmail = document.getElementById("admin-email");
const adminEmailAlertmsg = document.getElementById("admin-email-req");
const emailFormat = /^[a-z0-9.]+@[a-z]+\.[a-z]{2,}$/;  //must handle
function validateAdminEmail(){
    const email = adminEmail.value.trim();  
    if(email==""){
        adminEmailAlertmsg.textContent = "Email is required";
        return false;
    }else if(!emailFormat.test(email)){
        adminEmailAlertmsg.textContent = "Enter a valid email";
        return false;
    }else{
        adminEmailAlertmsg.textContent = "";
        return true;
    }
}

adminClgCode.addEventListener("input", validateAdminCollegeCode);
adminEmail.addEventListener("input", validateAdminEmail);

const adminLoginForm = document.getElementById("loginForm");

adminLoginForm.addEventListener("submit", function(e) {
    e.preventDefault();
    const isValid = 
        validateAdminCollegeCode() &&
        validateAdminEmail();
    
    if(isValid){
        alert("Login Successfull!");
        adminLoginForm.reset();
    }
    else{
        validateAdminCollegeCode();
        validateAdminEmail();
        alert("Enter the valid and required fields!");
    }
});

//ADMIN SIGN UP FORM VALIDATION
const admincollegeName = document.getElementById("admin-reg-clg-name");
const admincollegenameAlertmsg = document.getElementById("admin-reg-clg-name-req");
function validatecollegeName(){
    const clgName = admincollegeName.value.trim();
    if(clgName==""){
        admincollegenameAlertmsg.textContent = "Enter the College Name";
        return false;
    }
    else if(clgName.length<3){
        admincollegenameAlertmsg.textContent = "Minimum 3 characters Needed";
        return false;
    }
    else if(clgName.length>60){
        admincollegenameAlertmsg.textContent = "Maximum 60 characters are allowed";
        return false;
    }
    else{
        admincollegenameAlertmsg.textContent = "";
        return true;
    }
}

const adminPasscode = document.getElementById("admin-reg-pass");
const adminPasscodeAlertmsg = document.getElementById("admin-reg-pass-req");
function validateAdminPasscode(){
    const isValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]{8,12}$/.test(password) &&
                    !/\s/.test(password) && 
                    (password.match(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/g) || []).length <= 1;
    if(adminPasscode = ""){
        adminPasscodeAlertmsg.textContent = "Passcode is required";
        return false;
    }
    else if(!isValid.test(adminPasscode)){
        adminPasscodeAlertmsg.textContent = "Satisfy the required conditions";
        return false;
    }
    else{
        adminPasscodeAlertmsg.textContent = "";
        return true;
    }
}

