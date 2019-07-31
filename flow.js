module.exports = {
  parser: "babel-eslint",

  plugins: ["flowtype"],

  extends: ["./index.js"],

  rules: {
    // avoid false positive eslint errors
    "flowtype/define-flow-type": 2,
    "flowtype/use-flow-type": 2,

    "flowtype/boolean-style": 2,
    "flowtype/no-dupe-keys": 2,
    "flowtype/no-primitive-constructor-types": 2,
    "flowtype/no-unused-expressions": 2,
    "flowtype/no-mutable-array": 2,
    "flowtype/require-exact-type": 2,
  },
};
