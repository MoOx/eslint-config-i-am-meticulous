module.exports = {
  parser: "babel-eslint",

  plugins: ["react"],

  extends: ["./index.js"],

  parserOptions: {
    ecmaFeatures: {
      jsx: true
    }
  },

  rules: {
    "jsx-quotes": 0,
    "react/boolean-prop-naming": 0,
    "react/button-has-type": 0,
    "react/default-props-match-prop-types": 2,
    "react/destructuring-assignment": 0,
    "react/display-name": 0, // transpilers does a good job for now
    "react/forbid-component-props": 0, // I know what I am doing ok?
    "react/forbid-dom-props": 0,
    "react/forbid-elements": 0,
    "react/forbid-foreign-prop-types": 0,
    "react/forbid-prop-types": 0,
    "react/jsx-boolean-value": [2, "always"], // like reason react
    "react/jsx-child-element-spacing": 0,
    "react/jsx-closing-bracket-location": 0,
    "react/jsx-closing-tag-location": 0,
    "react/jsx-curly-brace-presence": 0,
    "react/jsx-curly-spacing": 0,
    "react/jsx-equals-spacing": 0,
    "react/jsx-filename-extension": 0, // .jsx sucks :)
    "react/jsx-first-prop-new-line": 0,
    "react/jsx-handler-names": 2,
    "react/jsx-indent-props": 0,
    "react/jsx-indent": 0,
    "react/jsx-key": 2,
    "react/jsx-max-depth": 0,
    "react/jsx-max-props-per-line": 0,
    "react/jsx-no-bind": 0, // you are a grown-up
    "react/jsx-no-comment-textnodes": 2,
    "react/jsx-no-duplicate-props": 2,
    "react/jsx-no-literals": 0,
    "react/jsx-no-target-blank": 2,
    "react/jsx-no-undef": 2,
    "react/jsx-one-expression-per-line": 0,
    "react/jsx-pascal-case": 2,
    "react/jsx-props-no-multi-spaces": 0,
    "react/jsx-sort-default-props": 0,
    "react/jsx-sort-prop-types": 0, // deprecated
    "react/jsx-sort-props": 0, // alpha order is stupid
    "react/jsx-space-before-closing": 0,
    "react/jsx-tag-spacing": 0,
    "react/jsx-uses-react": 2,
    "react/jsx-uses-vars": 2,
    "react/jsx-wrap-multilines": 0,
    "react/no-access-state-in-setstate": 2,
    "react/no-array-index-key": 0,
    "react/no-children-prop": 0,
    "react/no-comment-textnodes": 0, // deprecated
    "react/no-danger-with-children": 2,
    "react/no-danger": 0, // dangerous properties names are clear enough
    "react/no-deprecated": 2,
    "react/no-did-mount-set-state": 0, // sometime it make sense
    "react/no-did-update-set-state": 0, // sometime it make sense
    "react/no-direct-mutation-state": 2,
    "react/no-find-dom-node": 0,
    "react/no-is-mounted": 2,
    "react/no-multi-comp": 0,
    "react/no-redundant-should-component-update": 2,
    "react/no-render-return-value": 2,
    "react/no-set-state": 0, // stupid
    "react/no-string-refs": 2,
    "react/no-this-in-sfc": 2,
    "react/no-typos": 2,
    "react/no-unescaped-entities": 2,
    "react/no-unknown-property": 2,
    "react/no-unused-prop-types": 0, // too much bugs
    "react/no-unused-state": 2,
    "react/no-will-update-set-state": 0, // wu is deprecated anyway
    "react/prefer-es6-class": 0, // you are a grown-up
    "react/prefer-stateless-function": 0, // you are a grown-up
    "react/prop-types": 2,
    "react/react-in-jsx-scope": 2,
    "react/require-default-props": 0,
    "react/require-extension": 0, // deprecated
    "react/require-optimization": 0, // a bit brutal
    "react/require-render-return": 2,
    "react/self-closing-comp": 2,
    "react/sort-comp": 2,
    "react/sort-prop-types": 0, // stupid
    "react/style-prop-object": 2,
    "react/void-dom-elements-no-children": 0,
    "react/wrap-multilines": 0 // deprecated
  }
};
