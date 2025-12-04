// 1. Inject the Custom Right-Click Menu HTML
document.body.insertAdjacentHTML("beforeend", `
<div id="custom-menu" class="custom-menu">
    <div class="menu-item" onclick="location.href='index.html'">🏠 Home</div>
    <div class="menu-item" onclick="location.href='dashboard.html'">📄 Dashboard</div>
    <div class="menu-item" onclick="location.href='login.html'">🔐 Login</div>
    <div class="menu-divider"></div>
    <div class="menu-item danger" onclick="alert('No action assigned yet!')">⚠ Something</div>
</div>
`);

// 2. Menu Functionality
const menu = document.getElementById("custom-menu");

// Disable default browser right-click menu
document.addEventListener("contextmenu", (event) => {
    event.preventDefault();
    
    // Position menu at cursor location
    menu.style.top = event.pageY + "px";
    menu.style.left = event.pageX + "px";

    menu.style.display = "block";
    menu.style.opacity = "1";
});

// Clicking anywhere hides the custom menu
document.addEventListener("click", () => {
    menu.style.display = "none";
});

// Pressing ESC hides the menu
document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        menu.style.display = "none";
    }
});
