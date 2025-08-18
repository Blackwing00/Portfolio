const track = document.querySelector(".carousel-track");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const cards = document.querySelectorAll(".skill-card");

let index = 0;
const cardWidth = cards[0].offsetWidth + 20; // width + margin

next.addEventListener("click", () => {
  if (index < cards.length - 3) { // show 3 at a time
    index++;
    track.style.transform = `translateX(${-index * cardWidth}px)`;
  }
});

prev.addEventListener("click", () => {
  if (index > 0) {
    index--;
    track.style.transform = `translateX(${-index * cardWidth}px)`;
  }
});
