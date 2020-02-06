//This is the main .ts that runs on start-up
window.addEventListener("resize", setup);
let controller: Controller

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  frameRate(60)
  rectMode(CENTER)
  angleMode(DEGREES)
  translate(windowWidth/2, windowHeight/2)
  controller = new Controller()
}

function draw() {
  background(205, 55, 55)
  // let fps = frameRate()
  // console.log(fps);
  translate(controller.cameraX, controller.cameraY, 10)
  // rotate(45)
  controller.draw()
  controller.update()
  fill(0)
  noStroke()
  rect(0, 0, 20, 20)
}
