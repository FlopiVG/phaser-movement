/* globals __DEV__ */
import Phaser from 'phaser'

import Player from '../sprites/Player'
import StatusBar from '../sprites/StatusBar'

export default class extends Phaser.State {
  init () {}
  preload () {}

  create () {
    game.add.image(0, 0, 'example-background')
    game.physics.startSystem(Phaser.Physics.ARCADE)

    new Player({ x: 100, y: 200 })
  }

  render () {
    if (__DEV__) {
      //this.game.debug.spriteInfo(this.player, 32, 32)
    }
  }
}
