// const clgCode = document.getElementById("cld-code");
// // alert(codeRequired);
// if (clgCode === null) {
//     const codeRequired = document.getElementById("clg-code-req");
//     document.body.innerHTML
// }

const otherclgEvents = [{
        logo: "/images/avc-logo.jpg",
        collegeName: "A.V.C College of Engineering",
        location: "Mayiladuthurai, Tamil Nadu",
        eventName: "National Conference"
    },
    {
        logo: "/images/cresent-logo.png",
        collegeName: "Crescent Institute of Science & Technology ",
        location: "Chennai, Tamil Nadu",
        eventName: "Innovative Hackathon'25"
    },
    {
        logo: "/images/avc-logo.jpg",
        collegeName: "A.V.C College of Engineering",
        location: "Mayiladuthurai, Tamil Nadu",
        eventName: "Workshop on AI & ML"
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