document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("form-login")?.addEventListener("submit", login);
});

function login(event) {
  event.preventDefault();
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  console.log(username, password);

  if (!username || !password) {
    alert("Enter user name and password ");
  }

  console.log(username, password);

  const userArr = JSON.parse(localStorage.getItem("users")) || [];

  if (
    userArr.some(
      (user) => user.username == username && user.password == password
    )
  ) {
    alert(`${username} is logged in successfully`);
    window.location.href = "./UserDashboard.html";
    return;
  }
  alert("Invalid User");
}
