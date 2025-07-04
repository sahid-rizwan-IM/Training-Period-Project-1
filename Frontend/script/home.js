window.addEventListener("DOMContentLoaded", () => {
    fetch("http://localhost:3000/api/homenavdata")
        .then(res => res.json())
        .then(data => {
            const header = document.getElementById("header");
            if (header){
                // Insert the nav title
                header.innerHTML = `
                    <div>
                        <h2>${data.navTitle}</h2>
                    </div>
                    <nav>
                        <ul id="sidemenu"></ul>
                    </nav>
                `;
            }
            // Populate the nav menu items
            const sidemenu = document.getElementById("sidemenu");
            data.navData.forEach(item => {
                sidemenu.innerHTML +=`
                    <li><a href="${item.navLink}">${item.navName}</a></li>
                `
            });
        })
        .catch(err => console.error("Error loading nav:", err));

    fetch("http://localhost:3000/api/homecontent")
        .then(res => res.json())
        .then(data => {
            const homeContentpage = document.querySelector(".hero-card");
            const item = data;
            if(homeContentpage){ 
                const html =`
                    <div class="info">  
                        <div>
                            <h1> ${item.h1p1Content} <span class="imp">${item.h1SpanContent}</span> ${item.h1p2Content}</h1>
                            <p> ${item.homePtagP1}<br>${item.homePtagP2}</p>
                            <h2 ><span class="imp1">${item.h2Span1}<br>${item.h2Span2}<br>${item.h2Span3}</span>${item.h2Content}</h2>
                        </div>
                        <div class="event-img">
                            <img class="event-img" src="http://localhost:3000/images?name=event1.jpg" alt="image">
                        </div>
                    </div>
                `;
                homeContentpage.innerHTML = html;
                
            }
            // const homeEventImage = document.querySelector(".event-img");
            // if(homeEventImage){
            //     homeEventImage.innerHTML = `
            //         <img class="event-img" src="http://localhost:3000/images?name=event1.jpg" alt="image">
            //     `
            // }
        });
});

