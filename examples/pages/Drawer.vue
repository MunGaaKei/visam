<template>
  <div class="vsm-content">
    <h2>抽屉</h2>

    <h3 class="section-title">使用</h3>
    
    <vsm-cols align="justify">
      <vsm-button @click="toggle">呼出</vsm-button>
      <div class="vsm-cols-3">
        <vsm-select v-model="position" :options="positionOptions" label="位置" inline readonly placeholder="默认居左"></vsm-select>
        <vsm-checkbox v-model="blur" type="slide">背景层模糊</vsm-checkbox>
      </div>
    </vsm-cols>

    <Codes :codes="codes0"></Codes>


    <vsm-drawer v-model="show"
      :position="position"
      :blur="blur">
      <div class="drawer-content">
        <h3>抽屉已打开 🤓</h3>
        <br>
        <vsm-button @click="toggle">关闭</vsm-button>
      </div>
    </vsm-drawer>

    <h3 class="section-title">参数说明</h3>
    <vsm-table :data="params" :header="paramsHeader"></vsm-table>


  </div>
</template>

<script>
export default {
    name: 'Drawer',
    data () {
      return {
        show: false,
        position: '',
        positionOptions: [
          { label: '默认居左', value: '' },
          { label: '居右', value: 'right' },
          { label: '居上', value: 'top' },
          { label: '居下', value: 'bottom' },
        ],
        blur: false,
        params: Object.freeze([{
          prop: 'show | v-model',
          type: 'Boolean',
          options: '',
          default: 'false',
          desc: '抽屉的打开状态'
        }, {
          prop: 'position',
          type: 'String',
          options: 'top | right | bottom',
          default: '',
          desc: '抽屉内容从哪个方向划入，默认从左边'
        }, {
          prop: 'blur',
          type: 'Boolean',
          options: '',
          default: 'false',
          desc: '背景层是否模糊显示'
        }, {
          prop: 'breakpoint',
          type: 'Number',
          options: '',
          default: '1941',
          desc: '当屏幕宽度小于该值时，抽屉功能打开，否则以正常文档流显示。单位像素 px'
        }, {
          prop: 'slot:defalut',
          type: '',
          options: '',
          default: '',
          desc: '抽屉内容',
          slot: true
        }, ])
      }
    },
    methods: {
      toggle () {
        this.show = !this.show;
      }
    },
    computed: {
      codes0 () {
        return `<vsm-drawer v-model="show"\
${this.position? ` \r\n  position="${this.position}"`: ''}\
${this.blur? ` \r\n  blur`: ''}>
    <div class="drawer-content">
      <h3>抽屉已打开 🤓</h3>
      <br>
      <vsm-button @click="toggle">关闭</vsm-button>
    </div>
</vsm-drawer>

<\script>
export default {
  data () {
    return {
      show: false,
    }
  },
  methods: {
    toggle () {
      this.show = !this.show;
    }
  },
}
</\script>

<style scoped>
.drawer-content {
  padding: 40px 1em;
  min-width: 30vw;
  margin: auto;
  text-align: center;
}
</style>`;
      }
    }
}
</script>

<style scoped>
.drawer-content {
  padding: 40px 1em;
  min-width: 30vw;
  margin: auto;
  text-align: center;
}
</style>