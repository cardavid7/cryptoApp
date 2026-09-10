// @ts-check
const tseslint = require("typescript-eslint");
const angular = require("angular-eslint");

/**
 * Flat config mirroring the project's previous `.eslintrc.json`:
 * the Angular ESLint recommended sets plus the two selector rules.
 */
module.exports = tseslint.config(
  {
    files: ["**/*.ts"],
    extends: [...angular.configs.tsRecommended],
    processor: angular.processInlineTemplates,
    rules: {
      "@angular-eslint/directive-selector": [
        "error",
        { type: "attribute", prefix: "app", style: "camelCase" },
      ],
      "@angular-eslint/component-selector": [
        "error",
        { type: "element", prefix: "app", style: "kebab-case" },
      ],
      // This project intentionally uses NgModules and constructor DI.
      "@angular-eslint/prefer-standalone": "off",
      "@angular-eslint/prefer-inject": "off",
    },
  },
  {
    files: ["**/*.html"],
    extends: [...angular.configs.templateRecommended],
    rules: {
      "@angular-eslint/template/prefer-control-flow": "off",
    },
  },
);
