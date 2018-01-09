import Phaser from 'phaser'
import { keyDown } from '../utils'
import StatusBar from './StatusBar'

class Player extends Phaser.Sprite {
  constructor ({ x, y }) {
    super(game, x, y, 'player')

    this.speed = 3
    this.stamina = 100
    this.maxStamina = 100
    this.recovering = false
    this.lastPosition = 'down'

    this.anchor.setTo(0.5)
    this.scale.setTo(2)
    game.add.existing(this)
    game.camera.follow(this)
    game.physics.arcade.enable(this);
    this.body.collideWorldBounds = true;

    this.animations.add('idle_down', [0])
    this.animations.add('walk_down', [1, 2])
    this.animations.add('idle_up', [3])
    this.animations.add('walk_up', [4, 5])
    this.animations.add('idle_right', [9])
    this.animations.add('walk_right', [10, 11])
    this.animations.add('idle_left', [6])
    this.animations.add('walk_left', [7, 8])


    this.StatusBar = new StatusBar()
  }

  update () {
    this.controls()

    if (this.stamina <= 0) this.recovering = true
    if (this.stamina >= this.maxStamina) this.recovering = false

    this.StatusBar.setValue(this.stamina, this.maxStamina)
  }

  controls() {
    if (keyDown('LEFT')) {
      this.x -= this.speed
      this.animations.play('walk_left', 10)
      this.lastPosition = 'left'
    } else if (keyDown('RIGHT')) {
      this.x += this.speed
      this.animations.play('walk_right', 10)
      this.lastPosition = 'right'
    }

    if (keyDown('UP')) {
      this.y -= this.speed
      this.animations.play('walk_up', 10)
      this.lastPosition = 'up'
    } else if (keyDown('DOWN')) {
      this.y += this.speed
      this.animations.play('walk_down', 10)
      this.lastPosition = 'down'
    }

    if (!keyDown('UP') && !keyDown('DOWN') && !keyDown('LEFT') && !keyDown('RIGHT')) {
      this.animations.play(`idle_${this.lastPosition}`)
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