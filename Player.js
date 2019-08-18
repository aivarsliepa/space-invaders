class Player {
  static width = 16;
  static height = 8;
  /**
   *
   * @param {Game} game
   */
  constructor(game) {
    this.game = game;
    this.x = Game.size / 2 - Player.width;
    this.y = Game.size - Player.height;
    this.speed = Game.size / 100;
  }

  update() {
    // skip
  }

  moveLeft() {
    this.x = Math.max(this.x - this.speed, 0);
  }

  moveRight() {
    this.x = Math.min(this.x + this.speed, Game.size - Player.width);
  }

  shoot() {
    this.game.createPlayerBullet(this.x + Player.width / 2 - Bullet.width / 2, this.y);
  }
}
