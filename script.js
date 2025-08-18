const track = document.querySelector(".carousel-track");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const cards = document.querySelectorAll(".skill-card");

let index = 0;

function updateCarousel() {
  track.style.transform = `translateX(${-index * 100}%)`;
}

next.addEventListener("click", () => {
  if (index < cards.length - 1) {
    index++;
    updateCarousel();
  }
});

prev.addEventListener("click", () => {
  if (index > 0) {
    index--;
    updateCarousel();
  }
});
