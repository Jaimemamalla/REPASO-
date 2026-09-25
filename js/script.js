const burger = document.querySelector(".burger");
const nav = document.querySelector("nav");
const navLinks = document.querySelectorAll(".nav-links a");

function setMenu(open) {
    nav.classList.toggle("open", open);
    burger.setAttribute("aria-expanded", open);
    burger.setAttribute("aria-label", open ? "Cerrar menú" : "Abrir menú");
    document.body.classList.toggle("no-scroll", open);
}

burger.addEventListener("click", () => {
    setMenu(!nav.classList.contains("open"));
});

// CERRAR 1
navLinks.forEach((link) => {
    link.addEventListener("click", () => setMenu(false));
});

// CWERRAR 2
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") setMenu(false);
});

// CERRAR 3
window.matchMedia("(min-width: 769px)").addEventListener("change", (e) => {
    if (e.matches) setMenu(false);
});
