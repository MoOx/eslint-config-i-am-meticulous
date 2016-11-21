module.exports = {
  parser: "babel-eslint",

  plugins: [
    "flowtype",
  ],

  extends: [
    "./index.js",
  ],

  rules: {
    "flowtype/define-flow-type": 2,
    "flowtype/use-flow-type": 2,
  },
}
