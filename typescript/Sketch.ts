//This is the main .ts that runs on start-up
window.addEventListener("resize", setup);
let board = new Board()

function setup() {
  createCanvas(windowWidth, windowHeight);
  console.log(board.layout);
  
}

function draw() {
  background(205, 55, 55);

  board.generateCells()
  // noStroke();
}