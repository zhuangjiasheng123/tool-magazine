## **keybindings.json**

```json
[
  {
    "key": "ctrl+shift+/",
    "command": "editor.action.blockComment",
    "when": "editorTextFocus && !editorReadonly"
  },
  {
    "key": "shift+enter",
    "command": "editor.action.insertLineBefore",
    "when": "editorTextFocus && !editorReadonly"
  },
  {
    "key": "shift+alt+a",
    "command": "-editor.action.blockComment",
    "when": "editorTextFocus && !editorReadonly"
  },
  { "key": "ctrl+q", "command": "expand_region", "when": "editorTextFocus" },
  {
    "key": "ctrl+shift+f",
    "command": "undo_expand_region",
    "when": "editorTextFocus && editorHasSelection"
  },
  {
    "key": "ctrl+shift+y",
    "command": "editor.emmet.action.evaluateMathExpression"
  },
  {
    "key": "ctrl+shift+q",
    "command": "editor.action.transformToUppercase",
    "when": "editorTextFocus"
  },
  {
    "key": "ctrl+k ctrl+u",
    "command": "-editor.action.transformToUppercase",
    "when": "editorTextFocus"
  },
  {
    "key": "ctrl+shift+a",
    "command": "editor.action.transformToLowercase",
    "when": "editorTextFocus"
  },
  {
    "key": "ctrl+k ctrl+l",
    "command": "-editor.action.transformToLowercase",
    "when": "editorTextFocus"
  },
  {
    "key": "ctrl+enter",
    "command": "-editor.openSubdocument",
    "when": "editorTextFocus"
  },
  {
    "key": "ctrl+shift+s",
    "command": "editor.action.deleteLines",
    "when": "textInputFocus && !editorReadonly"
  },
  {
    "key": "ctrl+shift+k",
    "command": "-editor.action.deleteLines",
    "when": "textInputFocus && !editorReadonly"
  },
  {
    "key": "shift+alt+s",
    "command": "workbench.action.files.saveAll"
  },
  {
    "key": "ctrl+k s",
    "command": "-workbench.action.files.saveAll"
  }
]

```

## **settings.json**

```json
{
  "editor.renderControlCharacters": true,
  "window.zoomLevel": 4,
  "workbench.sideBar.location": "left",
  "editor.minimap.enabled": false,
  "open-in-browser.default": "chrome",
  "editor.tabSize": 2,
  "workbench.activityBar.visible": true,
  "editor.snippetSuggestions": "top",
  // "editor.tabCompletion": "on",
  "workbench.startupEditor": "newUntitledFile",
  "emmet.triggerExpansionOnTab": true,
  "files.associations": {
    "*.tpl": "html",
    "*.xtpl": "html",
    "*.vue": "vue",
    "*.wxml": "html",
    "*.wxss": "less",
    "*.wpy": "vue",
    "*.mpx": "vue",
    "*.cjson": "jsonc",
    "*.wxs": "javascript",
    "*.js": "javascript"
  },
  "editor.tokenColorCustomizations": {
    // "comments": "#FF9900",
    "comments": "#FF9977"
  },
  "extensions.ignoreRecommendations": true,
  "vetur.format.defaultFormatter.html": "js-beautify-html",
  "git.ignoreMissingGitWarning": true,
  "window.menuBarVisibility": "default",
  // 是否开启编译 scss对应的souceMap文件
  "liveSassCompile.settings.generateMap": true,
  "explorer.confirmDelete": false,
  "problems.autoReveal": false,
  "explorer.confirmDragAndDrop": false,
  "files.exclude": {
    "**/.git": true,
    "**/.svn": true,
    "**/.hg": true,
    "**/CVS": true,
    "**/.DS_Store": true,
    // 隐藏node包
    "node_modules/": true,
    "dist": true
  },
  "liveServer.settings.donotShowInfoMsg": true,
  "breadcrumbs.enabled": true,
  "git.enabled": false,
  "workbench.statusBar.feedback.visible": false,
  "editor.fontSize": 13,
  "workbench.editor.highlightModifiedTabs": true,
  "workbench.iconTheme": "material-icon-theme",
  "javascript.updateImportsOnFileMove.enabled": "never",
  // "vetur.format.defaultFormatter.scss": "prettier",
  // "vetur.validation.style": false
  "terminal.integrated.rendererType": "dom",
  "[html]": {
    "editor.defaultFormatter": "vscode.html-language-features"
  },
  "[json]": {
    "editor.defaultFormatter": "vscode.json-language-features"
  },
  "[javascript]": {
    "editor.defaultFormatter": "vscode.typescript-language-features"
  },
  "less.compile": {
    // "outExt": ".wxss"
  },
  "emmet.includeLanguages": {
    "wxml": "html"
  },
  "minapp-vscode.disableAutoConfig": true,
  "[javascriptreact]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
},
"[jsonc]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
},
"workbench.colorTheme": "Monokai",
"php.suggest.basic": false,
"php.validate.enable": false
}

```

## **javascript.json 快捷代码**

```json
{
  "打印文本": {
    "prefix": "log",
    "body": [
      "console.log($1);"
    ],
    "description": "打印输出"
  },
  "根据id获取元素": {
    "prefix": "dgi",
    "body": [
      "document.getElementById('$1');"
    ],
    "description": "根据id获取元素"
  },
  "根据标签名获取元素": {
    "prefix": "dgt",
    "body": [
      "document.getElementsByTagName('$1');"
    ],
    "description": "根据标签名获取元素"
  },
  "根据类名获取元素": {
    "prefix": "dgc",
    "body": [
      "document.getElementsByClassName('$1');"
    ],
    "description": "根据类名获取元素"
  },
  "h5获取元素": {
    "prefix": "dqs",
    "body": [
      "document.querySelector('$1');"
    ],
    "description": "h5获取元素"
  },
  "h5获取所有": {
    "prefix": "dqa",
    "body": [
      "document.querySelectorAll('$1');"
    ],
    "description": "h5获取元素"
  },
  "彩色彩印": {
    "prefix": "colog",
    "body": [
      " console.log('%c'+$1,\"color:red;font-size:100px;background-image:linear-gradient(to right,#0094ff,pink)\");"
    ],
    "description": "h5获取元素"
  
  },
  "react组件的基本结构": {
    "prefix": "rrr",
    "body": [
      "import React, { Component, Fragment } from 'react';\n class $TM_FILENAME_BASE extends Component { \n render() { \n return ( \n <Fragment>$TM_FILENAME_BASE</Fragment> \n );  \n} \n } \n export default $TM_FILENAME_BASE;"
    ],
    "description": "react组件的基本结构"
  }
}
```

## node需要安装的依赖

```js
npm i nodemon -g    //快捷更新
npm  i  express  ejs  mysql  body-parser -S
ren  *.html   *.ejs   //修改文件后缀
 yarn add art-template
yarn add url
npm i bootstrap -S
```

## npm语法

```js
npm是什么
npm install 安装模块
npm uninstall 卸载模块
npm update 更新模块
npm outdated 检查模块是否已经过时
npm ls 查看安装的模块
npm init 在项目中引导创建一个package.json文件
npm help 查看某条命令的详细帮助
npm root 查看包的安装路径
npm config 管理npm的配置路径
npm cache 管理模块的缓存
npm start 启动模块
npm stop 停止模块
npm restart 重新启动模块
npm test 测试模块
npm version 查看模块版本
npm view 查看模块的注册信息
npm adduser  用户登录
npm publish 发布模块
npm access 在发布的包上设置访问级别
npm package.json的语法
 
```





## webpack命令

```js
npm i webpack webpack-cli -g    //下载安装webpack
npm i webpack-dev-server -g      //会自动的更新服务器资源
webpack-dev-server               //运行命令
webpack-dev-server --open         //自动打开浏览器
npm install css-loader style-loader --save-dev  //添加webpack配置，让webpack帮助我们解析css
npm install less less-loader --save-dev    //webpack解析less和scss
npm install file-loader url-loader --save-dev  //webpack-图标+图片
npm install babel-loader @babel/core @babel/preset-env --save-dev //将ES6转换ES5，达到兼容的目的

```

## Vue命令和依赖

```js
npm install @vue/cli -g     //下载脚手架
vue create 项目名称           //用vue-cli创建出一个项目
npm run serve                   //运行
$ npm install vue
npm install vue-router
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
$ npm install axios
npm i element-ui -S
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
```

## React命令和依赖

```js
//使用node npm webpack 来运行react项目
mkdir react-demo
cd react-demo
npm init -y
create-react-app react-mobile   //新建项目
yarn add react react-dom webpack webpack-cli webpack-dev-server babel babel-cli babel-core babel-loader@7 babel-preset-react babel-preset-env babel-preset-es2015         //安装依赖
yarn start  //yarn运行
npm run start   //npm运行

yarn add customize-cra styled-jsx react-app-rewired --dev
//customize-cra 负责合并webpack配置文件    styled-jsx 负责 实现局部样式     react-app-rewired 负责重新改写 项目的运行命令

yarn add styled-jsx-plugin-less@alpha  less --dev   //添加less支持
yarn add redux react-redux --dev    //redux 是核心库 react-redux是负责将react组件连接redux
//脚手架
npm i -g  create-react-app  //全局安装脚手架工具  都使用npm(局部安装全部用yarn)
create-react-app -V    // 查看版本信息
npx create-react-app my-app
cd my-app
yarn start

yarn add prop-types --dev     //安装 prop-types


yarn add antd-mobile react-router-dom babel-plugin-import customize-cra react-app-rewired styled-jsx less styled-jsx-plugin-less axios --dev   //安装项目依赖


```

新建文件 `config-overrides.js

```js
    const { override, addBabelPlugins, fixBabelImports } = require('customize-cra');
    module.exports = override(
      ...addBabelPlugins(
        [
          "styled-jsx/babel",
          { "plugins": ["styled-jsx-plugin-less"] }
        ]
      ),
      fixBabelImports('import', {
        libraryName: 'antd-mobile', style: 'css'
      })
    )
```

修改 `package.json`文件

```js
"scripts": {
    "start": "react-app-rewired start",
    "build": "react-app-rewired build",
    "test": "react-app-rewired test --env=jsdom"
}
```

## nuxt

```js
npx create-nuxt-app xianyun    //创建一个`nuxtjs`项目
$ npm run dev                  //启动项目
```







## git

```js
//常用的操作命令
1. git  init      在要被管理的项目的根目录下使用此命令,会生成一个.git的隐藏文件
2. git status     用来查看当前文件的状态 
3. git  add   文件名称    用于将文件从工作区提交到暂存区 	
			git add *   提交所有的文件
			git add all 提交所有的文件
			git add -A  提交所有的文件
4. git  commit  -m  日志记录   将文件从暂存区提交到本地仓库，将文件进行托管
5. git  log    查看提交日志,也就是查看做了哪些操作
6. git reset --hard 日志版本号   可以回退到任何一个历史版本
7. git log  --oneline  以精简的方式来查看操作记录
8. git reflog 查看所有的操作日志，包括回退的操作记录也会查看的到
修改git密码  git config  再输入一次新密码
查看用户名和邮箱地址  git config user.name  git config user.email
```

```js
配置当前的用户操作信息，使用如下代码：
git config --global user.email 'pipixia@pipi.com'
git config --global user.name '皮皮虾'

删除之前配置好的用户信息：
git config --global --unset user.email 'pipixia@pipi.com'
git config --global --unset user.name  '皮皮虾'
```

侧分支的创建与删除

```js
git branch  分支名称    表示在当前分支下面创建一个新的分支
git branch -r 查看远程分支
git branch -a 查看本地分支和远程分支
git  branch  -d | -D  branchname   删除branchname分支。D表示强制删除
git checkout 分支名称   表示在当前分支切换到另一个分支 
git checkout -b 分支名称   表示在当前分支创建一个侧分支主直接切换到新创建的分支下面

git checkout  master  切换回主分支
git merge dev   是将dev分支合并到当前分支
git  branch -d 分支名称   表示删除侧分支
git pull origin master  子分支中拉取主分支代码
 git branch --set-upstream-to=origin/hxh_dev sm_dev   本地分支与远程分支的关联
 git remote remove origin 解除本地分支与远程分支的关联
 git push origin 分支名称    提交到远程分支，远程分支的名称与本地名称相同
```

将本地初始化好的文件提交上远程服务器

```js
1. 在某个要提交的项目的根目录下使用命令 git init  先进行版本控制的初始化，会生成一个.git的隐藏文件
2. git  add *  将此项目的所有文件提交到暂存区
3. git commit -m  日志记录  将暂存区的文件提交到仓储区 
4. 有可能会出现配置信息 
	 git config --global user.email 'pipixia@pipi.com'
	 git config --global user.name  '皮皮虾'
	 
5. git push https://github.com/wangsk69/qianduan32.git maste 提交到远程仓库	
```

### 一般最常用

```js
//在github上新建一个仓库
//第一次提交
gid add .
git commit -m 项目初始化
git remote add origin https://github.com/zhuangjiasheng123/codeSave.git
git push -u origin master

//接下去的提交
git pull 
gid add .
git commit -m 日志
git push

git reflog   //查看日志 最强大
git reset --hard HEAD^     //还原到上一个版本
git reset --hard  版本号        //还原到具体的某个版本

git checkout .  //还原样式
```

### 可视化git怎么提交到github线上仓库

```js
1 先确保本地的仓库已经执行过 commit 
2 确保本地仓库中 存在 远程仓库的地址
   git remote -v  //查看项目远程地址
   git remote add origin 远程仓库的地址  
3 在 vs code 中执行推送到远程仓库 
```

## 常用的几个终端操作命令

```
touch  index.html   创建了一个名称为index.html的文件

touch  css/index.css   images/a.gif   是在当前对应的文件夹中创建对应的文件，前提是文件夹必须存在
```

```
rm -r  文件夹名称   递归删除文件夹，就是先删除此文件夹中的文件，再来删除空文件夹
```

## 关于git的操作

```
git init 初始化
git add . 
git commit -m
git remote add origin +远程仓库地址
git push -u origin master 将本地的master分支推送到origin主机的远程master分支，同时指定origin为默认主机，后面就可以不加任何参数使用git push了
分支

 git branch -a 查看所有分支
 git branch    查看当前使用分支

git branch dev  新建本地分支dev
git checkout dev切换到A分支
git checkout -b dev 新建远程分支
git push origin dev:dev 本地dev推送到远程dev分支

删除本地分支：git branch -d 分支名（remotes/origin/分支名）
强制删本地：git branch -D 分支名
删除远程分支：git push origin --delete 分支名（remotes/origin/分支名）

git push --set-upstream origin A 
新增对应的远程分支并且push到里面，这个远程分支可以是与A分支同名，也可以是主分支或其他分支。此时A分支没有关联其他的分支，也不会影响到msater
git branch --set-upstream-to=origin/其他分支名称 A
上面语句是两个分支的相关连，相关连后A分支push的时候需要选择提交到哪个远程分支

git remote rm origin  删除远程 Git 仓库
git remote add origin git@github.com:FBing/java-code-generator 添加远程 Git 仓库
git push origin 远程分支  提交到远程分支
```

