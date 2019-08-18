class Bullet {
  static width = 2;
  static height = 6;
  constructor(isHostile, x, y, game) {
    this.game = game;
    this.isHostile = isHostile;
    this.x = x;
    this.y = y;
    this.speed = Game.size / 25;
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
