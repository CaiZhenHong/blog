# myblog 博客系统

## 快速开始

`git clone git@github.com:caizhenhong/myblog.git`

=> `cd ./ui`

=> `npm init`（如果您的网络环境不佳，推荐使用 [cnpm](https://blog.csdn.net/wjnf012/article/details/80422313)）

=> `npm run dev`

## 为什么要进行重写？

### 学习技术

1. 不再使用 vue-cli 脚手架直接生成项目，而是使用 webpack 从零开始搭建

2. 加入响应式布局

3. 其他零碎的技术

### 服务端思路出错

1. 在编写服务端的时候，没有考虑开源的问题，没有提取出可配置项

2. 服务端代码耦合过大，没有阅读最佳实践

### 页面过于简陋

1. 页面逻辑过于简单，单个页面可放下的内容过少

### 代码问题

1. 代码命名没有规范，出现命名混乱

2. 代码目录安排不够合理
