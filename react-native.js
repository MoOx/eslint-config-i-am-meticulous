module.exports = {
  // warning, this is for tests
  // you must declare this in your config as it's inherited by "extends"
  parser: "babel-eslint",

  settings: {
    "import/resolver": {
      "node": {
        "extensions": [ ".js", ".web.js", ".ios.js", ".android.js" ],
      },
    },
  },

  plugins: [
    "react-native",
  ],

  rules: {
    "react-native/no-unused-styles": 2,
    "react-native/split-platform-components": 2,
    "react-native/no-inline-styles": 2,
    "react-native/no-color-literals": 0, // too subjective
  },
}
