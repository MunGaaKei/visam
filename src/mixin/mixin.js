import Params from '@/components/Params';

export default {
  data () {
    return {
      codeTabs: [
        '<i class="iconfont icon-app"></i>',
        '<i class="iconfont icon-script"></i>'
      ],
      paramsHeader: [{
        key: 'prop',
        title: '属性',
        render: (h, ctx) => h('b', {
          class: 'vsm-blue vsm-reverse'
        }, ctx.data.prop)
      }, {
        key: 'desc',
        title: '说明'
      }, {
        key: 'type',
        title: '类型'
      }, {
        key: 'options',
        title: '可选值'
      }, {
        key: 'default',
        title: '默认值'
      }]
    }
  },
  methods: {
    
  },
  components: {
    Params
  }
}