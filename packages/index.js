import Vue from 'vue'
import layer from 'layui-layer'

// 重写layer的open方法
const origin_layer_open = layer.open
layer.open = function (options) {
    let {type, content, parent, data} = options
    if (type === 1 && typeof content === 'object') {
        const origin_success = options.success;
        options.success = function (layero, layerid) {
            const Component = Vue.extend(content)
            const instance = new Component({data: {layerid, layerdata: data}, parent})
            instance.vm = instance.$mount()
            layero.children('.layui-layer-content').html(instance.vm.$el)
            // layero.children('.layui-layer-content').style.height = 'inherit'
            if (origin_success && origin_success instanceof Function) origin_success(layero, layerid);
        }
        options.content = ''
    }
    return origin_layer_open(options)
}

export default layer
