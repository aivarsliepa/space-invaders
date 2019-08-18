let enemy1_1;
let enemy1_2;

function preload() {
  enemy1_1 = loadImage("sprites/enemy1_1.png");
  enemy1_2 = loadImage("sprites/enemy1_2.png");
}

function draw() {
  noStroke();
  background(0);
  // const start = performance.now();
  game.update();
  // console.log(performance.now() - start);
  drawGame(game);

  keyIsDownEvents();

  if (game.gameOver) {
    fill("#a7db18");
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

const enemyMap = new WeakMap();

/**
 * @param {Enemy} enemy
 */
function drawEnemy(enemy) {
  if (!enemyMap.has(enemy)) {
    enemyMap.set(enemy, true);
  }

  const imageToUse = enemyMap.get(enemy) ? enemy1_1 : enemy1_2;
  image(imageToUse, mapCoord(enemy.x), mapCoord(enemy.y), mapCoord(Enemy.width), mapCoord(Enemy.height));

  // TODO when movement of enemies are changed, determine it based on depending if enemy moved
  if (random(1) < 0.1) {
    enemyMap.set(enemy, !enemyMap.get(enemy));
  }
}

function mapCoord(val) {
  return map(val, 1, Game.size, 0, width);
}
