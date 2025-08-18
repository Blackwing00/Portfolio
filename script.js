// Typing Effect
var typed = new Typed('#wrd', {
    strings: ['Python Program', 'Django', 'Flask', 'Java Program', 'Full-stack developer'],
    typeSpeed: 100,
    loop: true
});

// Menubar
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Popup window
function openPopup() {
    document.getElementById('popup').style.display = 'flex';
}

function closePopup() {
    document.getElementById('popup').style.display = 'none';
}

function copyUPI() {
    var upiId = document.getElementById('upi-id').textContent;
    navigator.clipboard.writeText(upiId).then(function () {
        alert('UPI ID copied to clipboard');
    }, function () {
        alert('Failed to copy UPI ID');
    });
}

// Footer animation
document.getElementById("currentYear").textContent = new Date().getFullYear();
document.addEventListener('DOMContentLoaded', function () {
    const footer = document.querySelector('.footer');
    const footerOffsetTop = footer.offsetTop;
    const footerHeight = footer.offsetHeight;

    function checkFooterVisibility() {
        const scrollPosition = window.scrollY + window.innerHeight;
        if (scrollPosition > footerOffsetTop + footerHeight / 4) {
            footer.classList.add('footer-animation');
        }
    }

    window.addEventListener('scroll', checkFooterVisibility);
    checkFooterVisibility();
});

// My Skill Carousel
const slides = document.querySelector('.slides');
const images = document.querySelectorAll('.slides img');

let index = 0;

// Update slide position
function updateSlidePosition() {
    slides.style.transform = `translateX(-${index * 100}%)`;
}

// Next button
document.querySelector('.next').addEventListener('click', () => {
    index = (index + 1) % images.length;
    updateSlidePosition();
});

// Prev button
document.querySelector('.prev').addEventListener('click', () => {
    index = (index - 1 + images.length) % images.length;
    updateSlidePosition();
});

// Auto slide
function autoSlide() {
    index = (index + 1) % images.length;
    updateSlidePosition();
}
setInterval(autoSlide, 4000); // every 4 seconds
