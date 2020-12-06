<template>
  <div class="vsm-content">
    <h2>标签页</h2>
    <h3 class="section-title">使用</h3>
    <vsm-tabs
      :tabs="tabs0"
      :closable="tabProps.includes('closable')"
      :bar="tabProps.includes('bar')"
      :color="color"
      :round="tabProps.includes('round')"
      :align="align"
      :reverse="tabProps.includes('reverse')"
      :plain="tabProps.includes('plain')"
      v-model="activeTab">
    </vsm-tabs>
    <br>
    <div class="vsm-cols">
      <div class="vsm-col-3">
        <vsm-select v-model="color" :options="colorOptions" label="颜色" inline readonly placeholder="默认"></vsm-select>
        <vsm-select v-model="align" :options="alignOptions" label="位置" inline readonly placeholder="默认居左"></vsm-select>
      </div>
      <vsm-checkbox v-model="tabProps" :options="tabOptions" type="slide"></vsm-checkbox>

    </div>
    <Codes :codes="codes0" show></Codes>

    <h3 class="section-title">更多用法</h3>
    <vsm-tabs
      :tabs="tabs1"
      v-model="activeTab1"
      plain
      bar
      center-active
      bar-width="auto"
      bar-color="#258de6"
      color="blue"
      @change="handleChange"></vsm-tabs>
    <Codes :codes="codes1"></Codes>
    <br><br>
    <vsm-tabs
      :tabs="tabs0"
      v-model="activeTab"
      vertical
      bar
      background="#212121"
      bar-color="#fafafa"
      bar-width="7"
      bar-height="7"
      color="white"
      plain
    >
      <Codes :codes="codes2" show></Codes>
    </vsm-tabs>


    <h3 class="section-title">参数说明</h3>
    <vsm-table :data="params" :header="paramsHeader"></vsm-table>

  </div>
</template>

<script>
export default {
    name: 'Tab',
    data () {
      return {
        activeTab: 2,
        activeTab1: 0,
        tabProps: [],
        tabOptions: [
          { label: '可关闭', value: 'closable' },
          { label: '下滑条', value: 'bar' },
          { label: '圆角', value: 'round' },
          { label: '边框', value: 'reverse' },
          { label: '平白显示', value: 'plain' },
        ],
        color: '',
        align: 'center',
        alignOptions: [
          { label: '默认居左', value: '' },
          { label: '居中', value: 'center' },
          { label: '居右', value: 'right' },
          { label: '平分', value: 'justify' },
          { label: '间隔', value: 'evenly' }
        ],
        
        tabs0: ['Tab One', 'Tab Two', 'Tab Three', 'Tab Four', 'Tab Five'],
        tabs1: [{
          title: 'Tab One',
          content: '<div class="tab-content">Content 1</div>'
        }, {
          title: 'Tab Two',
          content: '<div class="tab-content">Content 2</div>'
        }, {
          title: 'Tab Three',
          content: '<div class="tab-content">Content 3</div>'
        }, {
          title: 'Tab Four',
          content: '<div class="tab-content">Content 4</div>',
        }, {
          title: 'Tab Five',
          content: '<div class="tab-content">Content 5</div>'
        }, {
          title: 'Tab Six',
          content: '<div class="tab-content">Content 6</div>'
        }, {
          title: 'Tab Seven',
          content: '<div class="tab-content">Content 7</div>'
        }, {
          title: 'Tab Eight',
          content: '<div class="tab-content">Content 8</div>'
        }, {
          title: 'Tab Nine',
          content: '<div class="tab-content">Content 9</div>'
        }, {
          title: 'Tab Ten',
          content: '<div class="tab-content">Content 10</div>'
        }, {
          title: 'Tab Eleven',
          content: '<div class="tab-content">Content 11</div>'
        }, {
          title: 'Tab Twelve',
          content: '<div class="tab-content">Content 12</div>'
        }],

        params: [{
          prop: 'tabs',
          type: 'Array',
          options: '',
          default: '[]',
          desc: '标签页数据'
        }, {
          prop: 'v-model',
          type: 'Number',
          options: '',
          default: '0',
          desc: '当前激活项'
        }, {
          prop: 'align',
          type: 'String',
          options: '空 或"center", "right", "justify", "evenly"',
          default: '',
          desc: '标签页排列方式，默认从左排列'
        }, {
          prop: 'color',
          type: 'String',
          options: '',
          default: '',
          desc: '标签页激活项颜色'
        }, {
          prop: 'background',
          type: 'String',
          options: '',
          default: '',
          desc: '标签页导航条背景色'
        }, {
          prop: 'reverse',
          type: 'Boolean',
          options: '',
          default: 'false',
          desc: '类似按钮，可搭配color'
        }, {
          prop: 'plain',
          type: 'Boolean',
          options: '',
          default: 'false',
          desc: '类似按钮，可搭配color，取消背景色'
        }, {
          prop: 'round',
          type: 'Boolean',
          options: '',
          default: 'false',
          desc: '标签页圆角'
        }, {
          prop: 'vertical',
          type: 'Boolean',
          options: '',
          default: 'false',
          desc: '标签页垂直显示'
        }, {
          prop: 'center-active',
          type: 'Boolean',
          options: '',
          default: 'false',
          desc: '居中激活项'
        }, {
          prop: 'closable',
          type: 'Boolean',
          options: '',
          default: 'false',
          desc: '标签页可关闭'
        }, {
          prop: 'bar',
          type: 'Boolean',
          options: '',
          default: 'false',
          desc: '是否显示下滑条'
        }, {
          prop: 'bar-width',
          type: 'String | Number',
          options: '"auto" 或其它整数值',
          default: '24',
          desc: '下滑条宽度'
        }, {
          prop: 'bar-height',
          type: 'String | Number',
          options: '"auto" 或其它整数值',
          default: '4',
          desc: '下滑条高度'
        }, {
          prop: 'bar-color',
          type: 'String',
          options: '',
          default: '',
          desc: '下滑条颜色'
        }, {
          prop: '@beforeChange',
          type: 'Function',
          options: '',
          default: '',
          desc: '监听便签页切换前事件，参数（切换后索引，切换前索引，$event）',
          event: true
        }, {
          prop: '@change',
          type: 'Function',
          options: '',
          default: '',
          desc: '监听便签页切换后事件，参数（切换后索引，$event）',
          event: true
        }, {
          prop: '@close',
          type: 'Function',
          options: '',
          default: '',
          desc: '监听标签页关闭事件，参数（关闭的标签页索引，关闭的标签页对象）',
          event: true
        }, {
          prop: 'slot:default',
          type: '',
          options: '',
          default: 'false',
          desc: '未设置时，将会尝试读取tabs里的content属性作为标签页内容，若无则不显示',
          slot: true
        }]
      }
    },
    methods: {
      handleChange (i, e) {
        this.$notice({
          html: `已打开第 <b>${i+1}</b> 个TAB`,
          color: 'red',
          overwrite: true
        });
      }
    },
    computed: {
      codes0 () {
        return `<vsm-tabs :tabs="tabs"
  v-model="activeTab"\
${this.tabProps.includes('closable')? ' \r\n  closable': ''}\
${this.tabProps.includes('bar')? ' \r\n  bar': ''}\
${this.tabProps.includes('round')? ' \r\n  round': ''}\
${this.tabProps.includes('reverse')? ' \r\n  reverse': ''}\
${this.tabProps.includes('plain')? ' \r\n  plain': ''}\
${this.color? ` \r\n  color="${this.color}"`: ''}\
${this.align? ` \r\n  align="${this.align}"`: ''}>
</vsm-tabs>

<\script>
export default {
  data () {
    return {
      tabs: ['Tab One', 'Tab Two', 'Tab Three', 'Tab Four', 'Tab Five'],
      activeTab: 2,
    }
  }
}
</\script>`;
      },
      codes1 () {
        return `<vsm-tabs
  :tabs="tabs"
  v-model="activeTab"
  plain
  bar
  center-active
  bar-color="#258de6"
  bar-width="auto"
  color="blue"
  @change="handleChange"></vsm-tabs>

<\script>
export default {
  data () {
    return {
      tabs: [{
        title: 'Tab One',
        content: '<div class="tab-content">Content 1</div>'
      },
      ...,
      {
        title: 'Tab Twelve',
        content: '<div class="tab-content">Content 12</div>'
      }],
      activeTab: 0,
    }
  },
  methods: {
    handleChange (i, e) {
      this.$notice({
        html: \`已打开第 <b>\${i+1}</b> 个TAB\`,
        color: 'red',
        overwrite: true
      });
    }
  },
}
</\script>`;
      },
      codes2 () {
        return `<vsm-tabs
  tabs="tabs"
  v-model="activeTab"
  vertical
  bar
  background="#212121"
  bar-color="#fafafa"
  bar-width="7"
  bar-height="7"
  color="white"
  plain
>
  Codes
</vsm-tabs>

<\script>
export default {
  data () {
    return {
      tabs: ['Tab One', 'Tab Two', 'Tab Three', 'Tab Four', 'Tab Five'],
      activeTab: 2,
    }
  }
}
</\script>

<style>
.vsm-tabs-vertical > .vsm-tabs-navs {
  padding-right: 12px;
}
</style>`;
      }
    }
}
</script>

<style lang="scss">
.tab-content {
  line-height: 100px;
  font-size: 1.5em;
  font-style: italic;
  text-align: center;
  font-weight: 700;
  border-radius: inherit;
  background-image: linear-gradient(-225deg, #22E1FF 0%, #1D8FE1 48%, #625EB1 100%);
}
.vsm-tabs > .codes {
  margin: 0 0 0 1em;
  flex: 1;
}
.vsm-tabs-vertical > .vsm-tabs-navs {
  padding-right: var(--gap);
}
</style>