var logo = document.getElementById("logo");
var menuBtn = document.getElementById("menuu");
var nav = document.querySelector("nav");
var clo = document.querySelector(".close");


window.onload = function(e) {
    if(screen.width >= 1050){
        logo.src = "/images/logo web.svg"
    }else{
        logo.src = "/images/logo mobil.svg"
    }
}


window.onresize = function(e){
    if(screen.width >= 1050){
        logo.src = "/images/logo web.svg"
    }else{
        logo.src = "/images/logo mobil.svg"
    }
}

menuBtn.addEventListener("click", () => {
    nav.classList.add("menu-btn");
    nav.classList.add("open");
})

clo.addEventListener("click", () => {
    nav.classList.remove("menu-btn");
})