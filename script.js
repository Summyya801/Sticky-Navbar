// ==============================
// SELECT ELEMENTS
// ==============================

const navbar = document.getElementById("navbar");
const navLinks = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll("section");
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navLinks");
const scrollProgress = document.getElementById("scrollProgress");


// ==============================
// MOBILE HAMBURGER MENU
// ==============================

menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("open");

    if (navMenu.classList.contains("open")) {
        menuToggle.textContent = "✕";
    } else {
        menuToggle.textContent = "☰";
    }
});


// ==============================
// CLOSE MOBILE MENU
// AFTER CLICKING A LINK
// ==============================

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("open");

        menuToggle.textContent = "☰";

    });

});


// ==============================
// ACTIVE NAVIGATION LINK
// ==============================

function updateActiveLink() {

    let currentSection = "";

    const scrollPosition = window.scrollY;

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;

        if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionTop + sectionHeight
        ) {
            currentSection = section.getAttribute("id");
        }

    });


    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === `#${currentSection}`) {
            link.classList.add("active");
        }

    });

}


// ==============================
// NAVBAR STYLE ON SCROLL
// ==============================

function updateNavbar() {

    if (window.scrollY > 50) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

}


// ==============================
// SCROLL PROGRESS INDICATOR
// ==============================

function updateScrollProgress() {

    const scrollTop = window.scrollY;

    const documentHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const scrollPercentage =
        (scrollTop / documentHeight) * 100;

    scrollProgress.style.width = `${scrollPercentage}%`;

}


// ==============================
// SCROLL EVENT
// ==============================

window.addEventListener("scroll", () => {

    updateActiveLink();

    updateNavbar();

    updateScrollProgress();

});


// ==============================
// RUN ON PAGE LOAD
// ==============================

updateActiveLink();

updateNavbar();

updateScrollProgress();