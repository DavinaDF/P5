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

// Fonction au clic sur flèche droite
function clickArrowRight() {
  if (index < 3) {
    allDots[index].classList.remove("dot_selected");
    index++;
  } else if (index == 3) {
    allDots[index].classList.remove("dot_selected");
    index = 0;
  }
  img.src = slides[index].image;
  titreImage.innerHTML = slides[index].tagLine;
  allDots[index].classList.add("dot_selected");
}

// Fonction au clic sur flèche gauche
function clickArrowLeft() {
  console.log(index);
  if (index > 0) {
    allDots[index].classList.remove("dot_selected");
    index--;
  } else if (index == 0) {
    allDots[index].classList.remove("dot_selected");
    index = 3;
  }
  console.log(index);
  img.src = slides[index].image;
  titreImage.innerHTML = slides[index].tagLine;
  allDots[index].classList.add("dot_selected");
}
