import AOS from "aos";
import "aos/dist/aos.css";
import sushi10 from "/assets/sushi-10.png";
import sushi11 from "/assets/sushi-11.png";
import sushi12 from "/assets/sushi-12.png";


// init AOS animation
AOS.init({
  duration: 1000,
  offset: 100,
});

const cardsData = [
  {
    imageSrc: {sushi12},
    imageAlt: "sushi-12",
    title: "Chezu Sushi",
    rating: "4.9",
    price: "$21.00",
  },
  {
    imageSrc: {sushi11},
    imageAlt: "sushi-11",
    title: "Original Sushi",
    rating: "5.0",
    price: "$19.00",
  },
  {
    imageSrc: {sushi10},
    imageAlt: "sushi-10",
    title: "Ramen Legendo",
    rating: "4.7",
    price: "$16.00",
  },
];

const container = document.querySelector(".popular-food__catalogue");

cardsData.forEach((cardData) => {
  const article = document.createElement("article");
  article.classList.add("popular-food__card");

  const image = document.createElement("img");
  image.classList.add("popular-food__card-image");
  image.src = cardData.imageSrc;
  image.alt = cardData.imageAlt;

  const title = document.createElement("h4");
  title.classList.add("popular-food__card-title");
  title.textContent = cardData.title;

  const details = document.createElement("div");
  details.classList.add("popular-food__card-details", "flex-between");

  const rating = document.createElement("div");
  rating.classList.add("popular-food__card-rating");

  const ratingImage = document.createElement("img");
  ratingImage.src = "assets/star.svg";
  ratingImage.alt = "star";

  const ratingValue = document.createElement("p");
  ratingValue.textContent = cardData.rating;

  rating.appendChild(ratingImage);
  rating.appendChild(ratingValue);

  const price = document.createElement("p");
  price.classList.add("popular-food__card-price");
  price.textContent = cardData.price;

  details.appendChild(rating);
  details.appendChild(price);

  article.appendChild(image);
  article.appendChild(title);
  article.appendChild(details);

  container.appendChild(article);
});

const cards = document.querySelectorAll(".popular-food__card");

cards.forEach((card, index) => {
  card.addEventListener("mouseenter", () => {
    cards.forEach((c) => {
      if (c !== card) {
        c.classList.remove("active-card");
      }
    });
    card.classList.add("active-card");
  });

  if (index === 1) {
    card.classList.add("active-card");
  }
});

$(document).ready(function () {
  // Add smooth scrolling to all links
  $("a").on("click", function (event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        3000,
        function () {
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        }
      );
    } // End if
  });
});
