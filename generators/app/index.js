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
                name: "domain",
                message: "请输入项目域名（如qq.com）：",
                default: "qq.com"
            },
            {
                type: "input",
                name: "cdn",
                message:
                    "请输入项目使用的cdn域名（可省略，默认和网站域名相同）：",
                default: "module"
            },
            {
                type: "input",
                name: "dir",
                message:
                    "请输入项目子目录名（如mobile/activity，可后续在feflow.json中改动）：",
                default: "module/biz"
            }
        ];

        return this.prompt(prompts).then(props => {
            // To access props later use this.props.someAnswer;
            this.answers = props;
        });
    }

    writing() {
        const { name, description, domain, cdn, dir } = this.answers;
        const [moduleName, bizName] = dir.split("/");
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
                domain: domain,
                cdn: cdn || domain,
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
