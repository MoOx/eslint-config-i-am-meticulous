module.exports = {
  // warning, this is for tests
  // you must declare this in your config as it's inherited by "extends"
  parser: "babel-eslint",

  plugins: [
    "react",
  ],

  extends: [
    "./react.js",
    "./flow.js",
  ],
}
