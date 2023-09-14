const carouselContainer = document.querySelector(".carousel-container");
const carouselSlides = document.querySelectorAll(".carousel-slide");
const prevButton = document.getElementById("prev-button");
const nextButton = document.getElementById("next-button");

let currentIndex = 0;

function updateCarousel() {
    const translateX = -currentIndex * carouselSlides[0].clientWidth;
    carouselContainer.style.transform = `translateX(${translateX}px)`;
}

prevButton.addEventListener("click", () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateCarousel();
    }
});

nextButton.addEventListener("click", () => {
    if (currentIndex < carouselSlides.length - 1) {
        currentIndex++;
        updateCarousel();
    }
});

// Adicione lógica para loop contínuo do carrossel, se desejar

// Exemplo de loop contínuo:
// function updateCarousel() {
//     if (currentIndex < 0) {
//         currentIndex = carouselSlides.length - 1;
//     } else if (currentIndex >= carouselSlides.length) {
//         currentIndex = 0;
//     }
//     const translateX = -currentIndex * carouselSlides[0].clientWidth;
//     carouselContainer.style.transform = `translateX(${translateX}px)`;
// }

// Defina um intervalo para avançar automaticamente os slides
// setInterval(() => {
//     currentIndex++;
//     updateCarousel();
// }, 5000); // Altere o valor do intervalo conforme desejado
