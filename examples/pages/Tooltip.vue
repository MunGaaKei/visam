<template>
  <div class="vsm-content">
      <h2>提示</h2>

      <h3 class="section-title">基本用法</h3>
      <vsm-button v-tooltip="'提示消息'">鼠标悬停在此</vsm-button>
      <Codes :codes="codes0" show></Codes>

      <h3 class="section-title">弹出方向</h3>
      <p>默认行为是根据相对祖先节点进行定位计算弹出方向，一般为上或下。如果希望固定方向，可通过指令参数或position属性设置。</p>
      <br>
      <div class="vsm-cols">
        <vsm-button color="blue" v-tooltip:right="'向右弹出'">右边</vsm-button>
        <div class="vsm-rows" style="margin: 0 80px;">
            <vsm-button color="blue" v-tooltip:bottom="'向下弹出'">下边</vsm-button>
            <vsm-button color="blue" v-tooltip:top="'向上弹出'" style="margin-top: 80px;">上边</vsm-button>
        </div>
        <vsm-button color="blue" v-tooltip:left="'向左弹出'">左边</vsm-button>
      </div>
      <Codes :codes="codes1"></Codes>

      <h3 class="section-title">触发方式</h3>
      <p>可通过修改show和hide属性改变触发方式。如果是组件里的控件，可能需要使用selector属性获取真正的触发节点。</p>
      <br>
      <vsm-input class="vsm-col-3"
        v-tooltip="{
            html: '输入框失去焦点时隐藏',
            show: 'focus',
            hide: 'blur',
            selector: 'input',
            color: 'blue'
        }"
        placeholder="获取焦点时触发"></vsm-input>
      <Codes :codes="codes2"></Codes>

      <h3 class="section-title">参数说明</h3>
      <vsm-table :data="params" :header="paramsHeader"></vsm-table>

  </div>
</template>

<script>
export default {
    name: 'Tooltip',
    data () {
        return {
            codes0: `<vsm-button v-tooltip="'提示消息'">鼠标悬停在此</vsm-button>`,
            codes1: `<vsm-button v-tooltip:left="'向左弹出'">左边</vsm-button>
<vsm-button v-tooltip:right="'向右弹出'">右边</vsm-button>
<vsm-button v-tooltip:top="'向上弹出'">上边</vsm-button>
<vsm-button v-tooltip:bottom="'向下弹出'">下边</vsm-button>`,
            codes2: `<vsm-input placeholder="获取焦点时触发"
    v-tooltip="{
        html: '输入框失去焦点时隐藏',
        show: 'focus',
        hide: 'blur',
        selector: 'input',
        color: 'blue'
    }"></vsm-input>`,
            params: [{
                prop: 'html',
                type: 'String',
                options: '',
                default: '必须',
                desc: '弹出框内容'
            }, {
                prop: 'show',
                type: 'String',
                options: '',
                default: '"mouseover"',
                desc: '显示的触发事件'
            }, {
                prop: 'hide',
                type: 'String',
                options: '',
                default: '"mouseleave"',
                desc: '隐藏的触发事件'
            }, {
                prop: 'events',
                type: 'Boolean',
                options: '',
                default: 'true',
                desc: '是否通过事件来触发，值为false时，将由display属性进行控制'
            }, {
                prop: 'display',
                type: 'Boolean',
                options: '',
                default: 'true',
                desc: '当events为false时，弹出框的显示隐藏由此控制'
            }, {
                prop: 'position',
                type: 'String',
                options: '"left", "top", "right", "bottom"',
                default: 'undefined',
                desc: '弹出方向，设置后将固定方向，也可通过指令参数设置'
            }, {
                prop: 'gap',
                type: 'Number',
                options: '',
                default: '12',
                desc: '弹出框与目标节点间隔，单位px'
            }, {
                prop: 'delay',
                type: 'Number',
                options: '',
                default: '0',
                desc: '弹出框隐藏延迟，单位ms'
            }, {
                prop: 'selector',
                type: 'String',
                options: '',
                default: '',
                desc: '弹出框的真正触发节点选择器，一般使用在组件上'
            }, {
                prop: 'color',
                type: 'String',
                options: '',
                default: '',
                desc: '同按钮颜色，默认主题色'
            }, {
                prop: 'reverse',
                type: 'Boolean',
                options: '',
                default: '',
                desc: '弹出框反色'
            }]
        }
    }
}
</script>