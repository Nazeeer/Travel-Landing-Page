const images = document.querySelectorAll(".image");
const enlargedView = document.querySelector(".enlarged");
const enlargedImage = enlargedView.querySelector("img");
const closeButton = enlargedView.querySelector(".close-button");

images.forEach((image) => {
    image.addEventListener("click", () => {
        const imgSrc = image.querySelector("img").src;
        enlargedImage.src = imgSrc;
        enlargedView.style.display = "flex";
    });
});

document.addEventListener("click", (event) => {
    if (event.target === enlargedView || event.target === closeButton) {
        enlargedView.style.display = "none";
    }
});

document.addEventListener("DOMContentLoaded", () => {
    enlargedView.style.display = "none";
});
