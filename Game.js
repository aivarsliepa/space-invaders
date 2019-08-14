class Game {
  constructor() {
    // screen width of original game, base all coords based on 224x224 grid
    this.size = 224;
    this.player = new Player(this);

    /** @type {Bullet[]} */
    this.enemyBullets = [];

    /** @type {Bullet[]} */
    this.playerBullets = [];

    this.enemyCollection = new EnemyCollection(this);

    this.gameOver = false;
  }

  update() {
    this.player.update();
    this.playerBullets.forEach(updateObject);
    this.enemyBullets.forEach(updateObject);
    this.enemyCollection.update();
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
    this.enemyCollection.removeEnemy(enemy);
  }
}
