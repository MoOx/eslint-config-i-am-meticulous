# eslint-config-i-am-meticulous

> An ESLint shareable config for meticulous people.

[![Travis (Unix) Build Badge](https://img.shields.io/travis/MoOx/eslint-config-i-am-meticulous/master.svg?label=unix build)](https://travis-ci.org/MoOx/eslint-config-i-am-meticulous)

_This config is fresh and will likely evolve (don't worry, semver is our friend)._  
**If you have any question about a rule or want to discuss about it, please open an issue.**

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

### Meticulous ES

Add to your eslint configuration (here, in `package.json`)

```json
{
  "eslintConfig": {
    "extends": "eslint-config-i-am-meticulous"
  }
}
```

### React

To use the meticulous React rule set:

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

## I WANT EVERYTHING

```console
$ npm i -D eslint eslint-plugin-react eslint-config-i-am-meticulous
```

```json
{
  "eslintConfig": {
    "extends": [
      "eslint-config-i-am-meticulous",
      "eslint-config-i-am-meticulous/react"
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
