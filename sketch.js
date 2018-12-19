function setup(){
    createCanvas(900,900)
    colorMode(HSB,360,100,100)
    c=1
}
function draw(){
    //background(220)
    stroke(c,100,100)
    noFill()
    strokeWeight(5)
    ellipse(mouseX,mouseY,random(10-50))
    c+=1
    if(c>360){
        c=0
    }
}