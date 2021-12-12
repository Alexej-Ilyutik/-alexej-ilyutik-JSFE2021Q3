module.exports = {
    "env": {
        "es6": true,
        "browser": true,
        "node": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": 13,
        "sourceType": "module"
    },
    "plugins": [
        "prettier",
        "@typescript-eslint"
    ],
    "rules": {
         "no-debugger": "off",
        "no-console": 0,
        "class-methods-use-this": "off",
        "no-explicit-any": 2,
        "prettier/prettier": "error"
    }
};
