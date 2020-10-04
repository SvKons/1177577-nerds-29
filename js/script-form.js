var slide = document.querySelector(".slide-wrap");

var slidebuttonone = slide.querySelector(".slide-button-one");
var slidebuttontwo = slide.querySelector(".slide-button-two");
var slidebuttonthree = slide.querySelector(".slide-button-three");

var slideone = slide.querySelector(".slide-one");
var slidetwo = slide.querySelector(".slide-two");
var slidethree = slide.querySelector(".slide-three");

slidebuttonone.addEventListener("click", function (evt) {
    
    evt.preventDefault();
    slideone.classList.toggle("visually-hidden");
    slidebuttonone.classList.add("slide-button-active");
    slidetwo.classList.add("visually-hidden");
    slidebuttontwo.classList.remove("slide-button-active");
    slidethree.classList.add("visually-hidden");
    slidebuttonthree.classList.remove("slide-button-active");
});

slidebuttontwo.addEventListener("click", function (evt) {
    
    evt.preventDefault();
    slideone.classList.add("visually-hidden");
    slidebuttonone.classList.remove("slide-button-active");
    slidetwo.classList.toggle("visually-hidden");
    slidebuttontwo.classList.add("slide-button-active");
    slidethree.classList.add("visually-hidden");
    slidebuttonthree.classList.remove("slide-button-active");
});

slidebuttonthree.addEventListener("click", function (evt) {
    
    evt.preventDefault();
    slideone.classList.add("visually-hidden");
    slidebuttonone.classList.remove("slide-button-active");
    slidetwo.classList.add("visually-hidden");
    slidebuttontwo.classList.remove("slide-button-active");
    slidethree.classList.toggle("visually-hidden");
    slidebuttonthree.classList.add("slide-button-active");
});