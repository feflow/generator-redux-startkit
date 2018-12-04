
[![](https://img.shields.io/travis/feflow/generator-redux-startkit.svg)](https://travis-ci.com/feflow/generator-redux-startkit)
[![Codecov](https://img.shields.io/codecov/c/github/feflow/generator-redux-startkit/master.svg)](https://codecov.io/gh/feflow/generator-redux-startkit/branch/master)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

# generator-redux-startkit
A generator for multiple-page application with react and redux.

基于react和redux的多页面项目模板。用于[feflow](http://www.feflowjs.org/zh-cn/docs/)

# 快速开始

## 安装feflow
``` bash
$ npm install feflow-cli -g
```

## 安装脚手架
``` bash
$ feflow install generator-redux-startkit
```

## 初始化项目
``` bash
$ feflow init
# 输入相关参数
$ cd <folder>
```

## 本地开发
``` bash
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

本项目采用`Eslint`+`Prettier`代码风格，对于代码格式检查比较严格，如果遇到不知道如何解决的Eslint报错，可以使用`eslint . --fix`进行代码格式化，如果使用vscode，`command + shift + P` 输入`Format Document`执行代码格式化。

## 构建输出及域名相关

假设你需要在`xx.qq.com`上部署一个项目为`xx.qq.com/module/business`，参考`feflow.json`配置如下：

```sh
{
    "builderType": "builder-webpack3",
    "builderOptions": {
        "product": "now",                                    // 产品，此处可以是 now 或者 shangfen
        "domain": "now.qq.com",                              // 域名，离线包的域名需要使用
        "cdn": "11.url.cn",                                  // 资源发布到的cdn名称
        "moduleName": "module",                              // 部署的模块
        "bizName": "business",                               // 业务名称
        "minifyHTML": true,                                  // 是否压缩 html
        "minifyCSS": true,                                   // 是否压缩 js
        "minifyJS": true,                                    // 是否压缩 css
        "inlineCSS": true,                                   // 生成的 css 是否内联到首屏
        "usePx2rem": true,                                   // 是否使用 Rem
        "useReact": true,                                    // 是否是 React，如果为false，则不会在 html 中引用 React 框架 
        "remUnit": 37.5,                                     // Rem 单位，对于 375 视觉稿，此处填写 37.5，750视觉稿需要改成 75 
        "remPrecision": 8,                                   // Rem 的精度，即 px 转换成了 rem 后的小数点后位数
        "inject": true,                                      // 打包生成的 js 文件是否自动注入到 html 文件 body 之后
        "port": 8001,                                        // 本地开发的 webpack 构建服务进程端口号
        "externals": [                                       // 基础框架不打入到 bundle 里面
            {
                "module": "react",
                "entry": "//11.url.cn/now/lib/16.2.0/react.min.js?_bid=3123",
                "global": "React"
            },
            {
                "module": "react-dom",
                "entry": "//11.url.cn/now/lib/16.2.0/react-dom.min.js?_bid=3123",
                "global": "ReactDOM"
            }
        ]
    }
}
```

构建后，以`index.html`为例，最终输出的url为`xx.qq.com/module/business/index.html`，其中引入的cdn资源url为``