module.exports = {
  "extends": "eslint-config-i-am-meticulous",

  "plugins": [
    "react",
  ],

  "ecmaFeatures": {
    "jsx": true,
  },

  "rules": {
    "jsx-quotes": [ 2, "prefer-double" ],
    "react/jsx-closing-bracket-location": [ 2, "tag-aligned" ],
    "react/jsx-curly-spacing": [ 2, "always" ],
    "react/jsx-indent-props": [ 2, 2 ],
    "react/jsx-no-duplicate-props": 2,
    "react/jsx-no-literals": 2,
    "react/jsx-no-undef": 2,
    "react/jsx-uses-react": 2,
    "react/jsx-uses-vars": 2,
    "react/no-did-mount-set-state": 2,
    "react/no-did-update-set-state": 2,
    "react/no-direct-mutation-state": 2,
    "react/no-multi-comp": 2,
    "react/no-unknown-property": 2,
    "react/prefer-es6-class": 2,
    "react/prop-types": 2,
    "react/react-in-jsx-scope": 2,
    "react/require-extension": 2,
    "react/self-closing-comp": 2,
    "react/sort-comp": 2,
    "react/wrap-multilines": 2,
  },
}
