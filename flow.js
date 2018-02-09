module.exports = {
  parser: "babel-eslint",

  plugins: ["flowtype"],

  extends: ["./index.js", "./_flow-globals.js"],

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

    // too brutal
    "flowtype/type-id-match": 0,
    "flowtype/no-types-missing-file-annotation": 0, // what about flow 'all' option?
    "flowtype/no-weak-types": 0,
    "flowtype/require-parameter-type": 0,
    "flowtype/require-return-type": 0,
    "flowtype/require-valid-file-annotation": 0,
    "flowtype/require-variable-type": 0,
    "flowtype/sort-keys": 0,
    "flowtype/no-flow-fix-me-comments": 0,

    // no styles rules (=> prettier)
    "flowtype/semi": 0,
    "flowtype/delimiter-dangle": 0,
    "flowtype/object-type-delimiter": 0,
    "flowtype/generic-spacing": 0,
    "flowtype/space-after-type-colon": 0,
    "flowtype/space-before-generic-bracket": 0,
    "flowtype/space-before-type-colon": 0,
    "flowtype/union-intersection-spacing": 0,

    // deprecated
    "flowtype/valid-syntax": 0,
  },
};
