import jump from "../dist/jump.module.js"

var ski = document.getElementById("btn-skills");
var wo = document.getElementById("btn-work");
var ab = document.getElementById("btn-about")
var hir = document.getElementById("btn-hire")
var arr = document.getElementById("arr")

ski.addEventListener("click", () => {
    nav.classList.remove("menu-btn");
    jump(".skills",{
        duration: 2000,
        offset: -200
    });
})
wo.addEventListener("click", () => {
    nav.classList.remove("menu-btn");
    jump(".porfolio", {
        duration: 3000
    })
})
ab.addEventListener("click", () => {
    nav.classList.remove("menu-btn");
    jump(".about",{
        duration: 4000,
        offset: -100
    })
})
hir.addEventListener("click", () => {
    nav.classList.remove("menu-btn");
    jump(".hire-me",{
        duration: 5000
    })
})

arr.addEventListener("click", () => {
    jump(".featured",{
        duration: 1000
    })
})