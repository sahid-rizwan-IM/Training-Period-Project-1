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
        navLink: "/clg-admin-login.html", 
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
}

module.exports={
    navData,
    navTitle,
    homeContent
};