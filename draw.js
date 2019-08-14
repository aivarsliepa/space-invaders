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
  circle(mapCoord(bullet.x), mapCoord(bullet.y), mapCoord(Bullet.r * 2));
}

/**
 * @param {Player} player
 */
function drawPlayer(player) {
  fill("#193314");
  circle(mapCoord(player.x), mapCoord(player.y), mapCoord(Player.r * 2));
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
  circle(mapCoord(enemy.x), mapCoord(enemy.y), mapCoord(Enemy.r * 2));
}

function mapCoord(val) {
  return map(val, 1, Game.size, 0, width);
}
