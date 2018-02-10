var canvas;
var ctx;
window.onload = init;
function init(){
    canvas=document.getElementById("mycanvas");
    ctx=canvas.getContext("2d");
    ctx.fillStyle="white";
    ctx.fillRect(0,0,canvas.width, canvas.height);
    ctx.beginPath();
    ctx.fillStyle="black";
    
    ctx.moveTo(400,10);
    ctx.lineTo(500,50);
    ctx.lineTo(100,70);
    ctx.fill();
}