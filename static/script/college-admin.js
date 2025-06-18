//Other college event content box
const otherclgEvents = [{
        logo: "/images/avc-logo.jpg",
        collegeName: "A.V.C. College of Engineering",
        location: "Mayiladuthurai, Tamil Nadu",
        eventName: "National Conference",
        date: "25th june 2025"
    },
    {
        logo: "/images/cresent-logo.png",
        collegeName: "Crescent Institute of Science & Technology ",
        location: "Chennai, Tamil Nadu",
        eventName: "Innovative Hackathon'25",
        date: "20th june 2025"
    },
    {
        logo: "/images/avc-logo.jpg",
        collegeName: "A.V.C. College of Engineering",
        location: "Mayiladuthurai, Tamil Nadu",
        eventName: "Workshop on AI & ML",
        date: "20th june 2025"
    },
    {
        logo: "/images/as-salam-logo.jpg",
        collegeName: "AS-SALAM College of Engineering and Technology",
        location: "Aduthurai, Tamil Nadu",
        eventName: "InfoTech Paper Presentatin'25",
        date: "7th july 2025"
    }
]

const otherclgContainer = document.querySelector("#otherclg-event");

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
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. This is the full event description, with all necessary details, rules, dates, and contacts for the event.</p>
            </div>
    `;
    Description.innerHTML += eventDesc;
})