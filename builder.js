
// const HANDJS = require('./src/Hand')
let BABYLON = {}
let OIMO = {}

if (typeof window !== 'undefined') {
  BABYLON = require('./src/babylon.2.5.full.max')
  OIMO = require('./src/Oimo').OIMO
  window.BABYLON = BABYLON
  window.OIMO = OIMO
}

module.exports = { BABYLON, OIMO }
