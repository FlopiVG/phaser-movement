import Phaser from 'phaser'

class Player extends Phaser.Sprite {
  constructor ({ x, y }) {
    super(game, x, y, 'player')

    this.speed = 3

    this.anchor.setTo(0.5)
    game.add.existing(this)
    game.camera.follow(this)
    game.physics.arcade.enable(this);
    this.body.collideWorldBounds = true;
  }

  update () {
    if (game.input.keyboard.isDown(Phaser.Keyboard.LEFT)) {
      this.x -= this.speed
    } else if (game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)) {
      this.x += this.speed
    }

    if (game.input.keyboard.isDown(Phaser.Keyboard.UP)) {
      this.y -= this.speed
    } else if (game.input.keyboard.isDown(Phaser.Keyboard.DOWN)) {
      this.y += this.speed
    }
  }
}

export default Player