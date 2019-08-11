class Player {
  static r = 20;
  /**
   *
   * @param {Game} game
   */
  constructor(game) {
    this.game = game;
    this.x = width / 2 - Player.r;
    this.y = height - Player.r;
    this.speed = width / (3 * FRAME_RATE);
  }

  draw() {
    fill("#193314");
    circle(this.x, this.y, Player.r * 2);
  }

  update() {
    // skip
  }

  moveLeft() {
    this.x -= this.speed;
  }

  moveRight() {
    this.x += this.speed;
  }

  shoot() {
    this.game.createPlayerBullet(this.x, this.y);
  }
}
