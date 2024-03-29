class EnemyCollection {
  static xGap = 4;
  static yGap = 6;
  static rowCount = 5;
  static columnCount = 11;
  /**
   * @param {Game} game
   */
  constructor(game) {
    this.game = game;
    /** @type {Enemy[][]} */
    this.enemies = [];

    // TODO change based on turns/cycles (so that enemies can stay still for brief moments)
    this.initialSpeed = 0.5;
    this.speed = this.initialSpeed;
    this.moveRight = true;
    this.timesScreenCrossed = 0;

    // 5 rows, 11 columns
    for (let i = 1; i < EnemyCollection.columnCount + 1; i++) {
      const enemyRow = [];
      this.enemies.push(enemyRow);
      for (let j = 1; j <= EnemyCollection.rowCount; j++) {
        enemyRow.push(
          new Enemy(i * (Enemy.width + EnemyCollection.xGap), j * (Enemy.height + EnemyCollection.yGap), game)
        );
      }
    }
  }

  update() {
    let changeDirection = false;

    this.forEachEnemy(enemy => {
      if (enemy.x < 0 || enemy.x + Enemy.width > Game.size) {
        changeDirection = true;
      }
    });

    if (changeDirection) {
      this.moveRight = !this.moveRight;
      this.timesScreenCrossed++;

      if (this.timesScreenCrossed % 2 === 0) {
        this.speed += this.initialSpeed;
      }
    }

    this.forEachEnemy(enemy => {
      if (this.moveRight) {
        enemy.x += this.speed;
      } else {
        enemy.x -= this.speed;
      }

      if (changeDirection) {
        if (this.timesScreenCrossed % 2 === 0) {
          enemy.y += Enemy.height;
        }
      }
    });

    this.forEachEnemy(updateObject);
  }

  removeEnemy(enemy) {
    for (let i = 0; i < this.enemies.length; i++) {
      this.enemies[i] = this.enemies[i].filter(e => e !== enemy);
    }
  }

  forEachEnemy(fn) {
    for (const enemyRow of this.enemies) {
      enemyRow.forEach(fn);
    }
  }
}
