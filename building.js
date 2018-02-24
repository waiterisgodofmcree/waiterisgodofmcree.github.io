var canvas;
var ctx;
window.onload = init;
function init(){
    canvas=document.getElementById("my-canvas");
    ctx=canvas.getContext("2d");
    ctx.lineWidth = 11;
    bottom1();
    bottom2();
    middle();
    drawTop();
}
function bottom1(){
    ctx.strokeRect(218,977,103,42);
    ctx.beginPath();
    ctx.moveTo(242,982);
    ctx.lineTo(366,762);
    ctx.stroke();
}
function bottom2(){
    ctx.strokeRect(709,977,103,42);
}
function middle(){
    ctx.strokeRect(357,734,666-357,763-732);
}
function drawTop(){
    ctx.strokeRect(436,536,590-437,28);
}