class Enemy {
  static r = 15;
  /**
   *
   * @param {Game} game
   */
  constructor(x, y, game) {
    this.game = game;
    this.x = x;
    this.y = y;
  }

  draw() {
    fill("#a7db18");
    circle(this.x, this.y, Enemy.r * 2);
  }

  update() {
    this.game.playerBullets.forEach(bullet => this.checkCollision(bullet));

    // TODO add shooting chance
    // if (random(1) < 0.01) {
    //   this.shoot();
    // }

    if (this.y > height) {
      this.game.gameOver = true;
    }
  }

  checkCollision(bullet) {
    if (distance(bullet, this) <= Bullet.r + Enemy.r) {
      this.remove();
      bullet.remove();
    }
  }

  shoot() {
    this.game.createEnemyBullet(this.x, this.y + Enemy.r + Bullet.r);
  }

  remove() {
    this.game.removeEnemy(this);
  }
}
