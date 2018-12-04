module.exports = {
    extends: ["xo", "prettier"],
    env: {
        "es6": true,
        "browser": true,
        "node": true
    },
    rules: {
        "prettier/prettier": "error"
    },
    plugins: ["prettier"]
};
