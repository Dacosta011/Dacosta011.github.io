var logo = document.getElementById("logo");
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

