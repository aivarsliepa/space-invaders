class EnemyCollection {
  /**
   * @param {Game} game
   */
  constructor(game) {
    /** @type {Enemy[][]} */
    this.enemies = [];

    this.initialSpeed = width / (10 * FRAME_RATE);
    this.speed = this.initialSpeed;
    this.moveRight = true;
    this.timesScreenCrossed = 0;

    for (let i = 1; i < 7; i++) {
      const enemyRow = [];
      this.enemies.push(enemyRow);
      for (let j = 1; j < 7; j++) {
        enemyRow.push(new Enemy(i * 4 * Enemy.r, j * 4 * Enemy.r, game));
      }
    }
  }

  update() {
    let changeDirection = false;

    this.forEachEnemy(enemy => {
      if (enemy.x < 0 || enemy.x > width) {
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

  draw() {
    this.forEachEnemy(drawObject);
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
