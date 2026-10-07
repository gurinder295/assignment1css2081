// Quiet Palace JavaScript

const bookCards = document.querySelectorAll(".book-card");

bookCards.forEach(function(card) {
    card.addEventListener("click", function() {
        const category = card.querySelector("h3").textContent;

        alert("Explore our " + category + " collection at Quiet Palace!");
    });
});

const visitButton = document.querySelector(".light-button");

visitButton.addEventListener("click", function() {
    console.log("Thank you for visiting Quiet Palace!");
});
