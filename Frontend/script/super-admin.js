document.getElementById("loginForm").addEventListener("submit", async function (e) {
  e.preventDefault();
  const email = document.getElementById("super-admin-email").value.trim();
  const passcode = document.getElementById("super-admin-pass").value.trim();

  try {
    const res = await fetch("http://localhost:3000/superadmin/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email, passcode })
    });

    const data = await res.json();
    if (res.ok) {
      window.location.href = data.redirectUrl;
    } else {
      alert(data.message);
    }
  } catch (err) {
    alert("Login failed. Try again.");
  }
});
