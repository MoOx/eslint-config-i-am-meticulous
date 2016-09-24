module.exports = {
  settings: {
    "import/resolver": {
      "node": {
        "extensions": [ ".js", ".web.js", ".ios.js", ".android.js" ],
      },
    },
  },
  // @todo replace with
  // extends: "plugin:import/react-native",
  // when
  // https://github.com/benmosher/eslint-plugin-import/pull/574
  // is released

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
