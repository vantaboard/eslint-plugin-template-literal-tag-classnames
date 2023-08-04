"use strict";

export = {
  configs: {
    recommended: import("./configs/recommended"),
  },
  rules: {
    "no-deeply-nested": import("./rules/no-deeply-nested"),
  },
};
