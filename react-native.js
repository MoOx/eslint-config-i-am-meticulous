// for the url
/* eslint-disable max-len */
/* eslint-disable import/no-commonjs */

module.exports = {
  // warning, this is for tests
  // you must declare this in your config as it's inherited by "extends"
  parser: "babel-eslint",

  plugins: [
    "react-native",
  ],

  rules: {
    "react-native/no-unused-styles": [ 2 ],
    "react-native/split-platform-components": [ 2 ],
  },
}
