//Other college event content box
const otherclgEvents = [{
        id: "clg1",
        logo: "/images/avc-logo.jpg",
        collegeName: "A.V.C. College of Engineering",
        location: "Mayiladuthurai, Tamil Nadu",
        eventName: "National Conference",
        date: "25th june 2025",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.This is the full event description, with all necessary details, rules, dates, and contacts for the event.Lorem ipsum dolor sit amet, consectetur adipiscing elit.This is the full event description, with all necessary details, rules, dates, and contacts for the event.Lorem ipsum dolor sit amet, consectetur adipiscing elit.This is the full event description, with all necessary details, rules, dates, and contacts for the event.Lorem ipsum dolor sit amet, consectetur adipiscing elit.This is the full event description, with all necessary details, rules, dates, and contacts for the event.Lorem ipsum dolor sit amet, consectetur adipiscing elit.This is the full event description, with all necessary details, rules, dates, and contacts for the event."
    },
    {
        id: "clg2",
        logo: "/images/cresent-logo.png",
        collegeName: "Crescent Institute of Science & Technology ",
        location: "Chennai, Tamil Nadu",
        eventName: "Innovative Hackathon'25",
        date: "20th june 2025",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.This is the full event description, with all necessary details, rules, dates, and contacts for the event."
    },
    {
        id: "clg3",
        logo: "/images/avc-logo.jpg",
        collegeName: "A.V.C. College of Engineering",
        location: "Mayiladuthurai, Tamil Nadu",
        eventName: "Workshop on AI & ML",
        date: "20th june 2025",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.This is the full event description, with all necessary details, rules, dates, and contacts for the event."
    },
    {
        id: "clg4",
        logo: "/images/as-salam-logo.jpg",
        collegeName: "AS-SALAM College of Engineering and Technology",
        location: "Aduthurai, Tamil Nadu",
        eventName: "InfoTech Paper Presentatin'25",
        date: "7th july 2025",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.This is the full event description, with all necessary details, rules, dates, and contacts for the event."
    }
]

const otherclgContainer = document.getElementById("otherclg-event");
otherclgEvents.forEach(event => {
    const eventHTML = `
        <div class="otherclg-content">
            <div class="event-header">
                <img src="${event.logo}" alt="college logo">
                <div>
                    <h4>${event.collegeName}</h4>
                    <h6>${event.location}</h6>
                </div>
            </div>
            <div>
                <h3 class="event-name">${event.eventName}</h3>
                <div class="imp-buttons">
                    <!--description button that calls evedesc with prticular evet details-->
                    <button class="button" onclick="otherClgEventDescPopup(\`${event.collegeName}\`, \`${event.eventName}\`, \`${event.date}\`, \`${event.description}\`)">Description</button>
                    <button class="button" onclick="eventRegistrationForm(\`${event.collegeName}\`, \`${event.eventName}\`)">Register</button>
                </div>
            </div>
        </div>
    `;
    otherclgContainer.innerHTML += eventHTML;
});



//Desciption display part
function otherClgEventDescPopup(collegeName, eventName, date, description) {
    const descPopup = document.querySelector(".desc-popup");
    const descPopupContent = `
        <div class="popup-content">
            <span class="close-btn" onclick="closeDescPopup()">&times;</span>
            <h2>${collegeName}</h2>
            <h3>${eventName}</h3>
            <h4>${date}</h4>
            <p>${description || "No description available"}</p>
        </div>
    `;
    descPopup.innerHTML = descPopupContent;
    descPopup.style.display = "flex";
}

function closeDescPopup() {
    document.querySelector(".desc-popup").style.display = "none";
    document.querySelector(".event-reg-popup").style.display = "none";
}

//REGISTRATION FORM FOR EVENT
function eventRegistrationForm(collegeName, eventName) {
    const regPopup = document.querySelector(".event-reg-popup");
    const regPopupContent = `
        <div class="popup-content">
            <span class="close-btn" onclick="closeDescPopup()">&times;</span>
            <h3 style="text-align:center">${collegeName}</h3>
            <h2 style="text-align:center">Register for Event - ${eventName}</h2>
            <form id="reg-form">
                    <div class="form-group">
                        <label for="clg-code">College Code:<span class="required-star">*</span></label>
                        <input type="text" id="clg-code" name="clg-code">
                        <small id="clg-code-req" class="hidden"></small>
                    </div>
                    <div class="form-group ">
                        <label for="clg-name">College Name:<span class="required-star">*</span></label>
                        <input type="text" id="clg-name" name="clg-name">
                        <small id="clg-name-req" class="hidden"></small>
                    </div>
                    <div class="form-group">
                        <label for="name">Full Name:<span class="required-star">*</span></label>
                        <input type="text" id="name" name="name">
                        <small id="full-name-req" class="hidden"></small>
                    </div>
                    <div class="form-group">
                        <label for="email">Email ID:<span class="required-star">*</span></label>
                        <input type="email" id="email" name="email">
                        <small id="email-req" class="hidden"></small>
                    </div>
                    <div class="form-group">
                        <label for="dept">Department:<span class="required-star">*</span></label>
                        <input type="text" id="dept" name="dept">
                        <small id="dept-req" class="hidden"></small>
                    </div>
                    <div class="form-group">
                        <label for="year">Year:</label>
                        <select id="year" name="year">
                            <option value="">Select</option>
                            <option value="1st">1st Year</option>
                            <option value="2nd">2nd Year</option>
                            <option value="3rd">3rd Year</option>
                            <option value="4th">4th Year</option>
                        </select>
                        <small id="year-req" class="hidden"></small>
                    </div>
                    <small id="submitAlertmsg" class="hidden"></small>
                    <button type="submit " id="submit-btn" onclick="submitFunction()" >Submit</button>
            </form>
        </div>
    `;
    regPopup.innerHTML = regPopupContent;
    regPopup.style.display = "flex";
}
function submitFunction(){
    console.log("form submitted");
}

// document.addEventListener("DOMContentLoaded", function () {
//     initCollegeCodeValidation();
//     initCollegeNameValidation();
//     initFullNameValidation();
//     initEmailValidation();
//     initDepartmentValidation();
//     initFormSubmitHandler();
// });
//FORM VALIDATION

// function initCollegeCodeValidation() {
//     const collegeCode = document.getElementById("clg-code");
//     const collegecodeAlertmsg = document.getElementById("clg-code-req");
 
//     collegeCode.addEventListener("DOMContentLoaded", function () {
//         const code = collegeCode.value.trim();
//         if (code === "") {
//             collegecodeAlertmsg.textContent = "Enter the College Code";
//             collegecodeAlertmsg.style.display= flex;
//             return false;

//         } else if (isNaN(code)) {
//             collegecodeAlertmsg.textContent = "Kindly, use Numbers";
//             return false;

//         } else if (code.length !== 4) {
//             collegecodeAlertmsg.textContent = "Only 4 digits are allowed";
//             return false;

//         } else {
//             collegecodeAlertmsg.textContent = "";
//             return false;

//         }
//     });
//     return;
// }
const collegeCode = document.getElementById("clg-code");
const collegecodeAlertmsg = document.getElementById("clg-code-req");
function validatecollegeCode(){
        const code = collegeCode.value.trim();
        if(code==""){
            collegecodeAlertmsg.textContent = "Enter the College Code";
            return false;
        }
        else if(isNaN(code)){
            collegecodeAlertmsg.textContent = "Kindly, use Numbers";
            return false;
        }
        else if(code.length!=4){
            collegecodeAlertmsg.textContent = "only 4 digit is allowed";
            return false;
        }
        
        else{
            collegecodeAlertmsg.textContent = "";
            return true;
        }
}


// function initCollegeNameValidation(){
//     const collegeName = document.getElementById("clg-name");
//     const collegenameAlertmsg = document.getElementById("clg-name-req");
//     collegeName.addEventListener("input", function () {
//         const clgName = collegeName.value.trim();
//         if(clgName==""){
//             collegenameAlertmsg.textContent = "Enter the College Name";
//             return false;
//         }
//         else if(clgName.length<3){
//             collegenameAlertmsg.textContent = "Minimum 3 characters Needed";
//             return false;
//         }
//         else if(clgName.length>60){
//             collegenameAlertmsg.textContent = "Maximum 60 characters are allowed";
//             return false;
//         }
//         else{
//             collegenameAlertmsg.textContent = "";
//             return true;
//         }
//     });
//     return true;
// }
const collegeName = document.getElementById("clg-name");
const collegenameAlertmsg = document.getElementById("clg-name-req");
function validatecollegeName(){
    const clgName = collegeName.value.trim();
    if(clgName==""){
        collegenameAlertmsg.textContent = "Enter the College Name";
    }
    else if(clgName.length<3){
        collegenameAlertmsg.textContent = "Minimum 3 characters Needed";
        return false;
    }
    else if(clgName.length>60){
        collegenameAlertmsg.textContent = "Maximum 60 characters are allowed";
        return false;
    }
    else{
        collegenameAlertmsg.textContent = "";
        return true;
    }
}
// function initFullNameValidation(){
//     const fullnameInput = document.getElementById("name");
//     const fullnameAlertmsg = document.getElementById("full-name-req");
//     fullnameInput.addEventListener('input', function() {
//         const fullName = fullnameInput.value.trim();
//         if(fullName==""){
//             fullnameAlertmsg.textContent = "Enter the full name";
//             return false;
//         }
//         else if(fullName.length<3){
//             fullnameAlertmsg.textContent = "Enter a valid name, minimum 3 characters needed";
//             return false;
//         }
//         else{
//             fullnameAlertmsg.textContent = "";
//             return true;
//         }
//     });
//     return true;
// }
const fullnameInput = document.getElementById("name");
const fullnameAlertmsg = document.getElementById("full-name-req");
function validatefullName(){
    const fullName = fullnameInput.value.trim();
    if(fullName==""){
        fullnameAlertmsg.textContent = "Enter the full name";
        return false;
    }else if(fullName.length<3){
        fullnameAlertmsg.textContent = "Enter a valid name, minimum 3 characters needed";
        return false;
    }
    else{
        fullnameAlertmsg.textContent = "";
        return true;
    }
}

// function initEmailValidation(){
//     const emailInput = document.getElementById("email");
//     const emailAlertmsg = document.getElementById("email-req");
//     const emailFormat = /^[a-z0-9.]+@[a-z]+\.[a-z]{2,}$/;
//     emailInput.addEventListener("input", function() {
//         const email = emailInput.value.trim();  
//         if(email==""){
//             emailAlertmsg.textContent = "Email is required";
//             return false;
//         }else if(!emailFormat.test(email)){
//             emailAlertmsg.textContent = "Enter a valid email";
//             return false;
//         }else{
//             emailAlertmsg.textContent = "";
//             return true;
//         }
//     });
//     return true;
// }


const emailInput = document.getElementById("email");
const emailAlertmsg = document.getElementById("email-req");
const emailFormat = /^[a-z0-9.]+@[a-z]+\.[a-z]{2,}$/;  //must handle
function validateEmail(){
    const email = emailInput.value.trim();  
    if(email==""){
        emailAlertmsg.textContent = "Email is required";
        return false;
    }else if(!emailFormat.test(email)){
        emailAlertmsg.textContent = "Enter a valid email";
        return false;
    }else{
        emailAlertmsg.textContent = "";
        return true;
    }
}

// function initDepartmentValidation(){
//     const departmentName = document.getElementById("dept");
//     const deptnameAlertmsg = document.getElementById("dept-req");
//     departmentName.addEventListener("input", function() {
//         const deptName = departmentName.value.trim();
//         if(deptName==""){
//             deptnameAlertmsg.textContent = "Department is required";
//         }
//         else if(deptName.length<2){
//             deptnameAlertmsg.textContent = "Minimum 2 characters Needed";
//             return false;
//         }
//         else if(deptName.length>30){
//             deptnameAlertmsg.textContent = "Maximum 30 characters are allowed";
//             return false;
//         }
//         else{
//             deptnameAlertmsg.textContent = "";
//             return true;
//         }
//     });
//     return true;
// }

const departmentName = document.getElementById("dept");
const deptnameAlertmsg = document.getElementById("dept-req");
function validateDepartment(){
    const deptName = departmentName.value.trim();
    if(deptName==""){
        deptnameAlertmsg.textContent = "Department is required";
    }
    else if(deptName.length<2){
        deptnameAlertmsg.textContent = "Minimum 2 characters Needed";
        return false;
    }
    else if(deptName.length>30){
        deptnameAlertmsg.textContent = "Maximum 30 characters are allowed";
        return false;
    }
    else{
        deptnameAlertmsg.textContent = "";
        return true;
    }
}



collegeCode.addEventListener("input",validatecollegeCode);
collegeName.addEventListener("input",validatecollegeName);
fullnameInput.addEventListener("input",validatefullName);
emailInput.addEventListener("input",validateEmail);
departmentName.addEventListener("input",validateDepartment);

// function initFormSubmitHandler(){
//     const message = document.getElementById("submitAlertmsg");
//     const form = document.getElementById("reg-form");

//     form.addEventListener("submit", function(e){
//         e.preventDefault();
//         // debugger
//         const isValid =
//                 initCollegeCodeValidation() &&
//                 initCollegeNameValidation() &&
//                 initFullNameValidation() &&
//                 initEmailValidation() &&
//                 initDepartmentValidation();
//         if (isValid) {
//             alert("You have registered for the event successfully!")
//             message.textContent = "Registered successfully!";
//             message.style.color = "green";
//             form.reset();
//         } 
//         else {
//             initCollegeCodeValidation();
//             initCollegeNameValidation();
//             initFullNameValidation();
//             initEmailValidation();
//             initDepartmentValidation();
//             alert("Please, enter the valid and required details");
//         }
//     });
//     return true;
// }

// document.addEventListener("DOMContentLoaded", function () {
//     initCollegeCodeValidation();
//     initCollegeNameValidation();
//     initFullNameValidation();
//     initEmailValidation();
//     initDepartmentValidation();
//     initFormSubmitHandler();
// });
const message = document.getElementById("submitAlertmsg");
const form = document.getElementById("reg-form");

form.addEventListener("submit", function(e){
    console.log("strting part");
    // e.preventDefault();
    debugger
    const isValid =
            validatecollegeCode() &&
            validatecollegeName() &&
            validatefullName() &&
            validateEmail() &&
            validateDepartment();
    if (isValid) {
        alert("You have registered for the event successfully!")
        message.textContent = "Registered successfully!";
        message.style.color = "green";
        form.reset();
    } 
    else {
        validatecollegeCode();
        validatecollegeName();
        validatefullName();
        validateEmail();
        validateDepartment();
        alert("Please, enter the valid and required details");
    }
});
