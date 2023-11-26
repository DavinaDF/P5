// Création d'un tableau contenant les 4 images de notre carrousel
const slides = [
  {
    image: "../assets/images/slideshow/slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "../assets/images/slideshow/slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "../assets/images/slideshow/slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "../assets/images/slideshow/slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

// Variables et Constantes
const dots = document.querySelector(".dots");
const arrowRight = document.querySelector(".container-banner .arrow_right");
const arrowLeft = document.querySelector(".container-banner .arrow_left");
const img = document.querySelector(".container-banner img");
const titreImage = document.querySelector(".container-banner p");
let index = 0;

// Fonction création et affichage des points
function bulletPoints() {
  for (let i = 0; i < slides.length; i++) {
    const dot = document.createElement("div");
    dot.classList.add("dot");
    dots.appendChild(dot);

    if (i == index) {
      dot.classList.add("dot_selected");
    }
  }
}
bulletPoints();

const allDots = document.querySelectorAll(".dots .dot");

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
  if (index > 0) {
    allDots[index].classList.remove("dot_selected");
    index--;
  } else if (index == 0) {
    allDots[index].classList.remove("dot_selected");
    index = 3;
  }
  img.src = slides[index].image;
  titreImage.innerHTML = slides[index].tagLine;
  allDots[index].classList.add("dot_selected");
}

arrowRight.onclick = clickArrowRight;
arrowLeft.onclick = clickArrowLeft;

// arrowRight.addEventListener("click", clickArrowRight);
// arrowLeft.addEventListener("click", clickArrowLeft);
