# 9.0.1 - 2018-06-07

- Bump dep/devDeps to ensure compat with rules

# 9.0.0 - 2018-06-07

- `import/no-self-import` enabled
- `import/no-useless-path-segments`: enabled
- `react/no-did-mount-set-state` disabled
- `react/no-did-update-set-state` disabled

# 8.0.0 - 2018-02-09

- (`flowtype/no-unused-expressions`) Avoid keeping unused type annotations
- (`flowtype/type-id-match`) Remove type naming restriction
- (`flowtype/no-mutable-array`) Disallow `Array` in favor of `$ReadOnlyArray`
- (`flowtype/require-exact-type`) Disallow inexact object types (`{| |}` notation is required).
- (`react/sort-comp`) Allow type annotations and instance variables at the top of React class components

# 7.0.1 - 2017-09-06

- `react-native` correctly extends `react-flow`

# 7.0.0 - 2017-09-06

- Eslint 4+
- Updated all plugins with new (undefined) rules (some on, some off)
- Globals to prevent "no-undef" with Flow ([ref](https://github.com/gajus/eslint-plugin-flowtype/issues/261))

# 6.0.1 - 2017-04-19

- Relaxed: `flowtype/type-id-match` is less strict.
  It accepts lowercase for the first letter (eg: for function type)

# 6.0.0 - 2017-03-23

- Removed: all rules directly related to code styles have been removed.
  **We recommend you to use [prettier](https://github.com/prettier/prettier).**
- Changed: eslint `ecmaVersion` set to `2017`
- Added: some rules for flow
  ([7a36807](https://github.com/MoOx/eslint-config-i-am-meticulous/commit/7a36807f5b0016fd5fefdb880c7e667b13202c54) &
  [98c6bae](https://github.com/MoOx/eslint-config-i-am-meticulous/commit/98c6bae6b38b77143c78b4ccd74e9b508fdf3dd8))

# 5.0.2 - 2016-09-24

- Fixed: `babel-eslint` is not required for the default config

# 5.0.1 - 2016-09-24

- Fixed: json files cause too much issue with import plugin, so ignored.

# 5.0.0 - 2016-09-24

- Changed: eslint@3 compat
- Added: lot of missings rules related to package updates (mainly for react)
  - eslint-plugin-react@6
  - eslint-plugin-ava@3
- Added: [`eslint-plugin-import`](https://github.com/benmosher/eslint-plugin-import)
  is now included in the default config.
  All rules are on except `no-nodejs-modules` which depends on the env.
- Added: [`react/jsx-first-prop-new-line`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-first-prop-new-line.md)
  with `multiline` value to enforce first prop on a new line if there is
  multiple props.  
  The following patterns are now considered warnings:

  ```js
  <Hello personal prop />
  ```

  The following patterns are now not considered warnings:

  ```js
  <Hello personal={true} />

  <Hello
      personal={true}
      foo="bar"
  />
  ```

- Added: [`react/jsx-no-target-blank`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-target-blank.md).
  This rules requires that you accompany all `target='_blank'` attributes with
  `rel='noreferrer noopener'`
  [for security reasons](https://mathiasbynens.github.io/rel-noopener/).
- Added: [`eslint-plugin-react-native`](https://github.com/Intellicode/eslint-plugin-react-native)
  available as `eslint-config-i-am-meticulous/react-native`.

# 4.2.1 - 2016-04-12

- Added: react/require-render-return

# 4.1.1 - 2016-04-11

- Fixed: as `jsx-indent` is
  [considered buggy](https://github.com/yannickcr/eslint-plugin-react/issues/540),
  the rule is for now disabled. If re-enabled, will be done in a major release.

# 4.1.0 - 2016-03-25

- Added: react-flow preset.
  Flow support for props and state property initializers at the top of React
  classes (so "react/sort-comp" as been adjusted).

# 4.0.0 - 2016-03-23

**New rules added.**

- Changed: All react rules defined, just a few are disabled.
- Added: AVA rule set (just recommended rule)
- Added: flow rule set (just recommended rule)

# 3.0.0 - 2016-02-29

**Not changes for rules.**

- Removed: eslint@1.x support
- Added: eslint@2.x support

# 2.0.0 - 2016-01-20

- Removed: "babel-eslint" is not used by default
- Changed: react preset extends the default, no need to include both now
- Added: es5 preset

# 1.0.0 - 2016-01-03

💥
