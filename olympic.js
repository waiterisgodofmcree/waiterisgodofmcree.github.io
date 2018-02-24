var canvas;
var ctx;
window.onload = init;

function init() {
    canvas = document.getElementById("");
    ctx = canvas.getContext("2d");
    blueRing();
}
function blueRing() {
    ctx.fillRect(0,0,100,100);
}