// Mobile navigation and a small contact interaction.
// This keeps the page lightweight while adding useful interaction.

const menuToggle = document.querySelector(".menu-toggle");
const siteNav = document.querySelector(".site-nav");
const contactButton = document.querySelector("#contactButton");

menuToggle.addEventListener("click", () => {
    const isOpen = siteNav.classList.toggle("is-open");
    menuToggle.setAttribute("aria-expanded", isOpen);
});

document.querySelectorAll(".site-nav a").forEach((link) => {
    link.addEventListener("click", () => {
        siteNav.classList.remove("is-open");
        menuToggle.setAttribute("aria-expanded", "false");
    });
});

contactButton.addEventListener("click", () => {
    alert("Thanks for reaching out! This is a fictional brand concept for the assignment.");
});
