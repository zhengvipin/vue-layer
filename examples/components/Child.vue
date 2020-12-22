<template>
  <div style="padding: 12px;">
    <h1 v-text="layerdata.value"></h1>
    <br><br>
    <button type="button" @click="change">点我改变父组件标题的值</button>
    <br><br>
    <button type="button" @click="close">点我关闭弹窗</button>
  </div>
</template>

<script>
import layer from '../../packages'

export default {
  name: "Child",
  data() {
    return {
      layerdata: {
        value: "我是Child组件本身的value值"
      },
      layerid: -1
    }
  },
  methods: {
    change(){
      this.$parent.title = "Hello Child"
    },
    close() {
      layer.close(this.layerid)
    }
  }
}
</script>

<style scoped>

</style>
