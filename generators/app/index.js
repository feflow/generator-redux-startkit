"use strict";
const Generator = require("yeoman-generator");
const chalk = require("chalk");
const yosay = require("yosay");

module.exports = class extends Generator {
    prompting() {
        // Have Yeoman greet the user.
        this.log(yosay(`欢迎使用 ${chalk.red("generator-redux-startkit")}！`));

        const prompts = [
            {
                type: "confirm",
                name: "someAnswer",
                message: "Would you like to enable this option?",
                default: true
            },
            {
                type: "input",
                name: "name",
                message: "请输入项目名称：",
                default: "default project"
            },
            {
                type: "input",
                name: "description",
                message: "请输入项目描述：",
                default: "default description"
            },
            {
                type: "input",
                name: "moduleName",
                message: "请输入项目一级目录名（可后续在feflow.json中改动）：",
                default: "module"
            },
            {
                type: "input",
                name: "bizName",
                message:
                    "请输入项目的二级目录名（可后续在feflow.json中改动）：",
                default: "biz"
            }
        ];

        return this.prompt(prompts).then(props => {
            console.log("answers: ", props);
            // To access props later use this.props.someAnswer;
            this.answers = props;
        });
    }

    writing() {
        const { name, description, moduleName, bizName } = this.answers;
        this.fs.copyTpl(
            this.templatePath("package.json"),
            this.destinationPath("package.json"),
            {
                name: name,
                description: description
            }
        );
        this.fs.copyTpl(
            this.templatePath("feflow.json"),
            this.destinationPath("feflow.json"),
            {
                moduleName: moduleName,
                bizName: bizName
            }
        );

        this.fs.copyTpl(
            this.templatePath("README.md"),
            this.destinationPath("README.md"),
            {
                moduleName: moduleName,
                bizName: bizName
            }
        );

        this.fs.copy(
            this.templatePath("_gitignore"),
            this.destinationPath(".gitignore")
        );

        this.fs.copy(
            this.templatePath("_gitattributes"),
            this.destinationPath(".gitattributes")
        );

        this.fs.copy(
            this.templatePath("_editorconfig"),
            this.destinationPath(".editorconfig")
        );

        this.fs.copy(
            this.templatePath("_eslintrc.js"),
            this.destinationPath(".eslintrc.js")
        );

        this.fs.copy(
            this.templatePath("_babelrc"),
            this.destinationPath(".babelrc")
        );

        this.fs.copy(this.templatePath("src"), this.destinationPath("src"));
    }

    install() {
        this.installDependencies();
    }
};
