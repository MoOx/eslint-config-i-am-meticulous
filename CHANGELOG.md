# 5.0.0 - 2016-09-24

- Changed: eslint@3 compat
- Added: lot of missings rules related to package updates (mainly for react)
  - eslint-plugin-react@6
  - eslint-plugin-ava@3
- Added: [``eslint-plugin-import``](https://github.com/benmosher/eslint-plugin-import)
  is now included in the default config.
  All rules are on except ``no-nodejs-modules`` which depends on the env.
- Added: [``react/jsx-first-prop-new-line``](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-first-prop-new-line.md)
  with ``multiline`` value to enforce first prop on a new line if there is
  multiple props.  
  The following patterns are now considered warnings:

  ```js
  <Hello personal
      prop />
  ```

  The following patterns are now not considered warnings:

  ```js
  <Hello personal={true} />

  <Hello
      personal={true}
      foo="bar"
  />
  ```

- Added: [``react/jsx-no-target-blank``](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-target-blank.md).
  This rules requires that you accompany all ``target='_blank'`` attributes with
  ``rel='noreferrer noopener'``
  [for security reasons](https://mathiasbynens.github.io/rel-noopener/).
- Added: [``eslint-plugin-react-native``](https://github.com/Intellicode/eslint-plugin-react-native)
  available as ``eslint-config-i-am-meticulous/react-native``.


# 4.2.1 - 2016-04-12

- Added: react/require-render-return

# 4.1.1 - 2016-04-11

- Fixed: as ``jsx-indent`` is
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
