let button = document.querySelector(".hamburger-button");
let nav = document.querySelector("nav");
let up = document.querySelector(".up-arrow");
button.addEventListener("click", function(){
    nav.style.top ="0px";
    nav.style.transition = "0.3s";
})

up.addEventListener("click", function(){
    nav.style.top = "-410px";
})
