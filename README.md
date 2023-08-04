# eslint-plugin-template-literal-tag-classname

<!--
[![npm version](https://img.shields.io/npm/v/eslint-plugin-template-literal-tag-classname.svg)](https://www.npmjs.com/package/eslint-plugin-template-literal-tag-classname)
[![Downloads/month](https://img.shields.io/npm/dm/eslint-plugin-template-literal-tag-classname.svg)](http://www.npmtrends.com/eslint-plugin-template-literal-tag-classname)
[![Build Status](https://travis-ci.org/mysticatea/eslint-plugin-template-literal-tag-classname.svg?branch=master)](https://travis-ci.org/mysticatea/eslint-plugin-template-literal-tag-classname)
[![Coverage Status](https://codecov.io/gh/mysticatea/eslint-plugin-template-literal-tag-classname/branch/master/graph/badge.svg)](https://codecov.io/gh/mysticatea/eslint-plugin-template-literal-tag-classname)
[![Dependency Status](https://david-dm.org/mysticatea/eslint-plugin-template-literal-tag-classname.svg)](https://david-dm.org/mysticatea/eslint-plugin-template-literal-tag-classname)
-->

Provides linting for classnames constructed using a tag.

## Installation

```
$ yarn add --save-dev eslint eslint-plugin-template-literal-tag-classname
```

```
$ npm install --save-dev eslint eslint-plugin-template-literal-tag-classname
```

### Requirements

- Node.js v8.10.0 or newer versions.
- ESLint v5.16.0 or newer versions.

## Usage

Write your config file such as `.eslintrc.yml`.

```json
{
  "plugins": ["@typescript-eslint"],
  "rules": {
    "template-literal-tag-classname/example-rule": "error"
  }
}
```

See also [Configuring ESLint](https://eslint.org/docs/user-guide/configuring).

## Configs

- `template-literal-tag-classname/recommended` ... enables the recommended rules.

## Rules

<!--RULE_TABLE_BEGIN-->

### Stylistic Issues

| Rule ID                                                                     | Description      |     |
| :-------------------------------------------------------------------------- | :--------------- | :-: |
| [template-literal-tag-classname/example-rule](./docs/rules/example-rule.md) | An example rule. | ⭐️ |

<!--RULE_TABLE_END-->

## Semantic Versioning Policy

This plugin follows [Semantic Versioning](http://semver.org/) and [ESLint's Semantic Versioning Policy](https://github.com/eslint/eslint#semantic-versioning-policy).

## Changelog

- [GitHub Releases]()

## Contributing

Welcome your contribution!

See also [ESLint Contribution Guide](https://eslint.org/docs/developer-guide/contributing/).

### Development Tools

- `yarn run test` runs tests.
- `yarn run update` updates the package version. And it updates `src/configs/recommended.ts`, `lib/index.ts`, and `README.md`'s rule table.
- `yarn run add-rule <RULE_ID>` creates three files to add a new rule.
