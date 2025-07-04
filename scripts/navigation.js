const navToggle = document.querySelector(".toggle-nav");
const navigationPanel = document.querySelector(".side-panel");
const panelCloser = document.querySelector(".close-panel");

navToggle.addEventListener("click", function() {
    navigationPanel.style.transform = "translateX(0)";
});

panelCloser.addEventListener("click", function() {
    navigationPanel.style.transform = "translateX(-100%)";
});