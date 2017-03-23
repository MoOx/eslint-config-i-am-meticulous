module.exports = {
  // mostly good stuff
  extends: "eslint:recommended",

  parserOptions: {
    ecmaVersion: 2017,
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

  plugins: ["import"],

  rules: {
    // no styles rules (=> prettier)

    "no-console": 0,
    "prefer-const": [2],
    "one-var": [2, "never"],
    "no-var": [2],
    "no-bitwise": [2],

    "import/default": [2],
    "import/export": [2],
    "import/extensions": [0], // not flexible enough
    "import/imports-first": [2],
    "import/max-dependencies": [2],
    "import/named": [2],
    "import/namespace": [2],
    "import/newline-after-import": [2],
    "import/no-absolute-path": [2],
    "import/no-amd": [2],
    // Intended for temporary use when migrating to pure ES6 modules.
    "import/no-commonjs": [0],
    "import/no-deprecated": [2],
    "import/no-duplicates": [2],
    "import/no-dynamic-require": 0,
    "import/no-extraneous-dependencies": [2],
    "import/no-internal-modules": 0,
    "import/no-mutable-exports": [2],
    "import/no-named-as-default-member": [2],
    "import/no-named-as-default": [2],
    "import/no-namespace": [2],
    "import/no-nodejs-modules": [0],
    "import/no-restricted-paths": [2],
    "import/no-unresolved": [2, { commonjs: true }],
    "import/order": [2, { "newlines-between": "always" }],
    "import/prefer-default-export": [0], // does not always make sense
  },

  settings: {
    "import/ignore": [
      "node_modules", // mostly CommonJS (ignored by default)
      "\.json$", // import plugin does not seems to like json
      "\.(css|scss|less)$", // can't parse unprocessed CSS
      "\.(jpg|png|gif|svg|html|txt|md|woff|woff2|ttf|eot)$", // webpack !
    ],
  },
};
