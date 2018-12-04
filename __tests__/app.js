"use strict";
const path = require("path");
const assert = require("yeoman-assert");
const helpers = require("yeoman-test");

describe("generator-redux-startkit:app", () => {
    beforeAll(() => {
        return helpers
            .run(path.join(__dirname, "../generators/app"))
            .withPrompts({
                name: "demo project",
                description: "demo project description",
                moduleName: "module",
                bizName: "biz"
            });
    });

    it("creates files", () => {
        assert.file([
            ".babelrc",
            ".editorconfig",
            ".eslintrc.js",
            "README.md",
            "src/pages/index/container/index.js",
            "src/pages/index/index.html"
        ]);
    });
});
