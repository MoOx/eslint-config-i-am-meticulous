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

To use the meticulous React rule set (that extends the default one):

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

### AVA

To use the meticulous AVA rule set (that extends the default one):

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

## CONTRIBUTING

* ⇄ Pull requests and ★ Stars are always welcome.
* For bugs and feature requests, please create an issue.
* Pull requests must be accompanied by passing automated tests (`$ npm test`).

## [CHANGELOG](CHANGELOG.md)

## [LICENSE](LICENSE)
