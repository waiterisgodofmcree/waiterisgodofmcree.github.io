var canvas;
var ctx;
window.onload = init;
function init() {
    canvas = document.getElementById("my-canvas")
    ctx = canvas.getContext("2d");
    ctx.fillRect(80,0,60,10);
    ctx.fillRect(70,10,10,10);
    ctx.fillRect(60,20,10,20);
    ctx.fillRect(50,40,10,30);
    ctx.fillRect(60,70,10,20);
    ctx.fillRect(50,80,10,10);
    ctx.fillRect(70,90,10,10);
    ctx.fillRect(30,90,20,10);
    ctx.fillRect(80,100,10,10);
    ctx.fillRect(20,100,10,20);
    ctx.fillRect(160,30,10,70);
    ctx.fillRect(140,10,10,10);
    ctx.fillRect(150,20,10,10);
    ctx.fillRect(190,120,10,40);
    ctx.fillRect(10,120,10,40);
    ctx.fillRect(90,110,50,10);
    ctx.fillRect(140,100,10,10);
    ctx.fillRect(150,90,10,10);
    ctx.fillRect(170,90,10,10);
    ctx.fillRect(180,100,10,20);
    ctx.fillRect(160,160,30,10);
    ctx.fillRect(150,130,10,30);
    ctx.fillRect(160,130,10,10);
    ctx.fillRect(140,120,10,50);
    ctx.fillRect(150,170,10,10);
    ctx.fillRect(160,180,10,20);
    ctx.fillRect(170,190,10,10);
    ctx.fillRect();
    ctx.fillRect();
    ctx.fillRect();
    ctx.fillStyle="red";
    ctx.fillRect(100,60,60,10);

}