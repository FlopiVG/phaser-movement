import Phaser from 'phaser-ce'

export const centerGameObjects = (objects) => {
  objects.forEach(function (object) {
    object.anchor.setTo(0.5)
  })
}

export const keyDown = (key) => (
  game.input.keyboard.isDown(Phaser.Keyboard[key])
)