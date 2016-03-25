# eslint-config-i-am-meticulous

> An ESLint shareable config for meticulous people.

[![Travis (Unix) Build Badge](https://img.shields.io/travis/MoOx/eslint-config-i-am-meticulous/master.svg?label=unix%20build)](https://travis-ci.org/MoOx/eslint-config-i-am-meticulous)

If you have any question about a rule or want to discuss about it, please open an issue.

## Install

```console
$ npm i -D eslint eslint-config-i-am-meticulous
```

## Usage

### Notes

- This config extends `eslint:recommended`.
- You will need to adjust configuration syntax depending on your configuration
  location (`package.json` or `.eslintrc`).
- You might need to use ``babel-eslint`` if you use babel with fresh ES stages.

### Meticulous modern ES

Add to your eslint configuration (here, in `package.json`)

```json
{
  "eslintConfig": {
    "extends": "eslint-config-i-am-meticulous"
  }
}
```

### React

To use the meticulous
[React](https://github.com/facebook/react)
rule set (that extends the default one):

```console
$ npm i -D eslint eslint-plugin-react eslint-config-i-am-meticulous
```

```json
{
  "eslintConfig": {
    "extends": "eslint-config-i-am-meticulous/react"
  }
}
```

### Flow

To use the meticulous
[flow](https://github.com/facebook/react)
rule set (that extends the default one):

_This rule set require babel-eslint._

```console
$ npm i -D eslint babel-eslint eslint-plugin-flow-vars eslint-config-i-am-meticulous
```

```json
{
  "eslintConfig": {
    "parser": "babel-eslint",
    "extends": "eslint-config-i-am-meticulous/flow"
  }
}
```

### React + Flow

To use the meticulous
[React](https://github.com/facebook/react)
+
[flow](https://github.com/facebook/react)
rule set (that extends the default one):

_This rule set require babel-eslint._

```console
$ npm i -D eslint babel-eslint eslint-plugin-flow-vars eslint-config-i-am-meticulous
```

```json
{
  "eslintConfig": {
    "parser": "babel-eslint",
    "extends": "eslint-config-i-am-meticulous/react-flow"
  }
}
```

_This rule set is a combination of react and flow rule sets but add a tiny
change to support props and state property initializers to be added at the top
of classes (react/sort-comp default configuration does not allow that)._

### AVA

To use the meticulous
[AVA](https://github.com/sindresorhus/ava)
rule set (that extends the default one):

```console
$ npm i -D eslint eslint-plugin-ava eslint-config-i-am-meticulous
```

```json
{
  "eslintConfig": {
    "extends": "eslint-config-i-am-meticulous/ava"
  }
}
```

### Old ES5

To use the meticulous ES5 rule set (that extends the default one):

```console
$ npm i -D eslint eslint-plugin-react eslint-config-i-am-meticulous
```

```json
{
  "eslintConfig": {
    "extends": "eslint-config-i-am-meticulous/es5"
  }
}
```

---

### React, Flow, AVA... Everything!


```console
$ npm i -D eslint babel-eslint eslint-plugin-react eslint-plugin-flow-vars eslint-plugin-ava eslint-config-i-am-meticulous
```

```json
{
  "eslintConfig": {
    "parser": "babel-eslint",
    "extends": [
      "eslint-config-i-am-meticulous/react-flow",
      "eslint-config-i-am-meticulous/ava"
    ]
  }
}
```

---

## CONTRIBUTING

* ⇄ Pull requests and ★ Stars are always welcome.
* For bugs and feature requests, please create an issue.
* Pull requests must be accompanied by passing automated tests (`$ npm test`).

## [CHANGELOG](CHANGELOG.md)

## [LICENSE](LICENSE)
