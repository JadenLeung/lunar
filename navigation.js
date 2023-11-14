const menuToggleButton = document.getElementById("nav-toggle");

menuToggleButton.addEventListener("click", () => {
    document.querySelector("nav").classList.toggle("nav-open");
});
