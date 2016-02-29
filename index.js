module.exports = {
  // mostly good stuff
  "extends": "eslint:recommended",

  "ecmaFeatures": {
    "modules": true,
    "experimentalObjectRestSpread": true,
  },
  "env": {
    "node": true,
    "browser": true,
    "es6": true,
  },
  "rules": {
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
  },
  "globals": {
    // this is for webpack :)
    "__DEV__": true,
    "__PROD__": true,
  },
}
