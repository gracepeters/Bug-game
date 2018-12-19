var frog;
var car;
var frogLeft;
var frogRight;
var frogUp;
var frogDown;

function setup() {
    createCanvas(800, 600)
    frog = new Frog
    car= new Car

}

function draw() {
    background(220)
    frog.moveFrog(frogRight, frogLeft, frogUp, frogDown)
    frog.display()
    car.display()
    car.moveCar()

}

function keyIsPressed() {
    if (keyCode === LEFT_ARROW) {
        console.log("left")
        frogLeft = true;
    }
    else if (keyCode === RIGHT_ARROW) {
        console.log("right")
        frogRight = true;
    }
    else if (keyCode === UP_ARROW) {
        console.log("up")
        frogUp = true;
    }
    else if (keyCode === DOWN_ARROW) {
        console.log("down")
        frogDown = true;
    }
}
class Frog {
    constructor() {
        this.color = color(0, 255, 0);
        this.x = 400;
        this.y = 20;
        this.diameter = 60;
    }
    display() {
        fill(this.color);
        ellipse(this.x, this.y, this.diameter - 30)
    }
    moveFrog(frogLeft, frogRight, frogUp, frogDown) {
        if (keyIsPressed) {
            if (keyCode === LEFT_ARROW) {
                console.log("left")
                this.x -= 10
            }
            else if (keyCode === RIGHT_ARROW) {
                console.log("right")
                this.x += 10
            }
            else if (keyCode === UP_ARROW) {
                console.log("up")
                this.y -= 10
            }
            else if (keyCode === DOWN_ARROW) {
                console.log("down")
                this.y += 10

            }
        }
    }
}

class Car {
    constructor(){
        this.color = color( 255, 0,0);
        this.x=0;
        this.y=300;
        this.width = 100;
        this.height = 20;
        this.diameter = 60;
        this.velocity=4;
    }
    display(){
        fill(this.color);
        rect(this.x, this.y, this.width, this.height)
    }
    moveCar(){
        this.x+=this.velocity
    if(this.x>=800){
        this.x=0
    }
    }
}
