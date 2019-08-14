class Bullet {
  static r = 5;
  constructor(isHostile, x, y, game) {
    this.game = game;
    this.isHostile = isHostile;
    this.x = x;
    this.y = y;
    this.speed = this.game.size / (4 * FRAME_RATE);
  }

  update() {
    if (this.isHostile) {
      this.y += this.speed;
    } else {
      this.y -= this.speed;
    }

    if (this.y < 0 || this.y > this.game.size) {
      this.remove();
    }
  }

  remove() {
    this.game.removeBullet(this);
  }
}
