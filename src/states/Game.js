/* globals __DEV__ */
import Phaser from 'phaser'

import Player from '../sprites/Player'
import StatusBar from '../sprites/StatusBar'

export default class extends Phaser.State {
  init () {}
  preload () {}

  create () {
    game.world.setBounds(0, 0, this.game.width * 3, this.game.height)
    game.physics.startSystem(Phaser.Physics.ARCADE)

    const bannerText = 'Phaser + ES6 + Webpack'
    let banner = this.add.text(this.world.centerX, this.game.height - 80, bannerText, {
      font: '40px Bangers',
      fill: '#77BFA3',
      smoothed: false
    })

    banner.padding.set(10, 16)
    banner.anchor.setTo(0.5)

    this.player = new Player({
      game: this.game,
      x: this.world.centerX,
      y: this.world.centerY
    })
  }

  render () {
    if (__DEV__) {
      //this.game.debug.spriteInfo(this.player, 32, 32)
    }
  }
}
