class Player {
  static r = 8;
  /**
   *
   * @param {Game} game
   */
  constructor(game) {
    this.game = game;
    this.x = Game.size / 2 - Player.r;
    this.y = Game.size - Player.r;
    this.speed = Game.size / (3 * FRAME_RATE);
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
