var canvas;
var ctx;
window.onload = init;

function init() {
    canvas = document.getElementById("my-canvas");
    ctx = canvas.getContext("2d");
    ctx.fillStyle = "white";
    ctx.fillRect(0,0,canvas.width, canvas.height);
    ctx.lineWidth = 24;
    // blueRing();
    // blackRing();
    // redRing();
    // yellowRing();
    // greenRing();
    // yellowBlue();
    // blueYellow();
    // blackYellow();
    // yellowBlack();
    // greenBlack();
    blackGreen();
    // redGreen();
    // greenRed();
}
function yellowBlue(){
    ctx.beginPath();
    ctx.strokeStyle = "#387FC4";
    ctx.arc(199,222,127,Math.PI/4,5/4*Math.PI);
    ctx.stroke();
    ctx.beginPath();
    ctx.strokeStyle = "#F0B44F";
    ctx.arc(346,350,127,Math.PI/4,5/4*Math.PI);
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
function blueYellow() {
    ctx.beginPath();
    ctx.strokeStyle = "#F0B44F";
    ctx.arc(346,350,127,5/4*Math.PI,Math.PI/4);
    ctx.stroke();
    ctx.beginPath();
    ctx.strokeStyle = "#387FC4";
    ctx.arc(199,222,127,5/4*Math.PI,Math.PI/4);
    ctx.stroke();
} 
function blackYellow() {
    ctx.beginPath();
    ctx.strokeStyle = "#222123";
    ctx.arc(503,222,127,Math.PI/2,3/4*Math.PI);
    ctx.stroke();
    ctx.beginPath();
    ctx.strokeStyle = "#F0B44F";
    ctx.arc(346,350,127,7*Math.PI/4,Math.PI/2);
    ctx.stroke();
}
function yellowBlack() {
    ctx.beginPath();
    ctx.strokeStyle = "#222123";
    ctx.arc(503,222,127,7*Math.PI/4,3*Math.PI/2);
    ctx.stroke();
    ctx.beginPath();
    ctx.strokeStyle = "#F0B44F";
    ctx.arc(346,350,127,3*Math.PI/2,7*Math.PI/4);
    ctx.stroke();
}
function blackGreen() {
    ctx.beginPath();
    ctx.strokeStyle = "#49A35C";
    ctx.arc(650,350,127,);
    ctx.stroke();
    ctx.beginPath();
    ctx.strokeStyle = "#222123";
    ctx.arc(503,222,127,);
    ctx.stroke();
}
function GreenBlack() {
    ctx.beginPath();
    ctx.strokeStyle = "#222123";
    ctx.arc(503,222,127,3*Math.PI/2,2*Math.PI)
    ctx.stroke();
    ctx.beginPath();
    ctx.strokeStyle = "#49A35C";
    ctx.arc(650,350,127,5*Math.PI/4,3*Math.PI/2)
    ctx.stroke();
}
function redGreen() {
    ctx.beginPath();
    ctx.strokeStyle = "#DA4254";
    ctx.arc(805,222,127,5/4*Math.PI,Math.PI/4);
    ctx.stroke();
    ctx.beginPath();
    ctx.strokeStyle = "#49A35C";
    ctx.arc(650,350,127,5/4*Math.PI,Math.PI/4)
    ctx.stroke();
}
function greenRed() {
    ctx.beginPath();
    ctx.strokeStyle = "#49A35C";
    ctx.arc(650,350,127,Math.PI/4,5/4*Math.PI);
    ctx.stroke();
    ctx.beginPath();
    ctx.strokeStyle = "#DA4254";
    ctx.arc(805,222,127,Math.PI/4,5/4*Math.PI);
    ctx.stroke();
}