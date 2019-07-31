module.exports = {
  parser: "babel-eslint",

  plugins: ["react"],

  extends: ["./index.js"],

  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },

  rules: {
    "react/default-props-match-prop-types": 2,
    "react/jsx-boolean-value": [2, "always"], // like reason react
    "react/jsx-handler-names": 2,
    "react/jsx-key": 2,
    "react/jsx-no-comment-textnodes": 2,
    "react/jsx-no-duplicate-props": 2,
    "react/jsx-no-target-blank": 2,
    "react/jsx-no-undef": 2,
    "react/jsx-pascal-case": 2,
    "react/jsx-uses-react": 2,
    "react/jsx-uses-vars": 2,
    "react/no-access-state-in-setstate": 2,
    "react/no-danger-with-children": 2,
    "react/no-deprecated": 2,
    "react/no-direct-mutation-state": 2,
    "react/no-is-mounted": 2,
    "react/no-redundant-should-component-update": 2,
    "react/no-render-return-value": 2,
    "react/no-string-refs": 2,
    "react/no-this-in-sfc": 2,
    "react/no-typos": 2,
    "react/no-unescaped-entities": 2,
    "react/no-unknown-property": 2,
    "react/no-unused-state": 2,
    "react/prop-types": 2,
    "react/react-in-jsx-scope": 2,
    "react/require-render-return": 2,
    "react/self-closing-comp": 2,
    "react/sort-comp": 2,
    "react/style-prop-object": 2,
    "react/wrap-multilines": 0, // deprecated
  },
};
