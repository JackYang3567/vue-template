module.exports = {
    root: true,
    env: {
        node: true
    },
    "extends": [
        "plugin:vue/essential",
        "@vue/standard"
    ],
    rules: {
        "no-tabs": "off",
        "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
        "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
        "array-callback-return": "error",
        "indent": ["error", 4, { "SwitchCase": 1 }],
        "block-spacing": "error",
        "brace-style": ["error", "1tbs"],
        "camelcase": ["error", { "properties": "never" }],
        "callback-return": ["error", ["cb", "callback", "next"]],
        "comma-spacing": "error",
        "comma-style": ["error", "last"],
        "consistent-return": "error",
        "curly": ["error", "all"],
        "default-case": "error",
        "dot-notation": ["error", { "allowKeywords": false }],
        "eol-last": "error",
        "eqeqeq": "error",
        "guard-for-in": "error",
        "key-spacing": ["error", { "beforeColon": false, "afterColon": true }],
        "keyword-spacing": "error",
        "lines-around-comment": ["error", {
            "beforeBlockComment": true,
            "afterBlockComment": false,
            "beforeLineComment": true,
            "afterLineComment": false
        }],
        "new-cap": "error",
        "newline-after-var": ["error", "never"],
        "new-parens": "error",
        "no-array-constructor": "error",
        "no-invalid-this": "error",
        "no-multi-spaces": "error",
        "no-redeclare": "error",
        "no-return-assign": "error",
        "no-spaced-func": "error",
        "no-trailing-spaces": "error",
        "semi": "error",
        "semi-spacing": "error",
        "quotes": ["error", "double"],
        "space-before-function-paren": ["error", "never"],
        "space-in-parens": "error",
        "space-infix-ops": "error",
        "space-unary-ops": ["error", { "words": true, "nonwords": false }],
        "spaced-comment": "error",
        "yoda": ["error", "never"],
        "no-mixed-requires": "error",
        "handle-callback-err": ["error", "err"],

        // 空行最多不能超过100行
        "no-multiple-empty-lines": [0, { "max": 100 }],

        // 关闭禁止混用tab和空格
        "no-mixed-spaces-and-tabs": [0]
    },
    parserOptions: {
        parser: "babel-eslint"
    }
}
