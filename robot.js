var canvas;
var ctx;
window.onload = init;
function init() {
    canvas=document.getElementById("my-canvas");
    ctx=canvas.getContext("2d");
    ctx.fillStyle="white";
    ctx.fillRect(0,0,canvas.width, canvas.height);
    ctx.beginPath();
    drawArm(270,309,45,127,Math.PI/4);
    drawArm(165,453,42,79,-0.1);
    drawArm(541,313,127,45,Math.PI/4)
    drawArm(623,404,79,42,Math.PI/-3.7);
    drawCircle(271,161,33);
    drawCircle(409,74,33);
    drawCircle(547,157,33);
    drawRectangle(366,232,90,80);
    drawRectangle(312,550,74,150);
    drawRectangle(427,550,74,150);
    drawRectangle(270,77,277,155);
    drawRectangle(272,266,270,305);
    drawRectangle(294,351,121,194);
    drawRectangle(337,286,97,7);
    drawRectangle(337,303,97,7);
    drawRectangle(337,323,97,7);
    drawRectangle(309,377,16,16);
    drawRectangle(309,430,16,16);
    drawRectangle(309,485,16,16);
    drawRectangle(343,377,16,16);
    drawRectangle(343,430,16,16);
    drawRectangle(343,485,16,16);
    drawRectangle(377,377,16,16);
    drawRectangle(377,430,16,16);
    drawRectangle(377,485,16,16);
    drawCircle(488,283,12);
    drawCircle(488,320,12);
    drawCircle(488,356,12);
    drawCircle(488,393,12);
    drawCircle(488,430,12);
    drawCircle(488,466,12);
    drawCircle(488,503,12);
    drawCircle(488,539,12);
    drawCircle(361,119,27);
    drawCircle(461,120,27);
    drawCircle(184,430,28);
    drawCircle(624,430,28);
    drawEyeBall(342,119,17);
    drawEyeBall(444,119,17);
}
function drawRectangle(x,y,w,h){
    ctx.strokeStyle = "black";
    ctx.lineWidth = 5;
    ctx.save();
    ctx.translate(x,y);
    ctx.fillStyle="white";
    ctx.fillRect(0,0,w,h);
    ctx.strokeRect(0,0,w,h);
    ctx.restore();
}
function drawCircle(x,y,r) {
    ctx.strokeStyle = "black";
    ctx.lineWidth = 5;
    ctx.save();
    ctx.translate(x,y);
    ctx.fillStyle = "white"
    ctx.beginPath();
    ctx.arc(0,0,r,0,2*Math.PI);
    ctx.fill();
    ctx.stroke();
    ctx.restore();
}
function drawEyeBall(x,y,r) {
    ctx.lineWidth = 5;
    ctx.save();
    ctx.translate(x,y);
    ctx.fillStyle = "black";
    ctx.beginPath();
    ctx.arc(0,0,r,0,2*Math.PI);
    ctx.fill();
    ctx.restore();
}
function drawArm (x,y,w,h,angle) {
    ctx.strokeStyle = "black";
    ctx.fillStyle = "white";
    ctx.lineWidth = 5;
    ctx.save();
    ctx.translate(x,y);
    ctx.rotate(angle);
    ctx.fillRect(0,0,w,h);
    ctx.strokeRect(0,0,w,h);
    ctx.restore();
}