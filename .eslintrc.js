module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["plugin:vue/essential", "eslint:recommended","@vue/prettier"],
  plugins:["prettier"],
  parserOptions: {
    parser: "babel-eslint",
    sourceType: 'module',
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  rules: {
    "prettier/prettier": "error",
    "keyword-spacing": ["error", { before: true, after: true }],
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off"
  }
};
