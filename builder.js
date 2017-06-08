
// const HANDJS = require('./src/Hand')
let BABYLON = {}
// let OIMO = {}

if (typeof window !== 'undefined') {
  // BABYLON = require('./src/babylon.2.5.full.max')
  // OIMO = require('./src/Oimo').OIMO
  BABYLON = require('./lib/babylon.custom.3.0.js')
  window.BABYLON = BABYLON
}

module.exports = BABYLON
