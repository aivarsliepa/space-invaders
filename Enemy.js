class Enemy {
  static r = 15;
  /**
   *
   * @param {Game} game
   */
  constructor(x, game) {
    this.game = game;
    this.x = x;
    this.y = 0 + 2 * Enemy.r;
    this.initialSpeed = width / (10 * FRAME_RATE);
    this.speed = this.initialSpeed;
    this.moveRight = true;
  }

  draw() {
    fill("#a7db18");
    circle(this.x, this.y, Enemy.r * 2);
  }

  update() {
    if (this.moveRight) {
      this.x += this.speed;
    } else {
      this.x -= this.speed;
    }

    if (this.x < 0) {
      this.moveRight = true;
      this.y += Enemy.r * 3;
      this.speed += this.initialSpeed;
    } else if (this.x > width) {
      this.moveRight = false;
      this.y += Enemy.r * 2;
    }

    this.game.playerBullets.forEach(bullet => this.checkCollision(bullet));

    if (random(1) < 0.01) {
      this.shoot();
    }

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
