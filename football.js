img = "";

function preload(){
    img = loadImage('football.jpg');
}
function setup(){
    canvas = createCanvas(640, 420);
    canvas.center();
}
function draw(){
    image(img, 0, 90, 640, 420);
    fill("#FF0000")
    text("Players", 95, 130)
    noFill();
    stroke("#FF0000");
    rect(80, 110, 420, 300);
}