import { TSESLint } from "@typescript-eslint/experimental-utils";
import rule from "../../src/rules/no-deeply-nested";

new TSESLint.RuleTester().run("no-deeply-nested", rule, {
  valid: ["var foo = 1;"],
  invalid: [
    {
      code: "var example = 1;",
      errors: [{ messageId: "disallowExample" }],
    },
  ],
});
