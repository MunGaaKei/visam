<template>
  <div class="vsm-content">
    <h2>折叠面板</h2>

    <h3 class="section-title">使用</h3>
    <p>组件会根据传入的 v-model 即 active 属性值类型判断是否为手风琴展示：当 active 值类型为数值时则每次最多仅允许打开一项，否则不限制。active 值为每项的索引值，其中也可穿插其它结构；当为数组类型时，数组存储激活项当索引值。</p>
    <br>
    <vsm-collapse :active="0" icon="😲">
        <vsm-collapse-item>
            <template #title>人物形象</template>
            <p>人物形象的核心是人物的思想性格，人物描写的角度有正面描写和侧面描写。正面描写包括外貌、语言、动作、神态、心理描写；侧面描写(又叫侧面烘托）指以他人言行来反映人物等。</p>
        </vsm-collapse-item>
        <vsm-collapse-item>
            <template #title>故事情节</template>
            <p>指作品所描写的事件发展，演变的全过程。故事情节的结构：（序幕）－开端－发展－高潮－结局－（尾声）用以展示人物性格，表现作品主题。</p>
        </vsm-collapse-item>
        <vsm-collapse-item>
            <template #title>环境描写</template>
            <p>指对人物活动的环境和事情发生的背景作描写。环境描写分为自然环境和社会环境。自然环境描写是指对人物活动的时间，地点，季节，气候及花草鸟虫的描写；社会环境描写是指对人物活动的具体背景，处所，氛围以及人际关系等作描写。</p>
        </vsm-collapse-item>
    </vsm-collapse>
    
    <Codes :codes="codes0"></Codes>

    <h3 class="section-title">参数说明</h3>
    <vsm-table :data="params" :header="paramsHeader" stickyHeader></vsm-table>
    
    <h3 class="section-title">子项参数说明</h3>
    <vsm-table :data="params1" :header="paramsHeader" stickyHeader></vsm-table>

  </div>
</template>

<script>
export default {
    name: 'Collapse',
    data () {
        return {
            codes0: `<vsm-collapse :active="0" icon="😲">
    <vsm-collapse-item>
        <template #title>人物形象</template>
        <p>人物形象的核心是人物的思想性格，人物描写的角度有正面描写和侧面描写。正面描写包括外貌、语言、动作、神态、心理描写；侧面描写(又叫侧面烘托）指以他人言行来反映人物等。</p>
    </vsm-collapse-item>
    <vsm-collapse-item>
        <template #title>故事情节</template>
        <p>指作品所描写的事件发展，演变的全过程。故事情节的结构：（序幕）－开端－发展－高潮－结局－（尾声）用以展示人物性格，表现作品主题。</p>
    </vsm-collapse-item>
    <vsm-collapse-item>
        <template #title>环境描写</template>
        <p>指对人物活动的环境和事情发生的背景作描写。环境描写分为自然环境和社会环境。自然环境描写是指对人物活动的时间，地点，季节，气候及花草鸟虫的描写；社会环境描写是指对人物活动的具体背景，处所，氛围以及人际关系等作描写。</p>
    </vsm-collapse-item>
</vsm-collapse>`,
            params: Object.freeze([{
                prop: 'active | v-model',
                type: 'Number | Array',
                options: '',
                default: '[]',
                desc: '激活项的索引'
            }, {
                prop: 'icon',
                type: 'String',
                options: '',
                default: '',
                desc: '图标'
            }, {
                prop: 'icon-trigger',
                type: 'Boolean',
                options: '',
                default: 'false',
                desc: '仅允许通过点击图标来控制打开隐藏'
            }, {
                prop: '@change',
                type: 'Function',
                options: '',
                default: '',
                desc: '监听激活项值的变化事件，参数（当前值）',
                event: true
            }, {
                prop: '@toggle',
                type: 'Function',
                options: '',
                default: '',
                desc: '监听打开隐藏事件，参数（索引值，激活状态）',
                event: true
            }]),
            params1: Object.freeze([{
                prop: 'title',
                type: 'String',
                options: '',
                default: '',
                desc: '标题内容，优先级高于插槽 slot:title'
            }, {
                prop: 'slot:title',
                type: '',
                options: '',
                default: '',
                desc: '标题内容',
                slot: true
            }, {
                prop: 'slot:default',
                type: '',
                options: '',
                default: '',
                desc: '激活后显示当内容',
                slot: true
            }])
        }
    }
}
</script>