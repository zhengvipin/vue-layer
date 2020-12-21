<template>
  <div class="hello">
    <h2>{{ title }}</h2>
    <br>
    <button type="button" @click="handleTips" id="MyTip">tips层</button>
    <br><br>
    <button type="button" @click="handlePrompt">prompt层</button>
    <br><br>
    <button type="button" @click="handleConfirm">询问层</button>
    <br><br>
    <button type="button" @click="handleLoading">加载层</button>
    <br><br>
    <button type="button" @click="handleOpen">页面层</button>
    <br><br>
    <button type="button" @click="handleOpenComponent">组件层<span class="new">New</span></button>
    <br><br>
    <a href="https://layer.layui.com/" target="_blank">更多api请查看layer官网</a>
  </div>
</template>

<script>
import layer from '../../packages'
import Child from './Child'

export default {
  name: 'HelloWorld',
  data() {
    return {
      title: 'Hello World'
    }
  },
  methods: {
    handleTips() {
      layer.tips('Hi，我是tips', '#MyTip');
    },
    handlePrompt() {
      layer.prompt({title: '输入任何口令，并确认', formType: 1}, function (pass, index) {
        layer.close(index);
        layer.prompt({title: '随便写点啥，并确认', formType: 2}, function (text, index) {
          layer.close(index);
          layer.msg('演示完毕！您的口令：' + pass + '<br>您最后写下了：' + text);
        });
      });
    },
    handleConfirm() {
      layer.confirm('您是如何看待前端开发？', {
        btn: ['重要', '奇葩'] //按钮
      }, function () {
        layer.msg('的确很重要', {icon: 1});
      }, function () {
        layer.msg('也可以这样', {
          time: 20000, //20s后自动关闭
          btn: ['明白了', '知道了']
        });
      });
    },
    handleLoading() {
      const layerid = layer.load(0, {shade: false});
      setTimeout(function () {
        layer.close(layerid)
      }, 1000);
    },
    handleOpen() {
      layer.open({
        type: 1,
        skin: 'layui-layer-rim', //加上边框
        area: ['420px', '240px'], //宽高
        content: '任意html内容'
      });
    },
    handleOpenComponent() {
      layer.open({
        type: 1,
        area: ['50%', '50%'],
        content: Child, // 弹窗渲染的组件
        parent: this,// 渲染组件的父级组件
        data: {value: '我是来自父组件的value参数'} // 给渲染组件传参
      });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

.new {
  display: inline-block;
  width: 36px;
  height: 16px;
  background-color: #ff4d4f;
  font-size: 12px;
  color: #ffffff;
  border-radius: 3px;
  margin-left: 6px;
  vertical-align: text-bottom;
}
</style>
