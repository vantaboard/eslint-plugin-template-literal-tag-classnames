# template-literal-tag-classname/no-deeply-nested

> An example rule.
>
> - ⭐️ This rule is included in `plugin:template-literal-tag-classname/recommended` preset.

This is an example.

## Rule Details

This rule aimed at disallowing `example` identifiers.

Examples of **incorrect** code:

```ts
/*eslint template/no-deeply-nested: error */

var example = 1;
```

Examples of **correct** code:

```ts
/*eslint template/no-deeply-nested: error */

var foo = 1;
```

## Options

Nothing.

## Implementation

- [Rule source](../../src/rules/no-deeply-nested.ts)
- [Test source](../../tests/rules/no-deeply-nested.ts)
