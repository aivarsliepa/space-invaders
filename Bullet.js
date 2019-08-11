class Bullet {
  static r = 5;
  constructor(isHostile, x, y, game) {
    this.game = game;
    this.isHostile = isHostile;
    this.x = x;
    this.y = y;
    this.speed = height / (4 * FRAME_RATE);
  }

  update() {
    if (this.isHostile) {
      this.y += this.speed;
    } else {
      this.y -= this.speed;
    }

    if (this.y < 0 || this.y > height) {
      this.remove();
    }
  }

  draw() {
    fill("#fff");
    circle(this.x, this.y, Bullet.r * 2);
  }

  remove() {
    this.game.removeBullet(this);
  }
}
