function logoutUser() {
  fetch('/api/v4/auth/logout', {
    method: 'GET',
    credentials: 'include'
  })
  
  .then(response => {
    alert("Click ok to Logout");
    if (response.redirected) {
      window.location.href = response.url;     
    } else if (response.ok) {
      window.location.href = '/login'; 
    } else {
      alert("Logout failed");
    }
  })
  .catch(error => {
    console.error("Logout error:", error);
    alert("Logout failed due to server error");
  });
}


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
const currentUserId = localStorage.getItem("userid");
console.log("local:",currentUserId);
fetch(`/api/v2/events/get-other-events?userId=${currentUserId}`)
  .then((res) => res.json())
  .then((data) => {
    if (data.success && Array.isArray(data.data)) {
      const otherEvents = data.data;

      otherEvents.forEach((event) => {
        // console.log(event);
        const logo = event.userId.logofile;

        console.log(logo);
        const otherclgContainer = document.getElementById("otherclg-event");
        const eventHTML = `
            <div class="otherclg-content">
                <div class="event-header">
                    <img class="navLogo" src="/admin_users_logo/${logo}" alt="college-logo">
                    <div>
                        <h4>${event.userId.collegeName}</h4>
                        <h6>${event.userId.location}</h6>
                    </div>
                </div>
                <div>
                    <h3 class="event-name">${event.eventName}</h3>
                    <div class="imp-buttons">
                        <!--description button that calls evedesc with prticular evet details-->
                        <button class="descButton" onclick="otherClgEventDescPopup(\`${event.userId.collegeName}\`, \`${event.eventName}\`, \`${event.eventDate}\`, \`${event.eventDescription}\`)">Description</button>
                        <label for="register-popup" class="regButton" onclick= "registrationFormDynamicDetials(\`${event.userId.collegeName}\`, \`${event.eventName}\`)">Register</label>
                    </div>
                </div>
            </div>
        `;
        otherclgContainer.innerHTML += eventHTML;

      });
    } else {
      console.error("No other events found.");
    }
  })
  .catch((err) => console.error("Error fetching other events:", err));

function closePopup(){
    // to close description popup
    document.querySelector(".desc-popup").style.display = "none";
    // to close register form popup
    document.querySelector(".event-reg-popup").style.display = "none";  
    const form = document.getElementById("reg-form");
    form.reset();
    // to close event create form popup
    document.querySelector("#create-event-popup").style.display = "none";
    const createEventForm = document.getElementById("create-form");
    createEventForm.reset();
    // to close achievements creation form popup
    document.querySelector("#create-achieve-popup").style.display = "none";
    const createAchievementForm = document.getElementById("create-achieve-form");
    createAchievementForm.reset();
    //to close rank holders form popup
    document.querySelector("#create-rankholders-popup").style.display = "none";
    const createRankHoldersForm = document.getElementById("create-rankholders-form");
    createRankHoldersForm.reset();
    // to clear all the alert msg in both forms
    const alertMsgs = document.querySelectorAll("small");
    alertMsgs.forEach(msg => msg.textContent = "");
    // to close view registered students popup
    document.querySelector("#viewRegStudents-popup").style.display = "none";

    const popup = document.querySelector(".image-popup");
    if (popup) popup.remove();

    // document.querySelector(".image-popup").style.display = "none";
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
        debugger
        alert("You have registered for the event successfully!");
        message.textContent = "Registered successfully!";
        message.style.color = "green";
        debugger
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

function openCreateForm(){
    const createEventForm = document.getElementById("create-event-popup");
    createEventForm.style.display = "block";   
}

function openCreateAchieveForm(){
    const createAchieveForm = document.getElementById("create-achieve-popup");
    createAchieveForm.style.display = "block";  
}

function openCreateRankHolderForm(){
    const createRankHolderForm = document.getElementById("create-rankholders-popup");
    createRankHolderForm.style.display = "block";  
}

function toViewRegisteredStudents(){
    const registeredStudents = document.getElementById("viewRegStudents-popup");
    registeredStudents.style.display = "block";
}

function activePage(pageId, clickedId){
    document.querySelectorAll('.section').forEach(section => {
        section.classList.add('hidden-page-content');
    });

    const pageId1 = document.getElementById(pageId);
    pageId1.classList.remove('hidden-page-content');

    document.querySelectorAll('.sidebar-link').forEach(link => {
        link.classList.remove('active');
    });
    // Add active to the clicked link
    if(clickedId){
        clickedId.classList.add('active');
    }
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
        eventDescAlertmsg.textContent = "Minimum 30 characters needed";
        return false;
    }
    else if(eventDescInput.value.trim().length>700){
        eventDescAlertmsg.textContent = "Maximum 700 characters allowed";
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

const createEventBtn = document.getElementById("create-button");

createEventBtn.addEventListener("click", () => {
    resetFormState();           
    createEventForm.reset();     
    openCreateForm();
    const previewContainer = document.getElementById("existing-file-preview");
    previewContainer.style.display = 'none';
});


const createEventMessage = document.getElementById("createAlertmsg");
const createEventForm = document.getElementById("create-form");
createEventForm.addEventListener("submit", async function (e) {
    e.preventDefault();

    const isValid =
        validateEventName() &&
        validateEventType() &&
        validateEventDescription() &&
        validateEventDate();

    if (isValid) {

        const eventId = document.getElementById("edit-event-id").value.trim();
        const isUpdate = eventId !== "";

        const endpoint = isUpdate
            ? `/api/v2/events/update-event/${eventId}`
            : "/api/v2/events/create-event";

        const method = isUpdate ? "PUT" : "POST";

        try {

            const formData = new FormData();
            formData.append("eventName", eventNameInput.value.trim());
            formData.append("eventType", eventTypeSelection.value);
            formData.append("eventDate", eventDateChoose.value);
            formData.append("eventDescription", eventDescInput.value.trim());
            if (eventFile.files.length > 0) {
                formData.append("file", eventFile.files[0]);
            }

            const response = await fetch(endpoint, {
                method,
                headers: {
                    "userid": localStorage.getItem("userid")
                },
                body: formData
            });


            const result = await response.json();

            if (response.ok) {
                alert(isUpdate ? "Event updated successfully!" : "Event created successfully!");
                createEventMessage.textContent = isUpdate ? "Updated Event Successfully!" : "Created Event Successfully!";
                createEventMessage.style.color = "green";
                createEventForm.reset();
                resetFormState();
                // document.getElementById("edit-event-id").value = "";
                setTimeout(() => {
                    closePopup();
                }, 1000);

                if(method === "POST"){
                    const newEvents = result.data;
                    const fileDisplay = newEvents.file
                        ? newEvents.file.endsWith('.pdf')
                            ? `<a href="/event_files/${newEvents.file}" download class="file-link">Download PDF</a>`
                            : `<a href="javascript:void(0)" class="file-link" onclick="showImagePopup('/event_files/${newEvents.file}')">View Image</a>`
                        : '';

                    const myClgEvent = document.querySelector(".myclg-content");
                    const ownEvents = `
                            <div class="each-my-events" data-id="${newEvents._id}">
                                <div>
                                    <h2 class="event-name ">${newEvents.eventName}</h2>
                                    <h3>${newEvents.eventType} | ${newEvents.eventDate}</h3>
                                    <p>${newEvents.eventDescription}</p>
                                    ${fileDisplay}
                                </div>
                                <div class="imp-buttons ">
                                    <button class="button edit-event-btn" onclick="handleEditEvent(this)">Edit</button>
                                    <button class="button delete-event-btn" onclick="attachDeleteEventListeners()" >Delete</button>
                                    <button class="button" onclick="toViewRegisteredStudents()">View Registered students</button>
                                </div>
                            </div>
                                
                        `;
                    myClgEvent.innerHTML += ownEvents; 
                } else if (method === "PUT") {
                    const myClgEvent = document.querySelector(".myclg-content");
                    myClgEvent.innerHTML = "";
                    displayStoredEvents();    
                }
                
            } else {
                alert("Error: " + result.error);
            }
        } catch (err) {
            alert("Failed to create event. Try again later.");
            console.log(err);
        }
    } else {
        validateEventName();
        validateEventType();
        validateEventDescription();
        validateEventDate();
        alert("Please enter valid and required details");
    }
});

function resetFormState() {
    document.getElementById("edit-event-id").value = "";
    document.querySelector(".pop-title").style.display = "block";
    document.getElementById("create-btn").textContent = "Create";
}

// Initial Load My Events
// async function displayStoredEvents() {
//     try {
//         const response = await fetch("/api/v2/events/get-allevents", {
//             method: "GET",
//             headers:{
//                 "Content-Type": "application/json",
//                 "userid" : localStorage.getItem("userid")
//             }
//         });

//         const result = await response.json();
        
//     } catch (err) {
//         console.error("Failed to fetch events", err);
//     }
// }

async function displayStoredEvents() {
    try {
        const response = await fetch("/api/v2/events/get-allevents", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "userid": localStorage.getItem("userid")
            }
        });

        const result = await response.json();
        
        if (response.ok && result.data.length > 0) {
            result.data.forEach(myEvents => {
                renderMyEvents(myEvents);
            });

        } else {
            const myClgEvent = document.querySelector(".myclg-content");
            myClgEvent.innerHTML = "<p class='no-events'>No events available. Add your events now!</p>";
        }
        function filterFuction(){
            const filterEventType = document.getElementById("filter-eveType").value;
            console.log("Selected Filter:", filterEventType);
            const myClgEvent = document.querySelector(".myclg-content");
            myClgEvent.innerHTML = "";

        if (response.ok && Array.isArray(result.data)) {
            const filteredEvents = result.data.filter(event => {
                console.log("Event Type from DB:", event.eventType);
                if (filterEventType === "all") return true;
                return event.eventType === filterEventType;
            });
            console.log(filteredEvents);

            if (filteredEvents.length === 0) {
                myClgEvent.innerHTML = `<p class="no-events">No ${filterEventType} events found. Add your events now!</p>`;
                return;
            }

            filteredEvents.forEach(myEvents => {
                renderMyEvents(myEvents);
            });
        }
        }
        document.getElementById("filter-eveType").addEventListener("change", filterFuction);

    } catch (err) {
        console.error("Failed to fetch events", err);
    }
}

function renderMyEvents(myEvents){

    const myClgEvent = document.querySelector(".myclg-content");
    const fileDisplay = myEvents.file
                    ? myEvents.file.endsWith('.pdf')
                        ? `<a href="/event_files/${myEvents.file}" download class="file-link">Download PDF</a>`
                        : `<a href="javascript:void(0)" class="file-link" onclick="showImagePopup('/event_files/${myEvents.file}')">View Image</a>`
                    : '';

                const ownEvents = `
                    <div class="each-my-events" data-id="${myEvents._id}">
                        <div>
                            <h2 class="event-name ">${myEvents.eventName}</h2>
                            <h3>${myEvents.eventType} | ${myEvents.eventDate}</h3>
                            <p>${myEvents.eventDescription}</p>
                            ${fileDisplay}
                        </div>
                        <div class="imp-buttons">
                            <button class="button edit-event-btn" onclick="handleEditEvent(this)">Edit</button>
                            <button class="button delete-event-btn" onclick="attachDeleteEventListeners()">Delete</button>
                            <button class="button" onclick="toViewRegisteredStudents()">View Registered students</button>
                        </div>
                    </div>
                `;
                myClgEvent.innerHTML += ownEvents;
}

function showImagePopup(src) {
    const existingPopup = document.querySelector('.image-popup');
    if (existingPopup) existingPopup.remove();

    const popup = document.createElement('div');
    popup.className = 'image-popup';

    popup.innerHTML = `
        <div class="popup-overlay" onclick="this.parentElement.remove()"></div>
        <div class="img-popup-content">
            <label for="register-popup" class="close-btn" onclick="closePopup()">&times;</label>
            <img src="${src}" alt="Event File" class="popup-image">
        </div>
    `;

    document.body.appendChild(popup);
}


window.onload = displayStoredEvents();
setTimeout(() => {
    attachDeleteEventListeners();
}, 500);

async function attachDeleteEventListeners() {
    const deleteButtons = document.querySelectorAll(".delete-event-btn");
    deleteButtons.forEach(button => {
        button.addEventListener("click", async function () {
            const eventDiv = this.closest(".each-my-events");
            const eventId = eventDiv.getAttribute("data-id");

            const confirmDelete = confirm("Are you sure you want to delete this event?");
            if (!confirmDelete) return;

            try {
                const response = await fetch(`/api/v2/events/delete-event/${eventId}`, {
                    method: "DELETE"
                });

                const result = await response.json();
                if (response.ok) {
                    alert("Event deleted successfully.");
                    eventDiv.remove();
                } else {
                    alert("Failed to delete event: " + result.error);
                }
            } catch (err) {
                console.error("Delete failed:", err);
                alert("Something went wrong while deleting the event.");
            }
        });
    });
}



async function handleEditEvent(button) {
    const eventDiv = button.closest(".each-my-events");
    const eventId = eventDiv.getAttribute("data-id");

    try {
        const response = await fetch(`/api/v2/events/get-event/${eventId}`, {
            headers: {
                "userid": localStorage.getItem("userid")
            }
        });
        const result = await response.json();

        if (!response.ok) {
            alert("Failed to load event details");
            return;
        }

        const eventData = result.data;
        const eventName = eventDiv.querySelector(".event-name").textContent.trim();
        const eventType = eventDiv.querySelector("h3").textContent.split("|")[0].trim();
        const eventDate = eventDiv.querySelector("h3").textContent.split("|")[1].trim();
        const eventDescription = eventDiv.querySelector("p").textContent.trim();

        document.getElementById("new-event").value = eventName;
        document.getElementById("event-type").value = eventType;
        document.getElementById("event-date").value = eventDate;
        document.getElementById("new-event-description").value = eventDescription;
        document.getElementById("edit-event-id").value = eventData._id;
        
        const previewContainer = document.getElementById("existing-file-preview");
        previewContainer.style.display = 'block';
        if (eventData.file) {
        const ext = eventData.file.split('.').pop().toLowerCase();
        const filePath = `/event_files/${eventData.file}`;
        previewContainer.innerHTML = ext === "pdf"
            ? `<p>Existing File: <a href="${filePath}" target="_blank" download>Download PDF</a></p>`
            : `<p>Existing File: <a href="javascript:void(0)" onclick="showImagePopup('${filePath}')">View Image</a></p>`;
        } else {
        previewContainer.innerHTML = "<p>No existing file uploaded.</p>";
        }

        document.getElementById("create-btn").textContent = "Update";
        document.querySelector(".pop-title").style.display = "none";

        openCreateForm();

    } catch (err) {
        console.error("Failed to fetch event details:", err);
        alert("Something went wrong.");
    }
}



// ACHIEVEMENTS CREATE FORM VALIDATION
const achievementTitleInput = document.getElementById("new-achieve");
const achievementTitleAlertmsg = document.getElementById("new-achieve-req");
function validateAchievementTitle(){
    const myAchievementTitle = achievementTitleInput.value.trim();
    if(myAchievementTitle == ""){
        achievementTitleAlertmsg.textContent = "Achievement Title Required";
        return false;
    }
    else if(myAchievementTitle.length<5){
        achievementTitleAlertmsg.textContent = "Minimum 5 characters needed";
        return false;
    }
    else if(myAchievementTitle.length>50){
        achievementTitleAlertmsg.textContent = "Maximum 50 characters allowed";
        return false;
    }
    else{
        achievementTitleAlertmsg.textContent = "";
        return true;
    }
}

const achievementTypeSelection = document.getElementById("achieve-type");
const achievementTypeAlertmsg = document.getElementById("achieve-type-req");

function validateAchievementType(){
    console.log("hii", achievementTypeSelection.value)
    if(achievementTypeSelection.value == ""){
        achievementTypeAlertmsg.textContent = "Select any achievement type";
        return false;
    }
    else if(achievementTypeSelection.value == "others"){
        const otherTextBox = $(".otherTextBox");
        otherTextBox.removeClass("other-type-hidden");
    }
    else{
        achievementTypeAlertmsg.textContent = "";
        const otherTextBox = $(".otherTextBox");
        otherTextBox.addClass("other-type-hidden");
        return true;
    }
}

const otherdeptInput = document.getElementById("other-achieve-type");
const otherdeptAlertmsg = document.getElementById("other-achieve-type-req");
function validateOtherDept(){
    const otherDept = otherdeptInput.value.trim();
    if(otherDept == ""){
        otherdeptAlertmsg.textContent = "Any Department is Required";
        return false;
    }
    else if(otherDept.length<2){
        otherdeptAlertmsg.textContent = "Minimum 2 characters needed";
        return false;
    }
    else if(otherDept.length>20){
        otherdeptAlertmsg.textContent = "Maximum 20 characters allowed";
        return false;
    }
    else{
        otherdeptAlertmsg.textContent = "";
        return true;
    }
}

const issuedDateChoose = document.getElementById("achieve-issued-date");
const issuedDateAlertmsg = document.getElementById("achieve-issued-date-req");
function validateAchieveIssuedDate(){
    const today = new Date();
    const currentYear = today.getFullYear();
    const currentMonth = String(today.getMonth() + 1).padStart(2, `0`);
    const presentDate = String(today.getDate()).padStart(2, `0`);
    const maxDate = `${currentYear}-${currentMonth}-${presentDate}`;
    issuedDateChoose.max = maxDate;
    if (issuedDateChoose.value===""){
        issuedDateAlertmsg.textContent = "Choose the achievement issued date here!";
        return false;
    }
    else{
        issuedDateAlertmsg.textContent = " ";
        return true;
    }
}

const achieveDescInput = document.getElementById("achieve-description");
const achieveDescAlertmsg = document.getElementById("achieve-description-req");
function validateAchieveDescription(){
    if(achieveDescInput.value.trim() == ""){
        achieveDescAlertmsg.textContent = "Achievement Description Required";
        return false;
    }
    else if(achieveDescInput.value.trim().length<20){
        achieveDescAlertmsg.textContent = "Minimum 20 characters needed";
        return false;
    }
    else if(achieveDescInput.value.trim().length>300){
        achieveDescAlertmsg.textContent = "Maximum 300 characters allowed";
        return false;
    }
    else{
        achieveDescAlertmsg.textContent = "";
        return true;
    }
}

achievementTitleInput.addEventListener("input",validateAchievementTitle);
achievementTypeSelection.addEventListener("change",validateAchievementType);
achieveDescInput.addEventListener("input",validateAchieveDescription);
issuedDateChoose.addEventListener("click",validateAchieveIssuedDate);
issuedDateChoose.addEventListener("change",validateAchieveIssuedDate);
otherdeptInput.addEventListener("input", validateOtherDept);

const createAchieveMessage = document.getElementById("createAchieveAlertmsg");
const createAchieveForm = document.getElementById("create-achieve-form");
createAchieveForm.addEventListener("submit", function(e){
    console.log("strting part");
    e.preventDefault();
    debugger
    let isValid = ''
    if (achievementTypeSelection.value === 'others'){
        isValid += validateAchievementTitle()&&validateAchievementType()&&validateAchieveDescription()&&validateAchieveIssuedDate()&&validateOtherDept();
    } else{
        isValid += validateAchievementTitle()&& validateAchievementType()&& validateAchieveDescription()&& validateAchieveIssuedDate();
    }

    if (isValid) {
        // let achieveFile = document.getElementById("file").files[0];
        let newArchieves = {
            achieveTitle: $("#new-achieve").val().trim(),
            achieveType: $("#achieve-type").val(),
            issuedDate: $("#achieve-issued-date").val(),
            achieveDescription: $("#achieve-description").val().trim(),
            achieveurl: $("#link").val()
        };

        const storedAchieves = JSON.parse(localStorage.getItem('myClgAchievements')) || [];

        storedAchieves.push(newArchieves);
        localStorage.setItem('myClgAchievements',JSON.stringify(storedAchieves));
        // debugger

        alert("You have posted an achievenment successfully!");
        createAchieveMessage.textContent = "Created Achievement Successfully!";
        createAchieveMessage.style.color = "green";
        createAchieveForm.reset();
        setTimeout(() => {
            closePopup();
        }, 1000);

        const myClgAchieves = document.querySelector(".achievementsContent");
        const ownAchieves = `
                <div class="each-achieve">
                        <div class="achieveCardDetils">
                            <img class="achieve-card-image" src="/static/images/achieve2.jpg" alt="image" width="304px" height="180px">
                            <h2>${newArchieves.achieveTitle}</h2>
                            <h3>${newArchieves.achieveType} | ${newArchieves.issuedDate}</h3>
                            <p>${newArchieves.achieveDescription}</p>
                            <a>${newArchieves.achieveurl}</a>
                        </div>
                        <div class="imp-buttons">
                            <button class="button edit-event-btn" onclick="">Edit</button>
                            <button class="button delete-event-btn" onclick="">Delete</button>
                            <button class="viewCertBtn ">View Cerificate/Proof</button>
                        </div>
                    </div>
                    
            `;
        myClgAchieves.innerHTML += ownAchieves;  
    } 
    else {
        validateAchievementTitle();
        validateAchievementType();
        validateAchieveDescription();
        validateAchieveIssuedDate();
        validateOtherDept();
        alert("Please, enter the valid and required details");
    }
    
});

function displayStoredAchievements(){
    const storedAchieves = JSON.parse(localStorage.getItem('myClgAchievements')) || [];    const myClgAchieves = document.querySelector(".achievementsContent");
    storedAchieves.forEach(myachieves => {
        const ownAchieves = `
            <div class="each-achieve">
                <div class="achieveCardDetils">
                    <img class="achieve-card-image" src="/static/images/achieve2.jpg" alt="" width="304px" height="180px">
                    <h2>${myachieves.achieveTitle}</h2>
                    <h3>${myachieves.achieveType} | ${myachieves.issuedDate}</h3>
                    <p>${myachieves.achieveDescription}</p>
                    <a href="${myachieves.achieveurl}">${myachieves.achieveurl}</a>
                </div>
                <div class="imp-buttons">
                    <button class="button edit-event-btn" onclick="">Edit</button>
                    <button class="button delete-event-btn" onclick="">Delete</button>
                    <button class="viewCertBtn">View Cerificate/Proof</button>
                </div>
            </div>     
        `;
    myClgAchieves.innerHTML += ownAchieves;
    });
}
window.onload = displayStoredAchievements();



// RANK HOLDERS CREATE FORM VALIDATION
debugger
const rankTitleInput = $("#new-ranktitle");
const rankTitleAlertmsg = $("#new-ranktitle-req");
function validateRankTitle(){
    const rankTitle = rankTitleInput.val().trim();
    if(rankTitle == ""){
        rankTitleAlertmsg.text("Rank Title Required");
        return false;
    }
    else if(rankTitle.length<10){
        rankTitleAlertmsg.text("Minimum 10 characters needed");
        return false;
    }
    else if(rankTitle.length>100){
        rankTitleAlertmsg.text("Maximum 100 characters allowed");
        return false;
    }
    else{
        rankTitleAlertmsg.text("");
        return true;
    }
}

const rankHolderNameInput = $("#rank-holder-name");
const rankHolderNameAlertmsg = $("#rank-holder-name-req");
function validateRankHolderName(){
    const rankHolderName = rankHolderNameInput.val().trim();
    if(rankHolderName == ""){
        rankHolderNameAlertmsg.text("Rank holder's name Required");
        return false;
    }
    else if(rankHolderName.length<3){
        rankHolderNameAlertmsg.text("Minimum 3 characters needed");
        return false;
    }
    else if(rankHolderName.length>50){
        rankHolderNameAlertmsg.text("Maximum 50 characters allowed");
        return false;
    }
    else{
        rankHolderNameAlertmsg.text("");
        return true;
    }
}

const rankHolderDepartment = $("#department-rk");
const rankHolderDepartmentAlertmsg = $("#department-rk-req");
function validateRHDepartment(){
    if(rankHolderDepartment.val() == ""){
        rankHolderDepartmentAlertmsg.text("Select any department");
        return false;
    }
    else if(rankHolderDepartment.val() == "Others"){
        const otherTextBox = $(".otherTextBox");
        otherTextBox.removeClass("other-type-hidden");
    }
    else{
        rankHolderDepartmentAlertmsg.text("");
        const otherTextBox = $(".otherTextBox");
        otherTextBox.addClass("other-type-hidden");
        return true;
    }
}

const rankHolderPlaceInput = $("#rank-place");
const rankHolderPlaceAlertmsg = $("#rank-place-req");
function validateRankPlace(){
    const rankHolderPlace = rankHolderPlaceInput.val().trim();
    if( rankHolderPlace == ""){
        rankHolderPlaceAlertmsg.text("Rank holder's place is required");
        return false;
    }
    else if(rankHolderPlace.length<3){
        rankHolderPlaceAlertmsg.text("Minimum 3 characters needed");
        return false;
    }
    else if(rankHolderPlace.length>15){
        rankHolderPlaceAlertmsg.text("Maximum 50 characters allowed");
        return false;
    }
    else{
        rankHolderPlaceAlertmsg.text("");
        return true;
    }
}

const cgpaInput = $("#cgpa");
const cgpaInputAlertmsg = $("#cgpa-req");
function validateCGPA(){
        const cgpa = cgpaInput.val().trim();
        if(cgpa==""){
            cgpaInputAlertmsg.text("CGPA is required");
            return false;
        }
        else if(isNaN(cgpa)){
            cgpaInputAlertmsg.text("Kindly, use Numbers");
            return false;
        }
        else{
            cgpaInputAlertmsg.text("");
            return true;
        }
}


rankTitleInput.on("input",validateRankTitle);
rankHolderNameInput.on("input",validateRankHolderName);
rankHolderDepartment.on("change",validateRHDepartment);
rankHolderPlaceInput.on("input",validateRankPlace);
cgpaInput.on("input",validateCGPA);
// $("#new-ranktitle").change(()=>{
//     validateRankTitle();
// })

const addNewHolder = document.querySelector(".addAnotherRankHolder");
addNewHolder.addEventListener("click", function (){
    const newfeilds = document.getElementById("rankHolderDetails");
    newfeilds.innerHTML += `
        <div class="form-group">
                        <label for="rank-holder-name">Rank Holder Name:<span class="required-star">*</span></label>
                        <input type="text" id="rank-holder-name" name="rank-holder-name">
                        <small id="rank-holder-name-req" class="hidden"></small>
                    </div>
                    <div class="form-group">
                        <label for="department-rk">Department:<span class="required-star">*</span></label>
                        <select id="department-rk" name="department-rk">
                            <option value="">Select</option>
                            <option value="Computer Science and Engineering">CSE</option>
                            <option value="Information Technology">IT</option>
                            <option value="Electronics and Communication Engineering">ECE</option>
                            <option value="Electrical and Electronics Engineering">EEE</option>
                            <option value="Civil Engineering">Civil</option>
                            <option value="Mechanical Engineering">Mech</option>
                            <option value="Others">Others</option>
                        </select>
                        <small id="department-rk-req" class="hidden"></small>
                    </div>
                    <div>
                        <div class="form-group otherTextBox other-type-hidden">
                        <label for="other-dept">other:<span class="required-star">*</span></label>
                        <input type="text" id="other-dept" name="other-dept">
                        <small id="other-dept-req" class="hidden"></small>
                    </div>
                    
                    <div class="form-group">
                        <label for="rank-place">Rank Place:<span class="required-star">*</span></label>
                        <input type="text" id="rank-place" name="rank-place">
                        <small id="rank-place-req" class="hidden"></small>
                    </div>
                    
                    <div class="form-group">
                        <label for="cgpa">CGPA:<span class="required-star">*</span></label>
                        <input type="text" id="cgpa" name="cgpa">
                        <small id="cgpa-req" class="hidden"></small>
                    </div>
                    <div class="form-group">
                        <label for="file">Upload Photo:</label>
                        <input type="file" id="photo-file" name="photo-file">
                        <small id="photo-file-req" class="hidden"></small>
                    </div>
    `;
});


const addRankHolderMessage = document.getElementById("createRankHolderAlertmsg");
const addRankHolderForm = document.getElementById("create-rankholders-form");
addRankHolderForm.addEventListener("submit", function(e){
    console.log("strting part");
    e.preventDefault();
    debugger
    const isValid =
            validateRankTitle()&&
            validateRankHolderName()&&
            validateRHDepartment()&&
            validateRankPlace()&&
            validateCGPA();

    if (isValid) {

        // let achieveFile = document.getElementById("file").files[0];
        // let newRankHolders = {
        //     rankTitle: $("#new-ranktitle").val().trim(),
        //     rankHolderName: $("#rank-holder-name").val().trim(),
        //     department: $("#department-rk").val(),
        //     rankPlace: $("#rank-place").val().trim(),
        //     cgpa: $("#cgpa").val().trim()
        // };

        // const storedRankholders = JSON.parse(localStorage.getItem('myClgRankHolders')) || [];

        // storedRankholders.push(newRankHolders);
        // localStorage.setItem('myClgRankHolders',JSON.stringify(storedRankholders));
        // debugger

        alert("You have posted an achievenment successfully!");
        addRankHolderMessage.textContent = "Added Rank Holder(s) Successfully!";
        addRankHolderMessage.style.color = "green";
        addRankHolderForm.reset();
        setTimeout(() => {
            closePopup();
        }, 1000);

    //     const myClgRankholders = document.querySelector(".achievementsContent");
    //     const ownRankHolders = `
    //             <div class="each-achieve">
    //                     <div class="achieveCardDetils">
    //                         <img class="achieve-card-image" src="/images/achieve2.jpg" alt="" width="304px" height="180px">
    //                         <h2>${newArchieves.achieveTitle}</h2>
    //                         <h3>${newArchieves.achieveType} | ${newArchieves.issuedDate}</h3>
    //                         <p>${newArchieves.achieveDescription}</p>
    //                         <a>${newArchieves.achieveurl}</a>
    //                     </div>
    //                     <div class="imp-buttons">
    //                         <button class="viewCertBtn ">View Cerificate/Proof</button>
    //                     </div>
    //                 </div>
                    
    //         `;
    //     myClgRankholders.innerHTML += ownRankHolders;  
    } 
    else {
        validateRankTitle();
        validateRankHolderName();
        validateRHDepartment();
        validateRankPlace();
        validateCGPA();
        alert("Please, enter the valid and required details");
    }
    
});

// function displayStoredRankHolders(){
//     const storedRankholders = JSON.parse(localStorage.getItem('myClgRankHolders')) || [];    const myClgAchieves = document.querySelector(".achievementsContent");
//     storedRankholders.forEach(myrankholders => {
//         const ownRankHolders = `
//             <div class="each-achieve">
//                     <div class="achieveCardDetils">
//                         <img class="achieve-card-image" src="/images/achieve2.jpg" alt="" width="304px" height="180px">
//                         <h2>${myrankholders.achieveTitle}</h2>
//                         <h3>${myrankholders.achieveType} | ${myrankholders.issuedDate}</h3>
//                         <p>${myrankholders.achieveDescription}</p>
//                         <a href="${myrankholders.achieveurl}">${myrankholders.achieveurl}</a>
//                     </div>
//                     <div class="imp-buttons">
//                         <button class="viewCertBtn ">View Cerificate/Proof</button>
//                     </div>
//                 </div>
                
//         `;
//     myClgRankHolders.innerHTML += ownRankHolders;
//     });
// }
// window.onload = displayStoredRankHolders();