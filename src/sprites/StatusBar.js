import Phaser from 'phaser'

class StatusBar extends Phaser.Sprite {
  constructor() {
    super(game, 25, 25, 'bar-container')

    game.add.existing(this)
    this.fixedToCamera = true

    this.fillStatusBar = new FillStatusBar({
      x: this.x + 3,
      y: this.y + 3,
      parentWidth: this.width
    })
  }
  setValue(val, maxVal) {
    this.fillStatusBar.setValue(val, maxVal)
  }
}

class FillStatusBar extends Phaser.Sprite {
  constructor({ x, y, parentWidth }) {
    super(game, x, y, 'loaded-stamina')

    this.height = 10
    this.width = parentWidth - 6
    this.full = parentWidth - 6
    this.currentValue = 0
    this.maxVal = 0

    game.add.existing(this)
    this.fixedToCamera = true
  }

  setValue(val, maxVal) {
    this.currentValue = val
    this.maxVal = maxVal
  }

  update() {
    this.width = (this.currentValue / this.maxVal) * this.full
  }
}

export default StatusBar