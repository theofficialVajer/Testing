const dot = document.getElementById("cursor-dot");

document.addEventListener("mousemove", (e) => {
    dot.style.left = e.clientX + "px";
    dot.style.top = e.clientY + "px";

    const element = document.elementFromPoint(e.clientX, e.clientY);
    if (!element) return;

    // Hovering a link → GREEN
    if (element.closest("a")) {
        dot.style.background = "lime";
        dot.style.boxShadow = "0 0 8px rgba(0, 255, 0, 0.9)";
    }

    // Hovering text-select areas → BLUE
    else if (
        window.getComputedStyle(element).cursor === "text" ||
        element.tagName === "INPUT" ||
        element.tagName === "TEXTAREA" ||
        element.isContentEditable
    ) {
        dot.style.background = "dodgerblue";
        dot.style.boxShadow = "0 0 8px rgba(30, 144, 255, 0.9)";
    }

    // Default → ORANGE
    else {
        dot.style.background = "orange";
        dot.style.boxShadow = "0 0 8px rgba(255, 165, 0, 0.8)";
    }
});
