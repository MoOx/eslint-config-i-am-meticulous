/* eslint-disable import/no-commonjs */

module.exports = {
  // mostly good stuff
  extends: "eslint:recommended",

  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
    },
  },
  env: {
    node: true,
    browser: true,
    es6: true,
  },

  plugins: [
    "import",
  ],

  rules: {
    "no-console": 0,
    "indent": [ 2, 2 ],
    "max-len": [ 2, 80, 4 ],
    "no-multiple-empty-lines": [ 2, { "max": 1 } ],
    "quotes": [ 2, "double" ],
    "semi": [ 2, "never" ],
    "comma-dangle": [ 2, "always-multiline" ],
    "comma-style": [ 2, "last" ],
    "brace-style": [ 2, "stroustrup" ],
    "dot-location": [ 2, "property" ],
    "computed-property-spacing": [ 2, "never" ],
    "object-curly-spacing": [ 2, "always" ],
    "array-bracket-spacing": [ 2, "always" ],
    "keyword-spacing": [ 2, { "before": true, "after": true } ],
    "space-before-blocks": [ 2, "always" ],
    "space-before-function-paren": [ 2, "never" ],
    "space-in-parens": [ 2, "never" ],
    "space-unary-ops": [ 2, {
      "words": true,
      "nonwords": false,
    } ],
    "spaced-comment": [ 2, "always" ],
    "prefer-const": [ 2 ],
    "one-var": [ 2, "never" ],
    "no-var": [ 2 ],
    "no-bitwise": [ 2 ],

    "import/default": [ 2 ],
    "import/export": [ 2 ],
    "import/extensions": [ 2 ],
    "import/imports-first": [ 2 ],
    "import/named": [ 2 ],
    "import/namespace": [ 2 ],
    "import/newline-after-import": [ 2 ],
    "import/no-amd": [ 2 ],
    "import/no-commonjs": [ 2 ],
    "import/no-deprecated": [ 2 ],
    "import/no-duplicates": [ 2 ],
    "import/no-extraneous-dependencies": [ 2 ],
    "import/no-mutable-exports": [ 2 ],
    "import/no-named-as-default-member": [ 2 ],
    "import/no-named-as-default": [ 2 ],
    "import/no-namespace": [ 2 ],
    "import/no-nodejs-modules": [ 0 ],
    "import/no-unresolved": [ 2, { "commonjs": true } ],
    "import/order": [ 2, { "newlines-between": "always" } ],
    // not landed yet
    // "import/prefer-default-export": [ 2 ],
  },
}
