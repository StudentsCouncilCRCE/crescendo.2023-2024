document.addEventListener("DOMContentLoaded", function () {
  document.addEventListener("click", function (event) {
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

  document.addEventListener("keydown", function (e) {
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

window.addEventListener("load", function () {
  var iframeOverlay = document.getElementById("iframe-overlay");
  var applyButton = document.querySelector(".apply-button");
  var isIframeLoaded = false;

  // Function to check if the apply button is converted to an iframe
  function checkIframeConversion() {
    var iframes = document.querySelectorAll("iframe");
    if (iframes.length > 0) {
      isIframeLoaded = true;
      iframeOverlay.style.display = "block";
    }
  }

  // Check if the apply button is converted to an iframe after a delay
  setTimeout(checkIframeConversion, 2000); // Adjust as needed

  // Hide the overlay if the iframe is loaded
  if (isIframeLoaded) {
    setTimeout(function () {
      iframeOverlay.style.display = "none";
    }, 3000); // Hides overlay after 3 seconds (adjust as needed)
  }
});
