var canvas;
var ctx;
window.onload = init;
function init(){
    canvas=document.getElementById("mycanvas");
    ctx=canvas.getContext("2d");
    ctx.lineWidth=5
    ctx.moveTo(496,72);
    ctx.lineTo();
    ctx.lineTo();
    ctx.fill();
}