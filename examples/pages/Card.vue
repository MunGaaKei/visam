<template>
  <div class="vsm-content">
    <h2>卡片</h2>
    <h3 class="section-title">基本</h3>
    <vsm-card padding="12px">
        <h4 class="demo-title">标题</h4>
        <p>一段文本段落</p>
    </vsm-card>
    <Codes :codes="codes0"></Codes>

    <h3 class="section-title">参数说明</h3>
    <vsm-table :data="params" :header="paramsHeader" stickyHeader></vsm-table>

  </div>
</template>

<script>
export default {
    name: 'Card',
    data () {
        return {
            codes0: `<vsm-card padding="12px">
    <h4 class="demo-title">标题</h4>
    <p>一段文本段落</p>
</vsm-card>`,
            params: Object.freeze([{
                prop: 'tag',
                type: 'String',
                options: '',
                default: 'div',
                desc: '容器标签名'
            }, {
                prop: 'color',
                type: 'String',
                options: '',
                default: '',
                desc: '卡片颜色，和按钮颜色类似'
            }, {
                prop: 'shadow',
                type: 'String',
                options: 'always, none, hover',
                default: 'always',
                desc: '是否显示阴影'
            }, {
                prop: 'padding',
                type: 'String',
                options: '',
                default: '',
                desc: '内边距'
            }, {
                prop: 'margin',
                type: 'String',
                options: '',
                default: '',
                desc: '外边距'
            }, {
                prop: 'width',
                type: 'String',
                options: '',
                default: '',
                desc: '宽度'
            }, {
                prop: 'height',
                type: 'String',
                options: '',
                default: '',
                desc: '高度'
            }, {
                prop: 'plain',
                type: 'Boolean',
                options: '',
                default: 'false',
                desc: '平白显示'
            }, {
                prop: 'reverse',
                type: 'String',
                options: '',
                default: '',
                desc: '反显，搭配颜色'
            }, {
                prop: 'border',
                type: 'Boolean',
                options: '',
                default: 'false',
                desc: '边框'
            }]),
        }
    },
}
</script>

<style scoped>
.demo-title {
    margin-bottom: 8px;
}
</style>