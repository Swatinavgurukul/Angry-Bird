let ground;
const boxes = [];
let bird;
function setup(){
    createCanvas(600,400);
    // console.log(matter);
    ground=new Box(0,height-20,width,20);
    // box = new Box(450,300,50,70);
    for (let i = 0; i < 3; i++) {
        boxes[i] = new Box(450, 300 - i * 75, 84, 100);
      }
    bird = new Bird(40,350,40);
}
function draw(){
    background(0);
    // ellipse(50, 50, 80, 80);
    ground.show();
    for (let box of boxes){
        box.show();

    }
    bird.show();
}
