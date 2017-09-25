'use strict'

module.exports = (el, handler) => {
  let target
  el.addEventListener('mousedown', ev => {
    target = ev.target
  })
  el.addEventListener('mouseup', ev => {
    if (ev.target === target) handler(ev)
    target = null
  })
}
