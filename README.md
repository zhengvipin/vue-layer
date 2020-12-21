# vue-layer

## Quick Start

在程序入口添加

```
import layer from 'vue-layer'
import Child from '@/components/Child'
```

调用

```
layer.open({
    type: 1,
    area: ['50%', '50%'],
    content: Child, // 弹窗渲染的组件
    parent: this,// 渲染组件的父级组件
    data: {value: '我是来自父组件的value参数'} // 给渲染组件传参
});
```

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Package component source code

```
npm run lib
```

Lints and fixes files

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

## About

该组件只是根据个人业务实际需求，拓展了npm的layui-layer包，实现了支持Vue组件的弹窗，并不作为商业用途。更多详细的api请以layer官网为准：https://layer.layui.com/ 。

##  Author
zhengvipin@gmail.com
