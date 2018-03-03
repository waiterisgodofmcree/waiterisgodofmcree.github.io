var canvas;
var ctx;
window.onload = init;

function init() {
    canvas = document.getElementById("my-canvas");
    ctx = canvas.getContext("2d");
    // Background
    ctx.fillStyle = "white";
    ctx.fillRect(0,0,canvas.width, canvas.height);
    // Rings 
    ctx.lineWidth = 24;
    blueRing();
    blackRing();
    redRing();
    yellowRing();
    greenRing();
    blueYellow();
}
function blueYellow(){
    ctx.beginPath();
    ctx.strokeStyle = "#F0B44F";
    ctx.arc();
    ctx.stroke();
    ctx.beginPath();
    ctx.strokeStyle = "#387FC4";
    ctx.arc();
    ctx.stroke();
}
function blueRing() {
    ctx.beginPath();
    ctx.strokeStyle = '#387FC4';
    ctx.arc(199,222,127,0,2*Math.PI);
    ctx.stroke();
}
function blackRing() {
    ctx.beginPath();
    ctx.strokeStyle = "#222123";
    ctx.arc(503,222,127,0,2*Math.PI);
    ctx.stroke();
}
function redRing() {
    ctx.beginPath();
    ctx.strokeStyle = "#DA4254";
    ctx.arc(805,222,127,0,2*Math.PI);
    ctx.stroke();
}
function yellowRing() {
    ctx.beginPath();
    ctx.strokeStyle = "#F0B44F"
    ctx.arc(346,350,127,0,2*Math.PI);
    ctx.stroke();
}
function greenRing() {
    ctx.beginPath();
    ctx.strokeStyle = "#49A35C"
    ctx.arc(650,350,127,0,2*Math.PI);
    ctx.stroke();
}