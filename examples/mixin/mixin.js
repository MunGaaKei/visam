import Codes from '@/components/Codes';

export default {
  data () {
    return {
      paramsHeader: [{
        key: 'prop',
        title: '属性',
        sticky: 'left',
        render: (h, ctx) => h('i', {
          class: `${ctx.data.event? 'vsm-red': (ctx.data.slot? '': 'vsm-blue')} vsm-reverse`
        }, ctx.data.prop)
      }, {
        key: 'desc',
        title: '说明'
      }, {
        key: 'type',
        title: '类型',
        render: (h, ctx) => h('span', {
          class: 'param-type'
        }, ctx.data.type)
      }, {
        key: 'options',
        title: '可选值'
      }, {
        key: 'default',
        title: '默认值',
        sticky: 'right'
      }],
      colorOptions: [
        { label: '默认', value: '' },
        { label: '黑色', value: 'black' },
        { label: '白色', value: 'white' },
        { label: '红色', value: 'red' },
        { label: '蓝色', value: 'blue' },
        { label: '绿色', value: 'green' },
        { label: '黄色', value: 'yellow' },
      ]
    }
  },
  components: {
    Codes,
  }
}