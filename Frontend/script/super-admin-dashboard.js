async function approveUser(userId) {
  const confirmed = confirm("Approve this user?");
  if (!confirmed) return;

  try {
    const res = await fetch(`/superadmin/approve-user/${userId}`, {
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
    const res = await fetch(`/superadmin/delete-user/${userId}`, {
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
