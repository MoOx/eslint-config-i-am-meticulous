module.exports = {
  "parser": "babel-eslint",

  "plugins": [
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
