<template>
  <div class="vsm-content">
      <h2>消息提醒</h2>

      <h3 class="section-title">呼出</h3>
      <div class="codes">
        <vsm-button @click="callout">弹出提醒</vsm-button>
      </div>
      <Codes language="js" :codes="codes0"></Codes>

      <h3 class="section-title">更多配置</h3>
      <div class="codes">
        
        <div class="vsm-cols">
          <div class="vsm-n">
            <vsm-button @click="tuollac" color="blue">弹出提醒</vsm-button>
          </div>
          <div class="vsm-col-5">
            <vsm-select placeholder="属性选择" v-model="noticeProps" :options="noticeOptions" multiple></vsm-select>
            <vsm-group>
              <vsm-input type="number" step="1000" v-model="duration" min="0">
                <span slot="append">ms</span>
              </vsm-input>
            </vsm-group>
            <vsm-group>
              <vsm-select placeholder="颜色选项" v-model="color" :options="colorOptions" readonly></vsm-select>
              <vsm-select placeholder="关闭选项" v-model="closable" :options="closableOptions" readonly></vsm-select>
            </vsm-group>
          </div>
        </div>
        
        <Codes language="js" :codes="codes1"></Codes>

        <h3 class="section-title">参数说明</h3>
        <vsm-table :data="params" :header="paramsHeader" stickyHeader></vsm-table>
        
      </div>
  </div>
</template>

<script>
export default {
  name: 'Notice',
  data () {
    return {
      
      duration: 3000,
      closable: 'self',
      closableOptions: [{
        label: '自身', value: 'self'
      }, {
        label: '按钮', value: 'button'
      }, {
        label: '不可关闭', value: ""
      }],

      color: 'black',

      noticeProps: ['settop', 'fromtop'],
      noticeOptions: ['reverse', 'fromtop', 'overwrite', 'settop'],

      params: [{
        prop: 'fromtop',
        type: 'Boolean',
        options: '',
        default: 'true',
        desc: '是否从顶部出现'
      }, {
        prop: 'settop',
        type: 'Boolean',
        options: '',
        default: 'false',
        desc: '新的提醒是否从顶部插入'
      }, {
        prop: 'overwrite',
        type: 'Boolean',
        options: '',
        default: 'false',
        desc: '该消息将会覆盖第一条消息'
      }, {
        prop: 'duration',
        type: 'Number',
        options: '',
        default: '3000',
        desc: '消息持续时间，单位为毫秒ms，当值为0时消息将会一直显示直到关闭为止'
      }, {
        prop: 'closable',
        type: 'String, Boolean',
        options: '"self", "button"及其它值',
        default: '"self"',
        desc: '消息关闭方式：当为"self"时，点击消息即可关闭；当值为"button"时，点击红点按钮可关闭；当为其它值时，不可点击关闭',
      }, {
        prop: 'color',
        type: 'String',
        options: 'red, blue, green, yellow, black, white',
        default: '',
        desc: '消息颜色'
      }, {
        prop: 'reverse',
        type: 'Boolean',
        options: '',
        default: 'false',
        desc: '同按钮类似，搭配color属性'
      }, {
        prop: 'onClose',
        type: 'Function',
        options: '',
        default: 'null',
        desc: '消息关闭时执行的回调函数'
      }, {
        prop: 'onClick',
        type: 'Function',
        options: '',
        default: 'null',
        desc: '消息点击时执行的回调函数'
      }]

    }
  },
  computed: {
    codes0 () {
      return `this.$notice('弹出一条<b class="vsm-yellow">消息</b>');`;
    },
    codes1 () {
      return `this.$notice({
  html: '您有一条新的信息！',\
${this.noticeProps.includes('settop')? '\r\n  settop: true,': ''}\
${this.noticeProps.includes('overwrite')? '\r\n  overwrite: true,': ''}\
${this.noticeProps.includes('fromtop')? '': '\r\n  fromtop: false,'}\
${this.noticeProps.includes('reverse')? '\r\n  reverse: true,': ''}\
${this.closable !== 'self'? `\r\n  closable: "${this.closable}",`: ''}\
${this.color? `\r\n  color: "${this.color}",`: ''}\
${this.duration === 3000? '': `\r\n  duration: ${this.duration}`}
});`;
    } 
  },
  methods: {
    callout () {
      this.$notice('弹出一条<b class="vsm-yellow">消息</b>');
    },
    tuollac () {
      this.$notice({
        html: '您有一条新的信息！',
        settop: this.noticeProps.includes('settop'),
        overwrite: this.noticeProps.includes('overwrite'),
        fromtop: this.noticeProps.includes('fromtop'),
        reverse: this.noticeProps.includes('reverse'),
        closable: this.closable,
        color: this.color,
        duration: this.duration
      });
    }
  }
}
</script>

<style>

</style>