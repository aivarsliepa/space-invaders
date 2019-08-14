function draw() {
  background(55);
  game.update();
  drawGame(game);

  keyIsDownEvents();

  if (game.gameOver) {
    textSize(40);
    textAlign(CENTER);
    text("Game Over", width / 2, height / 2);
    noLoop();
  }
}

/**
 * @param {Game} game
 */
function drawGame(game) {
  drawPlayer(game.player);
  game.playerBullets.forEach(drawBullet);
  game.enemyBullets.forEach(drawBullet);
  drawEnemyCollection(game.enemyCollection);
}

/**
 * @param {Bullet} bullet
 */
function drawBullet(bullet) {
  fill("#fff");
  circle(bullet.x, bullet.y, Bullet.r * 2);
}

/**
 * @param {Player} player
 */
function drawPlayer(player) {
  fill("#193314");
  circle(player.x, player.y, Player.r * 2);
}

/**
 * @param {EnemyCollection} collection
 */
function drawEnemyCollection(collection) {
  collection.forEachEnemy(drawEnemy);
}

/**
 * @param {Enemy} enemy
 */
function drawEnemy(enemy) {
  fill("#a7db18");
  circle(enemy.x, enemy.y, Enemy.r * 2);
}
