class Bullet {
  static width = 4;
  static height = 8;
  constructor(isHostile, x, y, game) {
    this.game = game;
    this.isHostile = isHostile;
    this.x = x;
    this.y = y;
    this.speed = Game.size / 90;
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
