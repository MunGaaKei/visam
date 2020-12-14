<template>
  <div class="vsm-content">
    <h2>分页</h2>

    <h3 class="section-title">使用</h3>
    <p>基础的使用方法。</p>
    <br>
    <vsm-page
    :current="current0"
    :total="12"
    loading
    @change="handlePageClick"></vsm-page>
    <Codes :codes="codes0" show></Codes>

    <h3 class="section-title">简洁显示</h3>
    <p>简洁显示，只保留跳页器，可附带上一页和下一页。</p>
    <br>
    <vsm-page :current="current1"
    :total="90"
    simple
    align="center"
    round
    prev="上一页" next="下一页"
    @change="handlePageClick1"></vsm-page>
    <Codes :codes="codes1"></Codes>

    <h3 class="section-title">参数说明</h3>
    <vsm-table :data="params" :header="paramsHeader" stickyHeader></vsm-table>
    

  </div>
</template>

<script>
export default {
    name: 'Pagination',
    data () {
        return {
            current0: 1,
            current1: 9,
            params: Object.freeze([{
                prop: 'current',
                type: 'Number',
                options: '',
                default: '1',
                desc: '当前页码数'
            }, {
                prop: 'total',
                type: 'Number',
                options: '',
                default: '1',
                desc: '总页码数'
            }, {
                prop: 'siblings',
                type: 'Number',
                options: '',
                default: '2',
                desc: '相邻页码数超过该数将会折叠'
            }, {
                prop: 'prev',
                type: 'String',
                options: '',
                default: '',
                desc: '上一页的按钮文本'
            }, {
                prop: 'next',
                type: 'String',
                options: '',
                default: '',
                desc: '下一页的按钮文本'
            }, {
                prop: 'url',
                type: 'String',
                options: '',
                default: '',
                desc: '页码基本路径，应用在href属性，路径末端会自动加上页码数'
            }, {
                prop: 'show-all',
                type: 'Boolean',
                options: '',
                default: 'false',
                desc: '是否显示所有页码'
            }, {
                prop: 'dots',
                type: 'String',
                options: '',
                default: '<i class="iconfont icon-more"></i>',
                desc: '页码折叠时显示的文本'
            }, {
                prop: 'simple',
                type: 'Boolean',
                options: '',
                default: 'false',
                desc: '简洁版，将隐藏普通页码数，显示跳页器'
            }, {
                prop: 'elevator',
                type: 'Boolean',
                options: '',
                default: 'false',
                desc: '显示跳页器'
            }, {
                prop: 'align',
                type: 'String',
                options: '"center", "right", "evenly", "justify"',
                default: '',
                desc: '页码位置，默认居左'
            }, {
                prop: 'only-p-n',
                type: 'Boolean',
                options: '',
                default: 'false',
                desc: '是否仅显示上一页和下一页的按钮'
            }, {
                prop: 'hide-if-single',
                type: 'Boolean',
                options: '',
                default: 'false',
                desc: '当总页数为1时是否隐藏'
            }, {
                prop: 'loading',
                type: 'Boolean',
                options: '',
                default: 'false',
                desc: '点击页码后会显示为加载状态，直至重新更新当前页current值，可看上示例'
            }, {
                prop: 'round',
                type: 'Boolean',
                options: '',
                default: 'false',
                desc: '页码圆角'
            }, {
                prop: 'spliter',
                type: 'String',
                options: '',
                default: '"/"',
                desc: '跳页器当分隔符'
            }, {
                prop: 'unit',
                type: 'String',
                options: '',
                default: '"页"',
                desc: '跳页器的页码单位文本'
            }, {
                prop: 'reverse',
                type: 'Boolean',
                options: '',
                default: 'false',
                desc: '页码边框'
            }, {
                prop: '@change',
                type: 'Function',
                options: '',
                default: '',
                desc: '监听页码变化，参数（nextPage, prevPage）',
                event: true
            }])
        }
    },
    computed: {
        codes0 () {
            return `<vsm-page
    :current="current"
    :total="12"
    loading
    @change="handlePageClick"></vsm-page>
    
<\script>
export default {
    data () {
        return {
            current: 1
        }
    },
    methods: {
        handlePageClick (p, prev) {
            setTimeout(() => {
                this.current = p;
            }, 1000);
        }
    }
}
</\script>`;
        },
        codes1 () {
            return `<vsm-page :current="current"
    :total="90"
    simple
    align="center"
    round
    prev="上一页"
    next="下一页"
    @change="handlePageClick"></vsm-page>
    
<\script>
export default {
    data () {
        return {
            current: 9
        }
    },
    methods: {
        handlePageClick (p, prev) {
            this.current = p;
        }
    }
}
</\script>`;
        }
    },
    methods: {
        handlePageClick (p, prev) {
            setTimeout(() => {
                this.current0 = p;
            }, 1000);
        },
        handlePageClick1 (p) {
            this.current1 = p;
        }
    }
}
</script>