const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

// Variables et constantes
const dots = document.querySelectorAll(".dots");
const arrowRight = document.querySelector(".container-banner .arrow_right");
const arrowLeft = document.querySelector("#banner .arrow_left");
const img = document.querySelector("#banner img");
const titreImage = document.querySelector("# p");
let index = 0;
