module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "node": true
    },
    "settings": {
        "react": {
          "version": 'detect',
        },
      },
    "extends": "eslint:recommended",
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2020,
        "sourceType": "module"
    },
    "plugins": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:jest/recommended",
        "prettier",
        "prettier/react",
    ],
    "rules": {
        "indent": [
            "error",
            "tab"
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ]
    }
};