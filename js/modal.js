
var popup=document.querySelector(".modal"),button=document.querySelector(".write");button.addEventListener("click",function(e){event.preventDefault(),popup.classList.remove("modal-close"),popup.classList.add("modal-show"),popup.classList.remove("modal-error")});var close=popup.querySelector(".modal-close-button");close.addEventListener("click",function(e){event.preventDefault(),popup.classList.remove("modal-error"),popup.classList.add("modal-close"),setTimeout(function(){popup.classList.remove("modal-show")},600)});var form=popup.querySelector("form"),fullname=popup.querySelector("[name=fullname]"),email=popup.querySelector("[name=email]"),comment=popup.querySelector("[name=comment]");form.addEventListener("submit",function(e){name.value&&email.value&&comment.value||(event.preventDefault(),popup.classList.remove("modal-error"),form.offsetWidth=form.offsetWidth,popup.classList.add("modal-error"))});