// Typing Effect
var typed = new Typed('#wrd', {
  strings: ['Python Developer', 'Django', 'Flask', 'Java Developer', 'Full-stack Engineer'],
  typeSpeed: 100,
  loop: true
});

// Navbar Hamburger Menu
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navLinks.classList.toggle('active');
});

// Popup Functions
function openPopup() {
  document.getElementById('popup').style.display = 'flex';
}
function closePopup() {
  document.getElementById('popup').style.display = 'none';
}
function copyUPI() {
  const upiId = document.getElementById('upi-id').textContent;
  navigator.clipboard.writeText(upiId).then(() => {
    alert('UPI ID copied to clipboard');
  }).catch(() => {
    alert('Failed to copy UPI ID');
  });
}

// Footer: dynamic year + animation
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

// Image Slider
const slides = document.querySelector('.slides');
const images = document.querySelectorAll('.slides img');
let index = 0;
const slideInterval = 2000;

function updateSlidePosition() {
  slides.style.transform = `translateX(-${index * 100}%)`;
}

const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');

if (nextBtn && prevBtn) {
  nextBtn.addEventListener('click', () => {
    index = (index + 1) % images.length;
    updateSlidePosition();
  });
  prevBtn.addEventListener('click', () => {
    index = (index - 1 + images.length) % images.length;
    updateSlidePosition();
  });
}

// Auto Slide
let autoSlideInterval = setInterval(autoSlide, slideInterval);
function autoSlide() {
  index = (index + 1) % images.length;
  updateSlidePosition();
}

// Optional pause on hover
slides.addEventListener('mouseenter', () => clearInterval(autoSlideInterval));
slides.addEventListener('mouseleave', () => {
  autoSlideInterval = setInterval(autoSlide, slideInterval);
});
