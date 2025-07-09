const navTitle = "Multi-College Event Platform"
const navData = [
    { 
        navLink: "#main-container", 
        navName: "Home" 
    },
    { 
        navLink: "#instructions", 
        navName: "Instructions" 
    },
    { 
        navLink: "/templates/clg-admin-login.html", 
        navName: "College Admin" 
    },
    { 
        navLink: "#", 
        navName: "Student" 
    },
    { 
        navLink: "#", 
        navName: "View other College" 
    }
];

const homeContent = {
    h1p1Content : "\"A unified platform to",
    h1SpanContent : "organize and explore college events",
    h1p2Content : "across institutions\"",
    homePtagP1 : "Welcome! A multi-college event sharing platform designed to bring together colleges, students, and events under one digital roof.",
    homePtagP2 : "Whether you're a college administrator looking to host inter or intra-college events, or a student eager to participate in exciting fests, this platform is built for you.",
    h2Span1 : "Unite.",
    h2Span2 : "Celebrate.",
    h2Span3 : "Compete.",
    h2Content : "— across campuses"
};

const roles = {
    instructTitle : "Important Roles"
};

const cardsName = [
    {
        roleCardTitle : "COLLEGE ADMIN",
        cardRoles :
            {
            role1 : "Register and login",
            role2 : "Post inter and intra college events",
            role3 : "View other college events and profiles",
            role4 : "Enhance your college profile",
            role5 : "Approve student registrations"
            }
    },
    {
        roleCardTitle: "STUDENTS",
        cardRoles : 
        {
            role1 : "Register and login",
            role2 : "View intra & inter college event",
            role3 : "Participate in events and track for updates",
            role4 : "View other college profile"
        }
    }
    
];
 const images = {
    imageSource : "/static/images/event1.jpg",
    imageAlt : "Event Image"
 }

const footer = "PROJECT ON TRAINING PERIOD | INNOVATION MINDS © 2025";

module.exports={
    navData, navTitle, homeContent, roles, cardsName, footer, images
};