// fetch("http://localhost:3000")
//     .then((res) => res.json())
//     .then((data) => {
//         const navList = document.getElementById("header");
//         navList.innerHTML =`
//             <div>
//                 <h2>${data.navTitle}</h2>
//             </div>
//         `;
//         data.forEach(item =>{
            
//         if(navList){
//             navList.innerHTML += `
//                 <nav>
//                     <ul id="sidemenu">
//                         <li><a href="${item.navData.navLink}">${item.navData.navName}</a></li>
//                     </ul>
//                 </nav>
//             `;
//         }
//         })
//     });

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
                // const li = document.createElement("li");
                // const a = document.createElement("a");
                // a.href = item.id;
                // a.textContent = item.name;
                // li.appendChild(a);
                // sidemenu.appendChild(li);
                sidemenu.innerHTML +=`
                    <li><a href="${item.navLink}">${item.navName}</a></li>
                `
            });
        })
        .catch(err => console.error("Error loading nav:", err));
});
