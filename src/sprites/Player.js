import Phaser from 'phaser'
import { keyDown } from '../utils'

class Player extends Phaser.Sprite {
  constructor ({ x, y }) {
    super(game, x, y, 'player')

    this.speed = 3
    this.stamina = 100
    this.maxStamina = 100
    this.recovering = false

    this.anchor.setTo(0.5)
    game.add.existing(this)
    game.camera.follow(this)
    game.physics.arcade.enable(this);
    this.body.collideWorldBounds = true;
  }

  update () {
    this.controls()

    if (this.stamina <= 0) this.recovering = true
    if (this.stamina >= this.maxStamina) this.recovering = false
  }

  controls() {
    if (keyDown('LEFT')) {
      this.x -= this.speed
    } else if (keyDown('RIGHT')) {
      this.x += this.speed
    }

    if (keyDown('UP')) {
      this.y -= this.speed
    } else if (keyDown('DOWN')) {
      this.y += this.speed
    }

    if (keyDown('Z') && !this.recovering) {
      this.stamina -= 0.75
      this.speed = 9
    } else if (keyDown('X')) {
      this.speed = 1
    } else {
      this.speed = 3
      this.stamina < this.maxStamina && (this.stamina += 0.5)
    }
  }
}

export default Player