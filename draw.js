function draw() {
  background(55);
  // const start = performance.now();
  game.update();
  // console.log(performance.now() - start);
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
  rect(mapCoord(bullet.x), mapCoord(bullet.y), mapCoord(Bullet.width), mapCoord(Bullet.height));
}

/**
 * @param {Player} player
 */
function drawPlayer(player) {
  fill("#193314");
  rect(mapCoord(player.x), mapCoord(player.y), mapCoord(Player.width), mapCoord(Player.height));
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
  rect(mapCoord(enemy.x), mapCoord(enemy.y), mapCoord(Enemy.width), mapCoord(Enemy.height));
}

function mapCoord(val) {
  return map(val, 1, Game.size, 0, width);
}
