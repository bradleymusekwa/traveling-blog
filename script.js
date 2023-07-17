let images = Array.from(document.getElementsByClassName("imgCarousel"));

let mainPhoto = document.getElementById("mainPhoto");
let mainName = mainPhoto.getAttribute("name");

images.forEach(function (images){
    images.addEventListener("click", updateImage);
});

function updateImage(event) {
    let image = event.target; 

    mainPhoto.src = imagesrc;
}