let ground;
let box;
let bird;
function setup(){
    createCanvas(600,400);
    ground=new Box(0,height-20,width,20);
    box = new Box(300,100,50,20);
    bird = new Bird(100,100,20);
}
function draw(){
    background(0);
    // ellipse(50, 50, 80, 80);
    ground.show();
    box.show();
    bird.show();
}
