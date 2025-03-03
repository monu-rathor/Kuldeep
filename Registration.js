document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("Register-form")
    ?.addEventListener("submit", register);
});

function register(event) {
  event.preventDefault();

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  if (!username || !password) {
    alert("eneter username and password both");
    return;
  }

  const userArr = JSON.parse(localStorage.getItem("users")) || [];

  if (userArr.some((user) => user.username === username)) {
    alert(`${username} already exist`);
    return;
  }

  userArr.push({
    username: username,
    password: password,
  });

  localStorage.setItem("users", JSON.stringify(userArr));
  alert(`${username} registered successfully`);
  return;
}
