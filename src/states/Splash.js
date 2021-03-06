import Phaser from 'phaser'
import { centerGameObjects } from '../utils'

export default class extends Phaser.State {
  init () {}

  preload () {
    this.loaderBg = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'loaderBg')
    this.loaderBar = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'loaderBar')
    centerGameObjects([this.loaderBg, this.loaderBar])

    this.load.setPreloadSprite(this.loaderBar)
    //
    // load your assets
    //
    this.load.image('bar-container', 'assets/images/bar-container.png')
    this.load.image('loaded-stamina', 'assets/images/loaded-stamina.png')
    this.load.image('example-background', 'assets/images/example-background.png')
    this.load.spritesheet('player', 'assets/images/player.png', 32, 32, 12)
  }

  create () {
    this.state.start('Game')
  }
}
