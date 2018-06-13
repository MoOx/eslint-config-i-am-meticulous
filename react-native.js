module.exports = {
  extends: ["plugin:import/react-native", "./react-flow.js"],

  env: {
    "react-native/react-native": true
  },

  plugins: ["react-native"],

  rules: {
    "react-native/no-unused-styles": 2,
    "react-native/split-platform-components": 2,
    "react-native/no-inline-styles": 0, // often boring
    "react-native/no-color-literals": 0 // too subjective
  }
};
