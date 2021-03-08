<template>
  <div class="vsm-content">
    <h2>步骤</h2>
    <h3 class="section-title">基本</h3>

    <vsm-step
        :steps="steps"
        v-model="current"
        split="arrow"
        clickable></vsm-step>
    
    <Codes :codes="codes0"></Codes>

    <h3 class="section-title">其它设置</h3>
    <vsm-step
        :steps="steps1"
        v-model="current"
        verticle></vsm-step>
    <Codes :codes="codes1"></Codes>
    
    <h3 class="section-title">参数说明</h3>
    <p>数据项的选项有以下几个：</p>
    <ul class="options">
        <li><span class="vsm-blue vsm-reverse">title</span>: 标题</li>
        <li><span class="vsm-blue vsm-reverse">content</span>: 描述</li>
        <li><span class="vsm-blue vsm-reverse">icon</span>: 图标，默认为数字</li>
        <li><span class="vsm-blue vsm-reverse">iconFinish</span>: 已完成状态的图标</li>
    </ul>
    <br>
    <vsm-table :data="params" :header="paramsHeader" stickyHeader></vsm-table>

  </div>
</template>

<script>
export default {
    data () {
        return {
            current: 0,
            steps: [
                { title: '步骤 1', iconFinish: '<i class="iconfont icon-check"></i>' },
                { title: '步骤 2', iconFinish: '<i class="iconfont icon-check"></i>' },
                { title: '步骤 3', iconFinish: '<i class="iconfont icon-check"></i>' }
            ],
            steps1: [
                { title: '步骤 1', icon: '<i class="iconfont icon-user"></i>', content: '一段很长很长的描述' },
                { title: '步骤 2', icon: '<i class="iconfont icon-lock"></i>', content: '很短的描述' },
                { title: '步骤 3', icon: '<i class="iconfont icon-mail"></i>', content: '' }
            ],
            codes0: `<vsm-step
    :steps="steps"
    v-model="current"
    split="arrow"
    clickable></vsm-step>
    
<\script>
export default {
  data () {
    return {
        current: 0,
        steps: [
            { title: '步骤 1', iconFinish: '<i class="iconfont icon-check"></i>' },
            { title: '步骤 2', iconFinish: '<i class="iconfont icon-check"></i>' },
            { title: '步骤 3', iconFinish: '<i class="iconfont icon-check"></i>' }
        ],
    }
  }
}
</\script>`,
            codes1: `<vsm-step
    :steps="steps"
    v-model="current"
    verticle></vsm-step>

<\script>
export default {
  data () {
    return {
        current: 0,
        steps: [
            { title: '步骤 1', icon: '<i class="iconfont icon-user"></i>', content: '一段很长很长的描述' },
            { title: '步骤 2', icon: '<i class="iconfont icon-lock"></i>', content: '很短的描述' },
            { title: '步骤 3', icon: '<i class="iconfont icon-mail"></i>', content: '' }
        ],
    }
  }
}
</\script>`,
            params: Object.freeze([{
                prop: 'current | v-model',
                type: 'Number',
                options: '',
                default: '0',
                desc: '当前步骤索引'
            }, {
                prop: 'steps',
                type: 'Array',
                options: '',
                default: '',
                desc: '步骤内容'
            }, {
                prop: 'clickable',
                type: 'Boolean',
                options: '',
                default: 'false',
                desc: '是否可以点击'
            }, {
                prop: 'align',
                type: 'String',
                options: 'justify, evenly, center, left, right',
                default: '',
                desc: 'justify'
            }, {
                prop: 'verticle',
                type: 'Boolean',
                options: '',
                default: 'false',
                desc: '是否垂直方向'
            }, {
                prop: 'split',
                type: 'String',
                options: 'line, arrow, none',
                default: 'line',
                desc: '分隔符的类型'
            }, {
                prop: '@change',
                type: 'Function',
                options: '',
                default: '',
                desc: '监听步骤切换事件，参数（切换后的索引值）',
                event: true
            }])

        }
    }
}
</script>


<style lang="scss" scoped>
.options {
    padding-left: 2em;
}
.options .vsm-blue {
    display: inline-block;
    min-width: 6em;
}
.options > li {
    margin: 5px 0;
}
</style>