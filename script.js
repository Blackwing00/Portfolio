// =====================
// Typing Animation
// =====================
var typed = new Typed("#wrd", {
    strings: ["Python", "Django", "Flask", "Web Development"],
    typeSpeed: 80,
    backSpeed: 50,
    backDelay: 1500,
    loop: true
});

// =====================
// Mobile Menu Toggle
// =====================
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("open");
    hamburger.classList.toggle("toggle");
});

// =====================
// Skills Carousel
// =====================
const slides = document.querySelectorAll(".slides img");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let index = 0;

// Show the first skill initially
function showSlide(i) {
    slides.forEach((slide, idx) => {
        slide.style.display = (idx === i) ? "block" : "none";
    });
}
showSlide(index);

// Next button
nextBtn.addEventListener("click", () => {
    index = (index + 1) % slides.length;
    showSlide(index);
});

// Previous button
prevBtn.addEventListener("click", () => {
    index = (index - 1 + slides.length) % slides.length;
    showSlide(index);
});

// =====================
// Smooth Scroll Effect
// =====================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

// =====================
// Optional: Fade-in effect on scroll
// =====================
const faders = document.querySelectorAll(".fade-in");

const appearOptions = {
    threshold: 0.2,
    rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver(function (entries, observer) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add("appear");
            observer.unobserve(entry.target);
        }
    });
}, appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});
