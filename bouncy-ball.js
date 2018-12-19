let color1 = 0
let color2 = 0

function setup() {
    //Canvas
    canvasW = 800
    canvasH = 600
    createCanvas(canvasW, canvasH)
    //position first ball
    x = random(0, canvasW - 100)
    y = random(0, canvasH - 100)


    g = random(0, canvasW - 100)
    z = random(0, canvasH - 100)

    //velocity first ball
    xVelocity = floor(random() + .5) * 2 - 1
    yVelocity = 3

    gVelocity = floor(random() + .5) * 2 - 1
    zVelocity = 3


    ballRadius = 25
    colorMode(HSB, 360, 100, 100)

    changeColor()

}

function draw() {
    background(0, 0, 0)
    fill(color1, 100, 100);
    ellipse(x, y, ballRadius * 2, ballRadius * 2)
    x += xVelocity
    y += yVelocity

    if (x + ballRadius >= canvasW || x <= ballRadius) {
        xVelocity *= -1
        color1 = changeColor(color1)
    }

    if (y + ballRadius >= canvasH || y <= ballRadius) {
        yVelocity *= -1
        color1 = changeColor(color1)
    }
    fill(color2, 100, 100);
    ellipse(g, z, ballRadius * 2, ballRadius * 2)
    g += gVelocity
    z += zVelocity

    if (g + ballRadius >= canvasW || g <= ballRadius) {
        gVelocity *= -1
        color2 = changeColor(color2)
    }

    if (z + ballRadius >= canvasH || z <= ballRadius) {
        zVelocity *= -1
        color2 = changeColor(color2)

    }
}

function changeColor(color) {
    color += 60
    console.log("color changed to", color)
    if (color >= 360) {
        color = 0
    }
    return color
}
