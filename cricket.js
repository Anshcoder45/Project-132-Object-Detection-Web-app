img = "";

function preload(){
    img = loadImage('cricket.jpg');
}
function setup(){
    canvas = createCanvas(640, 420);
    canvas.center();
}
function draw(){
    image(img, 40, 140, 700, 300);
    fill("#FF0000")
    text("Kuldeep Yadav", 225, 166)
    noFill();
    stroke("white");
    rect(210, 150, 180, 260);

    fill("#FF0000")
    text("Yuzi Chahal", 500, 166)
    noFill();
    stroke("white");
    rect(400, 150, 180, 260);
}