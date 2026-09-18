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

// Cerrar al pulsar un enlace
navLinks.forEach((link) => {
    link.addEventListener("click", () => setMenu(false));
});

// Cerrar con Escape
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") setMenu(false);
});

// Cerrar si se agranda la ventana a escritorio
window.matchMedia("(min-width: 769px)").addEventListener("change", (e) => {
    if (e.matches) setMenu(false);
});
