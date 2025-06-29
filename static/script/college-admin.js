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
    },
    {
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
        id: "clg2",
        logo: "/images/cresent-logo.png",
        collegeName: "Crescent Institute of Science & Technology ",
        location: "Chennai, Tamil Nadu",
        eventName: "Innovative Hackathon'25",
        date: "20th june 2025",
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
                    <button class="descButton" onclick="otherClgEventDescPopup(\`${event.collegeName}\`, \`${event.eventName}\`, \`${event.date}\`, \`${event.description}\`)">Description</button>
                    <label for="register-popup" class="regButton" onclick= "registrationFormDynamicDetials(\`${event.collegeName}\`, \`${event.eventName}\`)">Register</label>
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
            <span class="close-btn" onclick="closePopup()">&times;</span>
            <h2>${collegeName}</h2>
            <h3>${eventName}</h3>
            <h4>${date}</h4>
            <p>${description || "No description available"}</p>
        </div>
    `;
    descPopup.innerHTML = descPopupContent;
    descPopup.style.display = "flex";
}

function closePopup(){
    // to close description popup
    document.querySelector(".desc-popup").style.display = "none";
    // to close register form popup
    document.querySelector(".event-reg-popup").style.display = "none";  
    const form = document.getElementById("reg-form");
    form.reset();
    // to close create form popup
    document.querySelector("#create-event-popup").style.display = "none";
    const createEventForm = document.getElementById("create-form");
    createEventForm.reset();
    // to clear all the alert msg in both forms
    const alertMsgs = document.querySelectorAll("small");
    alertMsgs.forEach(msg => msg.textContent = "");
    // to close view registered students popup
    document.querySelector("#viewRegStudents-popup").style.display = "none";

}

function registrationFormDynamicDetials(collegeName, eventName){
    document.querySelector(".event-reg-popup").style.display = "flex";
    const registerationCardDetails = document.getElementById("reg-card-details")
    const regDetails = `
        <label for="register-popup" class="close-btn" onclick="closePopup()">&times;</label>
        <h3 id="regCollegeName" class="pop-title">${collegeName}</h3>
        <h2 id="regEventName" class="pop-title">Register for Event - ${eventName}</h2>
    `;

        registerationCardDetails.innerHTML = regDetails;
        registerationCardDetails.style.display = "block";
        console.log("reg button clicked");
}

//registered list here
// let registeredStudents = [
//     {
//         //will be stored dynamically
//     }
// ]




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
        return false;
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

const yearSelection = document.getElementById("year")
const yearSelectionAlertmsg = document.getElementById("year-req")
function validateYearSelection(){
    if(yearSelection.value == ''){
        yearSelectionAlertmsg.textContent = "Select your year";
        return false;
    }
    else{
        yearSelectionAlertmsg.textContent = "";
        return true;
    }
}



collegeCode.addEventListener("input",validatecollegeCode);
collegeName.addEventListener("input",validatecollegeName);
fullnameInput.addEventListener("input",validatefullName);
emailInput.addEventListener("input",validateEmail);
departmentName.addEventListener("input",validateDepartment);
yearSelection.addEventListener("change", validateYearSelection);



const message = document.getElementById("submitAlertmsg");
const form = document.getElementById("reg-form");
form.addEventListener("submit", function(e){
    console.log("strting part");
    e.preventDefault();
    debugger
    const isValid =
            validatecollegeCode() &&
            validatecollegeName() &&
            validatefullName() &&
            validateEmail() &&
            validateDepartment()&&
            validateYearSelection();

    if (isValid) {
        alert("You have registered for the event successfully!");
        message.textContent = "Registered successfully!";
        message.style.color = "green";
        form.reset();
        setTimeout(()=>{
            closePopup();
        },1000);
        const alertMsgs = document.querySelectorAll("small");
        alertMsgs.forEach(msg => msg.textContent = "");
    } 
    else {
        validatecollegeCode();
        validatecollegeName();
        validatefullName();
        validateEmail();
        validateDepartment();
        validateYearSelection();
        alert("Please, enter the valid and required details");
    }
    
});


function opencreateform(){
    const createEventForm = document.getElementById("create-event-popup");
    createEventForm.style.display = "block";
    
}
function toViewRegisteredStudents(){
    const registeredStudents = document.getElementById("viewRegStudents-popup");
    registeredStudents.style.display = "block";
}

function activePage(pageId, clickedId){
    document.querySelectorAll('.section').forEach(section => {
        section.classList.add('hidden-page-content');
        // section.innerHTML = "";
    });

    const pageId1 = document.getElementById(pageId);
    pageId1.classList.remove('hidden-page-content');
    // pageId1.style.flex = 2;

    document.querySelectorAll('.sidebar-link').forEach(link => {
        link.classList.remove('active');
    });

    // Add active to the clicked link
    clickedId.classList.add('active');
}

//Create EVENT Form Validation
const eventNameInput = document.getElementById("new-event");
const eventNameAlertmsg = document.getElementById("new-event-name-req");
function validateEventName(){
    const myEventName = eventNameInput.value.trim();
    if(myEventName == ""){
        eventNameAlertmsg.textContent = "Event Name Required";
        return false;
    }
    else if(myEventName.length<10){
        eventNameAlertmsg.textContent = "Minimum 10 characters needed";
        return false;
    }
    else if(myEventName.length>50){
        eventNameAlertmsg.textContent = "Maximum 50 characters allowed";
        return false;
    }
    else{
        eventNameAlertmsg.textContent = "";
        return true;
    }
}

const eventTypeSelection = document.getElementById("event-type");
const eventTypeAlertmsg = document.getElementById("event-type-req");
function validateEventType(){
    // const myEventType = eventTypeSelection.value.trim();
    if(eventTypeSelection.value == ""){
        eventTypeAlertmsg.textContent = "Select any event type";
        return false;
    }
    else{
        eventTypeAlertmsg.textContent = "";
        return true;
    }
}

const eventDescInput = document.getElementById("new-event-description");
const eventDescAlertmsg = document.getElementById("event-description-req");
function validateEventDescription(){
    if(eventDescInput.value.trim() == ""){
        eventDescAlertmsg.textContent = "Event Description Required";
        return false;
    }
    else if(eventDescInput.value.trim().length<30){
        eventDescAlertmsg.textContent = "Minimum 20 characters needed";
        return false;
    }
    else if(eventDescInput.value.trim().length>700){
        eventDescAlertmsg.textContent = "Maximum 500 characters allowed";
        return false;
    }
    else{
        eventDescAlertmsg.textContent = "";
        return true;
    }
}

const eventDateChoose = document.getElementById("event-date");
const eventDateAlertmsg = document.getElementById("event-date-req");
function validateEventDate(){
    const today = new Date();
    const currentYear = today.getFullYear();
    const currentMonth = String(today.getMonth() + 1).padStart(2, `0`);
    const presentDate = String(today.getDate()).padStart(2, `0`);
    const minDate = `${currentYear}-${currentMonth}-${presentDate}`;
    eventDateChoose.min = minDate;
    if (eventDateChoose.value===""){
        eventDateAlertmsg.textContent = "Choose a date here!";
        return false;
    }
    else{
        eventDateAlertmsg.textContent = " ";
        return true;
    }
}

eventNameInput.addEventListener("input",validateEventName);
eventTypeSelection.addEventListener("change",validateEventType);
eventDescInput.addEventListener("input",validateEventDescription);
eventDateChoose.addEventListener("click",validateEventDate);
eventDateChoose.addEventListener("change",validateEventDate);

const eventFile = document.getElementById("file");


const createEventMessage = document.getElementById("createAlertmsg");
const createEventForm = document.getElementById("create-form");
createEventForm.addEventListener("submit", function(e){
    console.log("strting part");
    e.preventDefault();
    debugger
    const isValid =
            validateEventName()&&
            validateEventType()&&
            validateEventDescription()&&
            validateEventDate();

    if (isValid) {
        alert("You have created a event successfully!");
        createEventMessage.textContent = "Registered successfully!";
        createEventMessage.style.color = "green";
        createEventForm.reset();
        closePopup();
        const alertMsgs = document.querySelectorAll("small");
        alertMsgs.forEach(msg => msg.textContent = "");

        // const newEvents =[
        //     {
        //         eventName: document.getElementById("new-event").value, 
        //         eventType: eventTypeSelection.value, 
        //         eventDate: eventDateChoose.value,
        //         eventDescription: eventDescInput.value.trim(), 
        //         eventFile: eventFile
        //     }
        // ];
        // console.log(newEvents);
        // const storedEvents = JSON.parse(localStorage.getItem('newmyClgEvents')) || [];

        // storedEvents.push(newEvents);
        // localStorage.setItem('newmyClgEvents',JSON.stringify(storedEvents));
        // debugger

        // const myClgEvent = document.querySelector(".myclg-content");
        // storedEvents.forEach(myEvents => {
        //     const ownEvents = `
        //         <div class="each-my-events">
        //             <div>
        //             <h3 class="event-name ">${myEvents.eventName}</h3>
        //             <h4>${myEvents.eventType} | ${myEvents.eventDate}</h4>
        //             <p>${myEvents.eventDescription}</p>
        //             </div>
        //         </div>
        //             <div class="imp-buttons ">
        //                 <button class="button ">View Registered students</button>
        //             </div>
        //     `;
        //     myClgEvent.innerHTML += ownEvents;
        // });
        
    } 
    else {
        validateEventName();
        validateEventType();
        validateEventDescription();
        validateEventDate();
        alert("Please, enter the valid and required details");
    }
    
});

let newEvents =[
            {
                eventName: document.getElementById("new-event").value, 
                eventType: eventTypeSelection.value, 
                eventDate: eventDateChoose.value,
                eventDescription: eventDescInput.value.trim(), 
                eventFile: eventFile
            }
        ];
        console.log(newEvents);
        const storedEvents = JSON.parse(localStorage.getItem('newmyClgEvents')) || [];

        storedEvents.push(newEvents);
        localStorage.setItem('newmyClgEvents',JSON.stringify(storedEvents));
        debugger

        const myClgEvent = document.querySelector(".myclg-content");
        storedEvents.forEach(myEvents => {
            const ownEvents = `
                <div class="each-my-events">
                    <div>
                    <h2 class="event-name ">${myEvents.eventName}</h2>
                    <h4>${myEvents.eventType} | ${myEvents.eventDate}</h4>
                    <p>${myEvents.eventDescription}</p>
                    </div>
                    <div class="imp-buttons ">
                        <button class="button" onclick="toViewRegisteredStudents()">View Registered students</button>
                    </div>
                </div>
            `;
            myClgEvent.innerHTML += ownEvents;
        });

function clearEvents() {
    localStorage.removeItem("newmyClgEvents");
    alert("All events cleared!");
}