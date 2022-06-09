$("head").load("templates/head.html");
$("#nav").load("templates/template.html #nav-big, #nav-small", resize);
$("#footer").load("templates/template.html #contact, footer");

window.onresize = resize;

function resize() {
    var navHeight;
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

window.onclick = function(event) {
    if (!event.target.matches('#menu-img')) {
        document.getElementById("menu-dropdown").classList.remove("w3-show");
    }
}