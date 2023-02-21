module.exports = {
  env: {
    es6: true,
  },
  ignorePatterns: ["**/dist/**", "**/node_modules/**"],
  extends: ["plugin:@darraghor/nestjs-typed/recommended", "google",
    "plugin:@darraghor/nestjs-typed/no-swagger", "plugin:@typescript-eslint/recommended"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: ["./tsconfig.json"],
    sourceType: "module",
    ecmaVersion: "es2019",
  },
  rules: {
    "new-cap": "off",
    "require-jsdoc": "off",
    "max-len": "off",
    "@darraghor/nestjs-typed/all-properties-have-explicit-defined": "off",
    "@darraghor/nestjs-typed/all-properties-are-whitelisted": "off",
    "semi": [
      "error",
      "never"
    ],
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": ["warn"]

  },
  plugins: ["@darraghor/nestjs-typed","@typescript-eslint"],
};
