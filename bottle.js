img = "";

function preload(){
    img = loadImage('bottle.jpg');
}
function setup(){
    canvas = createCanvas(640, 420);
    canvas.center();
}
function draw(){
    image(img, 40, 140, 700, 300);
    fill("#FF0000")
    text("Bottle", 225, 166)
    noFill();
    stroke("#FF0000");
    rect(210, 150, 350, 260);
}