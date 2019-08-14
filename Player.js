class Player {
  static r = 20;
  /**
   *
   * @param {Game} game
   */
  constructor(game) {
    this.game = game;
    this.x = this.game.size / 2 - Player.r;
    this.y = this.game.size - Player.r;
    this.speed = this.game.size / (3 * FRAME_RATE);
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
