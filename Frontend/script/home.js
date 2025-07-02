fetch("/api/navbar")
    .then(res => res.json())
    .then(data => {
        const menu = document.getElementById("sidemenu");
        menu.innerHTML = "";
        data.forEach(item => {
            const li = document.createElement("li");
            li.innerHTML = `<a href="${item.id}">${item.name}</a>`;
            menu.appendChild(li);
        });
    });
