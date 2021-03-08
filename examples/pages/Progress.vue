<template>
  <div class="vsm-content">
    <h2>进度条</h2>

    <h3 class="section-title">基本</h3>
    <vsm-progress v-model="current"
      :label="`进度 ${current}%`"></vsm-progress>
    <Codes :codes="codes0"></Codes>

    <h3 class="section-title">彩色</h3>
    <vsm-progress v-model="current"
      line-width="8px"
      color="#36e235"></vsm-progress>
    <div class="page-hr"></div>
    <vsm-progress v-model="current"
      color="blue"
      line-width="8px"></vsm-progress>
    <div class="page-hr"></div>
    <vsm-progress v-model="current"
      color="red"
      line-width="8px"></vsm-progress>
    <Codes :codes="codes1"></Codes>
    
    <h3 class="section-title">缓存条与动画</h3>
    <vsm-progress v-model="current"
      color="#83f"
      line-width="8px"
      :buffer="buffer"></vsm-progress>
    <div class="page-hr"></div>
    <vsm-progress v-model="current"
      color="#83f"
      line-width="8px"
      animating></vsm-progress>
    <Codes :codes="codes2"></Codes>

    <h3 class="section-title">可拖动</h3>
    <p>播放器设计</p>
    <br>
    <vsm-progress :percent="40"
      clickable
      :decimal="10"
      point="<i class='iconfont icon-music'></i>"
      color="red"
      line-width="8px"></vsm-progress>
    <Codes :codes="codes3"></Codes>

    <h3 class="section-title">参数说明</h3>
    <vsm-table :data="params" :header="paramsHeader" stickyHeader></vsm-table>

    <vsm-input
      class="percent-set"
      type="number"
      min="0"
      max="100"
      v-model="current">
        <span slot="prepend" class="vsm-black">进度</span>
      </vsm-input>

  </div>
</template>

<script>
export default {
    name: 'Progress',
    data () {
      return {
        current: 40,
        buffer: 80,
        codes0: `<vsm-progress v-model="current" text></vsm-progress>`,
        codes1: `<vsm-progress v-model="current"
  line-width="8px"
  color="#36e235"></vsm-progress>
<vsm-progress v-model="current"
  color="blue"
  line-width="8px"></vsm-progress>
<vsm-progress v-model="current"
  color="red"
  line-width="8px"></vsm-progress>`,
        codes2: `<vsm-progress v-model="current"
  color="#83f"
  line-width="8px"
  :buffer="buffer"></vsm-progress>
<vsm-progress v-model="current"
  color="#83f"
  line-width="8px"
  animating></vsm-progress>`,
        codes3: `<vsm-progress :percent="40"
  clickable
  :decimal="10"
  point="<i class='iconfont icon-music'></i>"
  color="red"
  line-width="8px">
</vsm-progress>`,
        params: Object.freeze([{
          prop: 'percent | v-model',
          type: 'Number',
          options: '',
          default: '0',
          desc: '进度百分比值'
        }, {
          prop: 'label',
          type: 'String',
          options: '',
          default: '',
          desc: '显示文本'
        }, {
          prop: 'buffer',
          type: 'Number',
          options: '',
          default: '',
          desc: '缓存百分比值'
        }, {
          prop: 'color',
          type: 'String',
          options: '',
          default: '',
          desc: '进度条颜色'
        }, {
          prop: 'verticle',
          type: 'Boolean',
          options: '',
          default: 'false',
          desc: '垂直显示'
        }, {
          prop: 'line-width',
          type: 'String',
          options: '',
          default: '',
          desc: '进度条线宽'
        }, {
          prop: 'height',
          type: 'String',
          options: '',
          default: '',
          desc: '当为垂直显示时，需设置一个进度条高度'
        }, {
          prop: 'clickable',
          type: 'Boolean',
          options: '',
          default: 'false',
          desc: '是否可以点击切换值'
        }, {
          prop: 'decimal',
          type: 'Number',
          options: '',
          default: '0',
          desc: '保留小数位多少位，位数越多越平滑，播放进度建议调大'
        }, {
          prop: 'animating',
          type: 'Boolean',
          options: '',
          default: 'false',
          desc: '显示动画，会隐藏值进度条'
        }, {
          prop: 'point',
          type: 'String',
          options: '',
          default: '',
          desc: '端点'
        }])
      }
    }
}
</script>

<style scoped>
.page-hr {
  margin: 8px 0;
}
.percent-set {
  position: fixed;
  z-index: 10;
  top: 50%;
  right: var(--gap);
  margin: 0;
  transform: translate(0, -50%);
  box-shadow: var(--shadow);
}
</style>