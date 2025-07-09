window.addEventListener("DOMContentLoaded", () => {
    fetch("http://localhost:3000/api/v1/home/homenavdata")
        .then(res => res.json())
        .then(data => {
            data = data?.data || null;
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

    fetch("http://localhost:3000/api/v1/home/homecontent")
        .then(res => res.json())
        .then(data => {
            data = data?.data.homeContent || null;
            const homeContentpage = document.querySelector(".hero-card");
            // const item = data;
            if(homeContentpage){ 
                const html =`
                    <div class="info">  
                        <div>
                            <h1> ${data.h1p1Content} <span class="imp">${data.h1SpanContent}</span> ${data.h1p2Content}</h1>
                            <p> ${data.homePtagP1}<br>${data.homePtagP2}</p>
                            <h2 ><span class="imp1">${data.h2Span1}<br>${data.h2Span2}<br>${data.h2Span3}</span>${data.h2Content}</h2>
                        </div>
                        <div class="event-img">
                            <img class="event-img" src="http://localhost:3000/api/v1/home/images?name=event1.jpg" alt="image">
                        </div>
                    </div>
                `;
                homeContentpage.innerHTML = html;
                
            }
        });
        
    fetch("http://localhost:3000/api/v1/home/home-rolescontents")
        .then(res => res.json())
        .then(data => {
            data = data?.data || null;
            const rolesContent = document.getElementById("instructions");
            item = data.roles;
            const rolesHtml = `
                    <h1 class="instruct-title">${item.instructTitle}</h1>
                    <div class="instruct-card">
                        
                    </div>
            `
            rolesContent.innerHTML = rolesHtml;

            const roleCards = document.querySelector(".instruct-card");
            data.cardsName.forEach(roles =>{
                roleCards.innerHTML += `
                    <div class="roles">
                        <h2 class="card-name">${roles.roleCardTitle}</h2>
                        <div class="each-role">
                            <h4>${roles.cardRoles.role1}</h4>
                        </div>
                        <div class="each-role">
                            <h4>${roles.cardRoles.role2}</h4>
                        </div>
                        <div class="each-role">
                            <h4>${roles.cardRoles.role3}</h4>
                        </div>
                        <div class="each-role">
                            <h4>${roles.cardRoles.role4}</h4>
                        </div>
                    </div>
                `;
            });
            
        });
    
    fetch("http://localhost:3000/api/v1/home/homefooter")
        .then(res => res.json())
        .then(data => {
            data = data?.data || null;
            const footerContent = document.getElementById("footer");
            if(footerContent){
                footerContent.innerHTML = `<p>${data.footer}</p>`
            }
        })
});

