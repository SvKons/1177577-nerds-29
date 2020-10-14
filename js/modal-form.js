const popup = document.querySelector(".modal");

const button = document.querySelector(".write");


button.addEventListener("click", function (evt) {
    event.preventDefault();
    popup.classList.remove("modal-close");
    popup.classList.add("modal-show");
    popup.classList.remove("modal-error");
});

const close = popup.querySelector(".modal-close-button");

close.addEventListener("click", function (evt) {
    event.preventDefault();
    popup.classList.remove("modal-error"); 
    popup.classList.add("modal-close");
    setTimeout(function () {  
        popup.classList.remove("modal-show");
         
         }, 600);  
});

const form = popup.querySelector("form");
const fullname = popup.querySelector("[name=fullname]");
const email = popup.querySelector("[name=email]");
const comment = popup.querySelector("[name=comment]");

form.addEventListener("submit", function (evt) {
    if (!name.value || !email.value || !comment.value) {
      event.preventDefault();
      popup.classList.remove("modal-error");
      form.offsetWidth = form.offsetWidth;
      popup.classList.add("modal-error")
  }
});