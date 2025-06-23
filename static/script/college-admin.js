//Other college event content box
const otherclgEvents = [{
        // id: "clg1",
        logo: "/images/avc-logo.jpg",
        collegeName: "A.V.C. College of Engineering",
        location: "Mayiladuthurai, Tamil Nadu",
        eventName: "National Conference",
        date: "25th june 2025",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.This is the full event description, with all necessary details, rules, dates, and contacts for the event."
    },
    {
        logo: "/images/cresent-logo.png",
        collegeName: "Crescent Institute of Science & Technology ",
        location: "Chennai, Tamil Nadu",
        eventName: "Innovative Hackathon'25",
        date: "20th june 2025",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.This is the full event description, with all necessary details, rules, dates, and contacts for the event."
    },
    {
        logo: "/images/avc-logo.jpg",
        collegeName: "A.V.C. College of Engineering",
        location: "Mayiladuthurai, Tamil Nadu",
        eventName: "Workshop on AI & ML",
        date: "20th june 2025",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.This is the full event description, with all necessary details, rules, dates, and contacts for the event."
    },
    {
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
                    <label for="desc-popup-toggle" class="button">Description</label>
                    <label for="register-popup" class="button">Register</label>
                </div>
            </div>
        </div>
    `;
    otherclgContainer.innerHTML += eventHTML;
});

//Desciption part
const Description = document.querySelector(".desc-popup");

otherclgEvents.forEach(eventDes => {
    const eventDesc = `
        <label for="desc-popup-toggle" class="close-btn">&times;</label>
            <div class="popup-content">
                <h2>${eventDes.collegeName}</h2>
                <h3>${eventDes.eventName}</h3>
                <h4>${eventDes.date}</h4>
                <p>${eventDes.description}</p>
            </div>
    `;
    Description.innerHTML += eventDesc;
})
//clg code input
// document.getElementById("submit-btn").addEventListener("submit", function(event) {
//     const collegeCode = document.getElementById("clg-code");
//     const alertmsg = document.getElementById("clg-code-req");

//     if (collegeCode.value.trim() === "") {
//         event.preventDefault();
//         alertmsg.classList.remove("hidden");
//     } else {
//         alertmsg.classList.add("hidden");
//     }
// });
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

collegeCode.addEventListener("input",validatecollegeCode)
collegeName.addEventListener("input",validatecollegeName)
fullnameInput.addEventListener("input",validatefullName)
emailInput.addEventListener("input",validateEmail)
departmentName.addEventListener("input",validateDepartment)

const message = document.getElementById("submitAlertmsg");
const form = document.getElementById("reg-form");

form.addEventListener("submit", function(e){
    e.preventDefault();
    const isValid =
            (validatecollegeCode() &&
            validatecollegeName() &&
            validatefullName() &&
            validateEmail() &&
            validateDepartment());
    if (isValid) {
        alert("You have registered for the event successfully!")
        message.textContent = "Registered successfully!";
        message.style.color = "green";
        form.reset();
     
    // [collegecodeAlertmsg, collegenameAlertmsg, fullnameAlertmsg, emailAlertmsg, deptnameAlertmsg].forEach( el => el.textContent = "");
    } else {
        validatecollegeCode();
        validatecollegeName();
        validatefullName();
        validateEmail();
        validateDepartment();
        alert("Please, enter the valid and required details");
        // message.textContent = "Please enter Valid details.";
    }
});