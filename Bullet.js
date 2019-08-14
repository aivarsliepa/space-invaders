class Bullet {
  static r = 2;
  constructor(isHostile, x, y, game) {
    this.game = game;
    this.isHostile = isHostile;
    this.x = x;
    this.y = y;
    this.speed = Game.size / (4 * FRAME_RATE);
  }

  update() {
    if (this.isHostile) {
      this.y += this.speed;
    } else {
      this.y -= this.speed;
    }

    if (this.y < 0 || this.y > Game.size) {
      this.remove();
    }
  }

  remove() {
    this.game.removeBullet(this);
  }
}
