class Game {
  constructor() {
    this.player = new Player(this);

    /** @type {Bullet[]} */
    this.enemyBullets = [];

    /** @type {Bullet[]} */
    this.playerBullets = [];

    /** @type {Enemy[]} */
    this.enemies = [];

    this.gameOver = false;

    for (let i = 0; i < width; i += Enemy.r * 3) {
      this.enemies.push(new Enemy(i, this));
    }
  }

  draw() {
    this.player.draw();
    this.playerBullets.forEach(drawObject);
    this.enemyBullets.forEach(drawObject);
    this.enemies.forEach(drawObject);
  }

  update() {
    this.player.update();
    this.playerBullets.forEach(updateObject);
    this.enemyBullets.forEach(updateObject);
    this.enemies.forEach(updateObject);
  }

  createEnemyBullet(x, y) {
    this.enemyBullets.push(new Bullet(true, x, y, this));
  }

  createPlayerBullet(x, y) {
    if (this.playerBullets.length < 2) {
      this.playerBullets.push(new Bullet(false, x, y, this));
    }
  }

  removeBullet(bullet) {
    this.enemyBullets = this.enemyBullets.filter(b => b !== bullet);
    this.playerBullets = this.playerBullets.filter(b => b !== bullet);
  }

  removeEnemy(enemy) {
    this.enemies = this.enemies.filter(e => e !== enemy);
  }
}
