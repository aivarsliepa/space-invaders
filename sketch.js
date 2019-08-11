/**
 * @type {Game}
 */
let game;
const FRAME_RATE = 60;

function setup() {
  frameRate(FRAME_RATE);
  createCanvas(800, 768).parent("sketch-container");
  setupGame();
}

function draw() {
  background(55);
  game.update();
  game.draw();

  keyIsDownEvents();

  if (game.gameOver) {
    textSize(40);
    textAlign(CENTER);
    text("Game Over", width / 2, height / 2);
    noLoop();
  }
}

function setupGame() {
  game = new Game();
  loop();
}

function keyIsDownEvents() {
  if (keyIsDown(LEFT_ARROW)) {
    game.player.moveLeft();
  }

  if (keyIsDown(RIGHT_ARROW)) {
    game.player.moveRight();
  }
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    game.player.shoot();
  }
}

// wrapper for p5 dist()
function distance(pos1, pos2) {
  return dist(pos1.x, pos1.y, pos2.x, pos2.y);
}
