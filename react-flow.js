// for the url
/* eslint-disable max-len */
/* eslint-disable import/no-commonjs */

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

  rules: {
    "react/sort-comp": [ 2, {
      "order": [
        // allow to add props/state on top of react classes
        "props",
        "state",

        // defaults
        // see https://github.com/yannickcr/eslint-plugin-react/blob/master/lib/rules/sort-comp.js
        "static-methods",
        "lifecycle",
        "everything-else",
        "render",
      ],
    } ],
  },
}
