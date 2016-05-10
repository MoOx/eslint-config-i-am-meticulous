/* eslint-disable import/no-commonjs */

module.exports = {
  // warning, this is for tests
  // you must declare this in your config as it's inherited by "extends"
  parser: "babel-eslint",

  plugins: [
    "flow-vars",
  ],

  extends: [
    "./index.js",
  ],

  rules: {
    "flow-vars/define-flow-type": 2,
    "flow-vars/use-flow-type": 2,
  },
}
