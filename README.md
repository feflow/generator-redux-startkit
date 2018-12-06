
[![npm version](https://badge.fury.io/js/generator-redux-startkit.svg)](https://badge.fury.io/js/generator-redux-startkit)
[![](https://img.shields.io/travis/feflow/generator-redux-startkit.svg)](https://travis-ci.com/feflow/generator-redux-startkit)
[![codecov](https://codecov.io/gh/feflow/generator-redux-startkit/branch/master/graph/badge.svg)](https://codecov.io/gh/feflow/generator-redux-startkit)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](http://makeapullrequest.com)

# generator-redux-startkit
A generator for multiple-page application with react and redux.

基于react和redux的多页面项目模板。用于[feflow]。(http://www.feflowjs.org/zh-cn/docs/)

# 快速开始

``` bash
## 安装feflow
$ npm install feflow-cli -g
## 安装脚手架
$ feflow install generator-redux-startkit
## 初始化项目
$ feflow init
# 输入相关参数
$ cd <folder>
## 本地开发
$ feflow dev
# 访问默认端口http://127.0.0.1:8001
```

# 项目规范

## 目录结构

本项目采用多页面、共模块的目录结构。可以利用到React/Redux的开发效率及可读性，也适合于在app中进行多个内嵌页面的hybird开发。

所有页面在`src/pages`下，每个页面都遵循[Rails-style](https://redux.js.org/faq/codestructure#what-should-my-file-structure-look-like-how-should-i-group-my-action-creators-and-reducers-in-my-project-where-should-my-selectors-go)目录结构，下面以`index`页面为例，介绍一个页面中的目录结构：

```
└── index
    ├── actions // 存放action
    ├── assets // 图片等静态资源
    ├── components // 页面公用组件
    ├── connect // connect相关
    ├── container // 容器
    ├── index.html
    ├── init.js // 启动入口js
    ├── reducers // reducers
    ├── root // 根组件，处理热更新
    └── stores // stores
```

## 代码规范

本项目采用`Eslint`+`Prettier`代码风格，对于代码格式检查比较严格，如果遇到不知道如何解决的Eslint报错，可以使用`eslint . --fix`进行代码格式化，如果使用vscode，`command + shift + P` 输入`Format Document`执行代码自动格式化。


# 如何贡献

1. 从目前已经存在的issue或者提出一个新的issue去讨论新的特性或者存在的bug。
2. 在Github上Fork [仓库](https://github.com/feflow/generator-redux-startkit)，然后在master或者其它分支上开始进行您的修改。
3. 编写测试用例表明某个bug被修复掉了或者新的特性可以正常工作。
4. 提交PR，如果通过了测试并且覆盖率没问题，会进行Code Review并合并。