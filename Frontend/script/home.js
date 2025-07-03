window.addEventListener("DOMContentLoaded", () => {
    fetch("http://localhost:3000")
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
});
