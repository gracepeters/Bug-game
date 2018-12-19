let color1 = 0
let color2 = 0
var character;
var circle;
let lives= 3;
let score =0;

function setup() {
    createCanvas(windowWidth,windowHeight)
    colorMode(HSB, 360, 100, 100)
    //initialize every instance of the ball class
    ballArray = []
    for(i=0; i < 30; i++){
        ballArray.push(new Ball(random(10,50)))
    }
    explosionArray=[]
    character= new Character
    circle=new Circle
    let score= 0;
    textSize(30);
}

function draw() {
    background(220,0,80)
    ballArray.forEach( ball =>{
        ball.display()
        ball.moveBall()
        ball.checkCollision()
    })
    explosionArray.forEach(explosion =>{
        explosion.display()
        explosion.shrink()
    })
    circle.display()
    if(mouseIsPressed){
        console.log("circle should grow")
    circle.growCircle()
    }
    character.display()
    fill(0,0,0)
    text("Score: "+ score, 1060,40)
    text("Lives: "+ lives,1250,40)
    
    if(lives<=0){
        console.log(lives)
        text("GAME OVER", width/2.2,height/2.2)
        ball.Array = []
        button = createButton('Play again');
        button.position(100, 65);
        button.mousePressed();
    }
}

//function mouseClicked(){
 //   ballArray.push(new Ball(random(5,70)))
 //   console.log("ball")
//}
function mouseReleased(){
        circle.diameter= 30;
        //setTimeout(() => 
        explosionArray.push(new Explosion())
}
 


class Ball {
    //constructor that makes the actual object to hold the properties
    //in this case, properties are: x, y, diameter, xVel, yVel
    constructor(diameter) {
        this.diameter = diameter
        if (mouseX <= 0 || mouseY<= 0){
            this.x = random(this.diameter, 1426-this.diameter)
            this.y = random(this.diameter,732-this.diameter)
        }
        else{
            this.x=random(width)
            this.y=random(height)
        }
        this.xVelocity = random(1-5)
        this.yVelocity = random(1-5)
        this.color= random(360)
    }

    //methods to control the changes to the object
    display() {
        fill(this.color, 100, 100);
        ellipse(this.x, this.y, this.diameter)
    }

    moveBall() {
        this.x += this.xVelocity
        this.y += this.yVelocity
        if (this.x+ this.diameter/2 > width || this.x-this.diameter/2 < 0) {
            this.xVelocity *= -1
        }
        if (this.y > height || this.y < 0) {
            this.yVelocity *= -1
        }
    }
    
    checkCollision(){
        if (collideCircleCircle(this.x, this.y, this.diameter,mouseX,mouseY,circle.diameter)){
            console.log("collison detected, shrinking circle")
            circle.diameter= 30;
            lives -=1;
        }
        if(explosionArray.length>0){
            let mre = explosionArray[explosionArray.length-1]
            if(collideCircleCircle(this.x, this.y, this.diameter, mre.x, mre.y, mre.diameter)){
                console.log("explo and circle collide")
                ballArray.splice(ballArray.indexOf(this),1)
                ballArray.push(new Ball(random(10,50)))
                score+=100;
            }
        }
    }
    
    
}
class Character {
    constructor(){
        this.color = color(0,100,0);
        this.x=100;
        this.y=100;
        this.width = 30;
        this.height = 50;
        this.diameter = 60;
        this.velocity=4;
    }
    display(){
        fill(this.color);
        noStroke();
        rect(mouseX-(this.width/2), mouseY-(this.height/2), this.width, this.height)
    }
    moveCharacter(){
        this.x+=this.velocity
        if(this.x>=800){
            this.x=0
        }
    }
}


class Circle{
    constructor(){
        this.color = color(0,100,0);
        this.x=500;
        this.y=500;
        this.width = 79.9;
        this.height =99.9;
        this.diameter = 30;
        this.velocity=4;
    }
    display(){
        fill(this.color);
        ellipse(mouseX,mouseY,this.diameter)
    }
    growCircle(){
        this.diameter+=3;
        this.width +=2;
        this.height += 3;
    }
    
}

class Explosion{
    constructor(){
        this.color= color(0,100,0);
        this.x=mouseX;
        this.y=mouseY;
        this.diameter=circle.diameter*10;
    }
    display(){
        fill(this.color);
        ellipse(this.x,this.y,this.diameter)
    }
    shrink(){
        if(this.diameter>0){
            this.diameter-=10;
        }
        else{
            explosionArray.splice(explosionArray.indexOf(this),1);
        }
    }
}

