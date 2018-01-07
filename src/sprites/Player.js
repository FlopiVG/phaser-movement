import Phaser from 'phaser'

class Player extends Phaser.Sprite {
  constructor ({ x, y }) {
    super(game, x, y, 'player')
    this.anchor.setTo(0.5)

    game.add.existing(this)
  }

  update () {
    this.angle += 1
  }
}

export default Player