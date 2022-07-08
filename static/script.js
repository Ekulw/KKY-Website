$("head").load("templates/head.html");
$("#nav").load("templates/template.html #nav-big, #nav-small", resize);
$("#footer").load("templates/template.html #contact, footer");

window.onresize = resize;

function resize() {
    var navHeight;
    if (document.getElementById("nav-small") == null || document.getElementById("nav-big") == null)
        return;
    if (document.getElementById("nav-small").clientHeight == 0) {
        navHeight = document.getElementById("nav-big").clientHeight;
    }else{
        navHeight = document.getElementById("nav-small").clientHeight;
    }
    document.getElementById("content").style.marginTop = navHeight+50+"px";
}

function menu() {
    document.getElementById("menu-dropdown").classList.toggle("w3-show");
}

//$("body").on("click", )
document.onclick = function(event) {
    if (!event.target.matches('#menu-img') && !event.target.matches('#menu-dropdown')) {
        document.getElementById("menu-dropdown").classList.remove("w3-show");
    }
}