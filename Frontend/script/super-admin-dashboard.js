async function approveUser(userId) {
  const confirmed = confirm("Approve this user?");
  if (!confirmed) return;

  try {
    const res = await fetch(`/api/v4/superadmin/approve-user/${userId}`, {
      method: "PUT"
    });
    const data = await res.json();
    alert(data.message);
    location.reload();
  } catch (err) {
    console.error(err);
    alert("Failed to approve user.");
  }
}

async function deleteUser(userId) {
  const confirmed = confirm("Delete this user?");
  if (!confirmed) return;

  try {
    const res = await fetch(`/api/v4/superadmin/delete-user/${userId}`, {
      method: "DELETE"
    });
    const data = await res.json();
    alert(data.message);
    location.reload();
  } catch (err) {
    console.error(err);
    alert("Failed to delete user.");
  }
}

function editUser(userId) {
  alert(`Want to edit this user?`);
}

function logoutUser() {
  fetch('/api/v4/auth/logout', {
    method: 'GET',
    credentials: 'include' 
  })
  
  .then(response => {
    alert("Click ok to Logout");
    if (response.redirected) {
      window.location.href = response.url; 
    } else if (response.ok) {
      window.location.href = '/login'; 
    } else {
      alert("Logout failed");
    }
  })
  .catch(error => {
    console.error("Logout error:", error);
    alert("Logout failed due to server error");
  });
}
