var canvas;
var ctx;
var positionX = 0;
window.onload = init;
function init() {
    canvas = document.getElementById("mycanvas");
    ctx = canvas.getContext("2d");
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "black";
    startAnimation();
    animationLoop();
}
function startAnimation() {
    requstID = requestAnimationFrame(animationLoop)
}
function animationLoop(timeStamp) {
    requstID = requestAnimationFrame(animationLoop)
}
}