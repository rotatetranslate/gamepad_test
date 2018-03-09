const keyMap = new Map([
  [0, () => console.log('A')],
  [1, () => console.log('B')],
  [2, () => console.log('X')],
  [3, () => console.log('Y')],
  [4, () => console.log('left bumper')],
  [5, () => console.log('right bumper')],
  [6, () => console.log('left trigger')],
  [7, () => console.log('right bumper')],
  [8, () => console.log('back')],
  [9, () => console.log('start')],
  [10, () => console.log('left stick down')],
  [11, () => console.log('right stick down')],
  [12, () => console.log('d-pad up')],
  [13, () => console.log('d-pad down')],
  [14, () => console.log('d-pad left')],
  [15, () => console.log('d-pad right')],
])

// const triggerAction = (actor, actionFn) =>

const keyPressHandler = (pressed, keyMap) => {
  pressed.forEach(button => keyMap.get(button)())
}

window.addEventListener("gamepadconnected", function() {
  gameLoop()
})

function gameLoop() {
  const { 0: gp } = navigator.getGamepads()

  const pressed = gp.buttons.reduce((pressed, button, i) => {
    return button.pressed && !pressed.includes(gp.buttons[button]) ? pressed.concat(i) : pressed
  }, [])

  if (pressed.length) {
    keyPressHandler(pressed, keyMap)
  }

  window.requestAnimationFrame(gameLoop)
}
