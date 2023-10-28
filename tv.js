img = "";

function preload(){
    img = loadImage('tv.jpg');
}
function setup(){
    canvas = createCanvas(640, 420);
    canvas.center();
}
function draw(){
    image(img, 40, 140, 700, 420);
    fill("#FF0000")
    text("TV", 115, 200)
    noFill();
    stroke("#FF0000");
    rect(110, 190, 330, 230);
}