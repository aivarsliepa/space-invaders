/**
 * @type {Game}
 */
let game;

function setup() {
  frameRate(60);
  // original display was 224 x 256 -> upscaled 3 times = 672 x 768
  // for now use 672x672 and leave the rest for score, lives, etc
  createCanvas(672, 672).parent("sketch-container");
  setupGame();
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
