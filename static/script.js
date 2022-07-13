$("head").load("templates/head.html");
$("#nav").load("templates/template.html #nav-big, #nav-small", resize);
$("#footer").load("templates/template.html #contact, footer");

window.onload = resize;
window.onresize = resize;
//resize();

function resize() {
    var navHeight;
    if (document.getElementById("nav-small") == null || document.getElementById("nav-big") == null) {
        console.log("case 1");
        console.trace();
        return;
    }
    if (document.getElementById("nav-small").clientHeight == 0) {
        navHeight = document.getElementById("nav-big").clientHeight;
        console.log("case 2");
    }else{
        navHeight = document.getElementById("nav-small").clientHeight;
        console.log("case 3");
        console.trace();
    }
    document.getElementById("content").style.marginTop = navHeight+50+"px";
}

function menu() {
    document.getElementById("menu-dropdown").classList.toggle("w3-show");
}

document.onclick = function(event) {
    if (!event.target.matches('#menu-img') && !event.target.matches('#menu-dropdown')) {
        document.getElementById("menu-dropdown").classList.remove("w3-show");
    }
}