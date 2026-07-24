const photos = document.querySelectorAll(".photo img");

const lightbox = document.getElementById("lightbox");

const lightboxImg = document.getElementById("lightbox-img");

const closeBtn = document.querySelector(".close");

const prevBtn = document.querySelector(".prev");

const nextBtn = document.querySelector(".next");

let current = 0;

photos.forEach((photo,index)=>{

    photo.addEventListener("click",()=>{

        current=index;

        showImage();

        lightbox.style.display="flex";

    });

});

function showImage(){

    lightboxImg.src=photos[current].src;

}

closeBtn.onclick=()=>{

    lightbox.style.display="none";

}

nextBtn.onclick=()=>{

    current++;

    if(current>=photos.length){

        current=0;

    }

    showImage();

}

prevBtn.onclick=()=>{

    current--;

    if(current<0){

        current=photos.length-1;

    }

    showImage();

}

window.addEventListener("keydown",(e)=>{

    if(lightbox.style.display!="flex") return;

    if(e.key==="ArrowRight") nextBtn.click();

    if(e.key==="ArrowLeft") prevBtn.click();

    if(e.key==="Escape") closeBtn.click();

});