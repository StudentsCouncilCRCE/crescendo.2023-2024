document.addEventListener("DOMContentLoaded", function() {
    document.addEventListener("click", function(event) {
      const card = event.target.closest(".page");
      if (card) {
        const image = card.querySelector(".image");
        const profile = card.querySelector(".profile");
        const name = card.querySelector(".meinname");
        const contact = card.querySelector(".contact");
  
        card.classList.toggle("flip");
        profile.classList.toggle("anima");
        name.classList.toggle("anima");
        contact.classList.toggle("anima");
      }
    });
  
    document.addEventListener("keydown", function(e) {
      const cards = document.querySelectorAll(".page");
      cards.forEach((card) => {
        if (e.keyCode === 39) {
          card.classList.add("flip");
        }
        if (e.keyCode === 37) {
          card.classList.remove("flip");
        }
      });
    });
  });
  