<template>
  <div class="vsm-content">
    <h2>组件懒加载</h2>

    <h3 class="section-title">使用</h3>
    <p>默认当组件进入视窗范围时进行子组件加载。</p>
    <br>
    <div class="port">
        <div class="holder" style="margin-bottom: 100px;">向下滚动显示内容</div>
        <vsm-lazy height="200px">
            <img src="@/assets/img/landscape.jpg" alt="">
        </vsm-lazy>
    </div>
    <Codes :codes="codes0"></Codes>

    <h3 class="section-title">事件触发加载</h3>
    <p>可以定义容器事件触发加载，也可通过控制 active 属性值来进行加载：</p>
    <br>
    <vsm-lazy trigger="click">
        <vsm-input placeholder="请输入" autofocus></vsm-input>
        <div class="holder" slot="skeleton">点击加载内容</div>
    </vsm-lazy>
    <Codes :codes="codes1"></Codes>

    <h3 class="section-title">定时加载</h3>
    <p>通过 timeout 属性来设置延时加载，页面加载完 5 秒后显示内容。</p>
    <p>优先级：timeout > trigger > default</p>
    <p>控制 active 可提前显示。</p>
    <br>
    <vsm-lazy :timeout="5000" height="200px">
        <div class="holder">此段文本在5秒后显示</div>
    </vsm-lazy>
    <Codes :codes="codes2"></Codes>

    <h3 class="section-title">参数说明</h3>
    <vsm-table :data="params" :header="paramsHeader" stickyHeader></vsm-table>


  </div>
</template>

<script>
export default {
    name: 'Lazyload',
    data () {
        return {
            codes0: `<div class="port">
    <div class="holder" style="margin-bottom: 100px;">向下滚动显示内容</div>
    <vsm-lazy height="200px">
        <img src="../assets/img/landscape.jpg" alt="">
    </vsm-lazy>
</div>`,
            codes1: `<vsm-lazy trigger="click">
    <vsm-input placeholder="请输入" autofocus></vsm-input>
    <div class="holder" slot="skeleton">点击加载内容</div>
</vsm-lazy>`,
            codes2: `<vsm-lazy :timeout="5000" height="200px">
    <div class="holder">此段文本在5秒后显示</div>
</vsm-lazy>`,
            params: Object.freeze([{
                prop: 'active',
                type: 'Boolean',
                options: '',
                default: 'false',
                desc: '可通过该属性控制加载'
            }, {
                prop: 'timeout',
                type: 'Number',
                options: '',
                default: '',
                desc: '定时加载，单位毫秒 ms'
            }, {
                prop: 'trigger',
                type: 'String',
                options: 'click 等原生事件名',
                default: '',
                desc: '容器事件触发加载'
            }, {
                prop: 'fade',
                type: 'Boolean',
                options: '',
                default: 'true',
                desc: '内容渐显'
            }, {
                prop: 'viewport',
                type: 'HTMLElement',
                options: '',
                default: '',
                desc: '默认情况下，视窗元素节点'
            }, {
                prop: 'margin',
                type: 'String',
                options: '',
                default: '',
                desc: '默认情况下，视窗大小偏移值'
            }, {
                prop: 'height',
                type: 'String',
                options: '',
                default: '',
                desc: '加载前容器高度'
            }, {
                prop: 'width',
                type: 'String',
                options: '',
                default: '',
                desc: '加载前容器宽度'
            }, {
                prop: 'slot:default',
                type: '',
                options: '',
                default: '',
                desc: '加载内容',
                slot: true
            }, {
                prop: 'slot:skeleton',
                type: '',
                options: '',
                default: '',
                desc: '加载前显示内容',
                slot: true
            }])
        }
    },

}
</script>

<style>
.port {
    height: 200px;
    overflow: auto;
    background: var(--background-vice);
    border-radius: var(--radius);
}
.holder {
    line-height: 200px;
    text-align: center;
    font-size: 1.2em;
    font-weight: 600;
    background: var(--background-vice);
}
</style>