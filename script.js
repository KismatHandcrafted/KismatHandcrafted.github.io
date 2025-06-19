
let promoMessages = [
  "Free shipping on orders above $50",
  "Thank you for supporting our small business!",
  "$10 shipping or FREE over $150 in Canada"
];
let promoIndex = 0;
setInterval(() => {
  promoIndex = (promoIndex + 1) % promoMessages.length;
  document.getElementById("promo-text").textContent = promoMessages[promoIndex];
}, 5000);

let slideIndex = 0;
function showSlides() {
  let slides = document.getElementsByClassName("slides");
  for (let s of slides) s.style.display = "none";
  slideIndex = (slideIndex + 1) % slides.length;
  slides[slideIndex].style.display = "block";
}
setInterval(showSlides, 5000);
showSlides();
