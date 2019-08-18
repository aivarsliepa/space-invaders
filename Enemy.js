class Enemy {
  static width = 12;
  static height = 8;
  /**
   * @param {Game} game
   */
  constructor(x, y, game) {
    this.game = game;
    this.x = x;
    this.y = y;
  }

  update() {
    this.game.playerBullets.forEach(bullet => this.checkCollision(bullet));

    if (this.y > Game.size) {
      this.game.gameOver = true;
    }
  }

  checkCollision(bullet) {
    if (this.y + Enemy.height < bullet.y || bullet.y + Bullet.height < this.y) {
      return;
    }

    if (this.x + Enemy.width < bullet.x || bullet.x + Bullet.width < this.x) {
      return;
    }

    this.remove();
    bullet.remove();
  }

  shoot() {
    this.game.createEnemyBullet(this.x + Enemy.width / 2 - Bullet.width / 2, this.y + Enemy.height);
  }

  remove() {
    this.game.removeEnemy(this);
  }
}
