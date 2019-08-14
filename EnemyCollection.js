class EnemyCollection {
  /**
   * @param {Game} game
   */
  constructor(game) {
    this.game = game;
    /** @type {Enemy[][]} */
    this.enemies = [];

    // TODO change based on turns/cycles (so that enemies can stay still for brief moments)
    this.initialSpeed = 0.25;
    this.speed = this.initialSpeed;
    this.moveRight = true;
    this.timesScreenCrossed = 0;

    // 5 rows, 11 columns
    for (let i = 1; i < 12; i++) {
      const enemyRow = [];
      this.enemies.push(enemyRow);
      for (let j = 1; j < 6; j++) {
        enemyRow.push(new Enemy(i * 2 * Enemy.r, j * 2 * Enemy.r, game));
      }
    }
  }

  update() {
    let changeDirection = false;

    this.forEachEnemy(enemy => {
      if (enemy.x < 0 || enemy.x > Game.size) {
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
          enemy.y += Enemy.r * 3;
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
