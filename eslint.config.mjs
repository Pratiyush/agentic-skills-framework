import tseslint from "@typescript-eslint/eslint-plugin";
import tsparser from "@typescript-eslint/parser";
import eslintConfigPrettier from "eslint-config-prettier";

export default [
  // Global ignores
  {
    ignores: ["**/dist/", "**/node_modules/", "**/.turbo/", "**/docs/", "**/test-results/"],
  },

  // TypeScript files
  {
    files: ["packages/*/src/**/*.ts"],
    languageOptions: {
      parser: tsparser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
      },
    },
    plugins: {
      "@typescript-eslint": tseslint,
    },
    rules: {
      ...tseslint.configs.recommended.rules,
      "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
      "prefer-const": "error",
      "no-var": "error",
      "no-console": "warn",
    },
  },

  // CLI package — allow console usage
  {
    files: ["packages/cli/src/**/*.ts"],
    rules: {
      "no-console": "off",
    },
  },

  // Prettier must be last to disable conflicting rules
  eslintConfigPrettier,
];
