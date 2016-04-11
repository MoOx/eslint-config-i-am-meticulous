module.exports = {
  plugins: [
    "react",
  ],

  extends: [
    "./index.js",
  ],

  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },

  rules: {
    "jsx-quotes": [ 2, "prefer-double" ],

    "react/jsx-boolean-value": [ 2, "never" ],
    "react/jsx-closing-bracket-location": [ 2, "tag-aligned" ],
    "react/jsx-curly-spacing": [ 2, "always" ],
    "react/jsx-equals-spacing": [ 2, "never" ],
    "react/jsx-handler-names": 2,
    "react/jsx-indent-props": [ 2, 2 ],
    // https://github.com/yannickcr/eslint-plugin-react/issues/540
    "react/jsx-indent": [ 0, 2 ],
    "react/jsx-key": 2,
    "react/jsx-max-props-per-line": 0, // eslint max-len is enough
    "react/jsx-no-bind": 2,
    "react/jsx-no-duplicate-props": 2,
    "react/jsx-no-literals": 2,
    "react/jsx-no-undef": 2,
    "react/jsx-pascal-case": 2,
    "react/jsx-sort-props": 0, // alpha order is stupid
    "react/jsx-sort-prop-types": 0, // deprecated
    "react/jsx-space-before-closing": 2,
    "react/jsx-uses-react": 2,
    "react/jsx-uses-vars": 2,

    "react/display-name": 0, // transpilers does a good job for now
    "react/forbid-prop-types": 0,
    "react/no-danger": 0, // dangerous properties names are clear enough
    "react/no-deprecated": 2,
    "react/no-did-mount-set-state": 2,
    "react/no-did-update-set-state": 2,
    "react/no-direct-mutation-state": 2,
    "react/no-is-mounted": 2,
    "react/no-multi-comp": 2,
    "react/no-set-state": 0, // sometimes it's relevant
    "react/no-string-refs": 2,
    "react/no-unknown-property": 2,
    "react/prefer-es6-class": 2,
    "react/prefer-stateless-function": 2,
    "react/prop-types": 2,
    "react/react-in-jsx-scope": 2,
    "react/require-extension": 2,
    "react/self-closing-comp": 2,
    "react/sort-comp": 2,
    "react/sort-prop-types": 0, // alpha order is stupid
    "react/wrap-multilines": 2,
  },
}
