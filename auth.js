// auth.js

function login(event) {
  event.preventDefault();

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  const user = users.find(u => u.username === username && u.password === password);

  if (user) {
    localStorage.setItem("loggedInUser", JSON.stringify(user));
    window.location.href = "dashboard.html";
  } else {
    alert("Invalid username or password!");
  }
}

function checkAuth() {
  const userData = localStorage.getItem("loggedInUser");
  if (!userData) {
    window.location.href = "login.html";
  } else {
    const user = JSON.parse(userData);
    document.getElementById("welcomeText").textContent = `Welcome, ${user.name}!`;
  }
}

function logout() {
  localStorage.removeItem("loggedInUser");
  window.location.href = "login.html";
}
