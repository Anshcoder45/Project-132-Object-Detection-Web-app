img = "";

function preload(){
    img = loadImage('ac.jpg');
}
function setup(){
    canvas = createCanvas(640, 420);
    canvas.center();
}
function draw(){
    image(img, 40, 140, 700, 420);
    fill("#FF0000")
    text("A/C", 195, 180)
    noFill();
    stroke("#FF0000");
    rect(190, 170, 350, 110);
}