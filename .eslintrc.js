module.exports = {
  root: true,
  env: {
    node: true,
  },
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
    "plugin:prettier/recommended",
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  overrides: [
    {
      files: "scripts/**/*.ts",
      rules: {
        "no-console": "off",
        "@typescript-eslint/no-var-requires": "off",
        "@typescript-eslint/no-namespace": "off",
        "prettier/prettier": [
          "error",
          {
            trailingComma: "es5",
            tabWidth: 4,
            semi: true,
            singleQuote: true,
          },
        ],
      },
    },
  ],
};
