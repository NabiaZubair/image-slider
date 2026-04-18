
let images = document.querySelectorAll(".image img");
let currentSlide = document.querySelector(".currentSlide");
let forward = document.querySelector(".forward");
let back = document.querySelector(".back");
let dots=document.querySelectorAll(".dot");

let index = 0;
currentSlide.src = images[index].src;
update();


function update(){
   dots.forEach((dot)=> dot.classList.remove("active-dot"));
   currentSlide.src = images[index].src;
    dots[index].classList.add("active-dot");
   }

function forwardImage() {
    index++;
    if (index >= images.length) {
        index = 0;
    }
    currentSlide.src = images[index].src;
    update();
}

function imageBack() {
    index--;
    if (index<= 0) {
        index = images.length - 1;
    }
    currentSlide.src = images[index].src;
    update();
}

forward.addEventListener("click", () => {
    forwardImage();
});

back.addEventListener("click", () => {
    imageBack();
});

dots.forEach((dot,i)=>{
dot.addEventListener("click",()=>{
    index=i;
    update();
});
});