import Phaser from 'phaser'
import { keyDown } from '../utils'
import StatusBar from './StatusBar'

class Player extends Phaser.Sprite {
  constructor({ x, y }) {
    super(game, x, y, 'player')

    this.speed = 100
    this.stamina = 100
    this.maxStamina = 100
    this.recovering = false

    game.add.existing(this)
    game.physics.arcade.enable(this)
    this.scale.setTo(2)
    game.camera.follow(this)
    this.body.collideWorldBounds = true;
    this.cursor = game.input.keyboard.createCursorKeys();

    this.StatusBar = new StatusBar()
    this.addAnimations()
  }

  update() {
    this.addControls()
    this.manageAnimations()

    if (this.stamina <= 0) this.recovering = true
    if (this.stamina >= this.maxStamina) this.recovering = false
    this.StatusBar.setValue(this.stamina, this.maxStamina)
  }

  addAnimations() {
    this.animations.add('walk_down', [1, 2])
    this.animations.add('walk_up', [4, 5])
    this.animations.add('walk_right', [10, 11])
    this.animations.add('walk_left', [7, 8])
  }

  manageAnimations() {
    const { x, y } = this.body.velocity

    if (x > 0) this.animations.play('walk_right', 10)
    else if (x < 0) this.animations.play('walk_left', 10)
    else if (y > 0) this.animations.play('walk_down', 10)
    else if(y < 0) this.animations.play('walk_up', 10)
  }

  addControls() {
    this.body.velocity.setTo(0, 0)

    if (keyDown('Z') && !this.recovering) {
      this.stamina -= 0.75
      this.speed = 300
    } else if (keyDown('X')) {
      this.speed = 50
    } else {
      this.speed = 100
      this.stamina < this.maxStamina && (this.stamina += 0.5)
    }

    if (this.cursor.left.isDown) {
      this.body.velocity.x = -this.speed
    } else if (this.cursor.right.isDown) {
      this.body.velocity.x = this.speed
    }

    if (this.cursor.up.isDown) {
      this.body.velocity.y = -this.speed
    } else if (this.cursor.down.isDown) {
      this.body.velocity.y = this.speed
    }

  }
}

export default Player