<template>
  <div class="vsm-content">
      <h2>布局</h2>

      <h3 class="section-title">使用</h3>
      <p>&lt;vsm-n> 组件可以将内容占据指定空间，每行或每列可视为 <b>10</b> 个单位。</p>
      <vsm-checkbox type="slide" v-model="gap">间隔</vsm-checkbox>
      <br>
      <vsm-cols :gap="gap">
          <vsm-n n="1" v-tooltip="'10%'">
              <div class="block vsm-blue">1</div>
          </vsm-n>
          <vsm-n n="3.3" v-tooltip="'33.3333%'">
              <div class="block vsm-red">3.3</div>
          </vsm-n>
          <vsm-n v-tooltip="'补充剩余宽度'">
              <div class="block vsm-blue">n</div>
          </vsm-n>
      </vsm-cols>
      <Codes :codes="codes0"></Codes>
      

      <h3 class="section-title">纵向</h3>
      <p>分行需指定容器高度。</p>
      <br>
      <vsm-cols verticle height="200px">
          <vsm-n n="4" class="block vsm-blue">4</vsm-n>
          <vsm-n class="block vsm-red">n</vsm-n>
      </vsm-cols>
      <Codes :codes="codes1"></Codes>
      
        <h3 class="section-title">参数说明</h3>
        <p>&lt;vsm-cols>组件。</p>
        <br>
        <vsm-table :data="params" :header="paramsHeader" stickyHeader></vsm-table>
        
        <h3 class="section-title">子项参数说明</h3>
        <p>&lt;vsm-n>组件。</p>
        <br>
        <vsm-table :data="params1" :header="paramsHeader" stickyHeader></vsm-table>


  </div>
</template>

<script>
export default {
    name: 'Cols',
    data () {
        return {
            gap: false,
            params: Object.freeze([{
                prop: 'tag',
                type: 'String',
                options: '',
                default: 'div',
                desc: '容器标签名'
            }, {
                prop: 'nowrap',
                type: 'Boolean',
                options: '',
                default: 'false',
                desc: '是否换行，默认情况下在子项宽度溢出时会换行'
            }, {
                prop: 'gap',
                type: 'Boolean',
                options: '',
                default: 'false',
                desc: '间隔',
            }, {
                prop: 'verticle',
                type: 'Boolean',
                options: '',
                default: 'false',
                desc: '是否垂直排列',
            }, {
                prop: 'align',
                type: 'String',
                options: 'center | evenly | justify | right',
                default: '',
                desc: '对齐方式，默认从开始填充完',
            }, {
                prop: 'height',
                type: 'String',
                options: '',
                default: '',
                desc: '高度，当为垂直排列时应必须',
            }, {
                prop: 'width',
                type: 'String',
                options: '',
                default: '',
                desc: '宽度',
            }]),
            params1: Object.freeze([{
                prop: 'tag',
                type: 'String',
                options: '',
                default: 'div',
                desc: '容器标签名'
            }, {
                prop: 'n',
                type: 'String | Number',
                options: '整数1 ~ 10，小数2.5/3.3/6.6/7.5，字符串n',
                default: 'n',
                desc: '子项目宽度，基数为1，总数为10。默认为 n，代表填充剩余空间。<br>换行情况下，在屏幕小于640像素时会变为100%宽度'
            }])
        }
    },
    computed: {
        codes0 () {
            return ` <vsm-cols${this.gap? ' gap': ''}>
    <vsm-n n="1">
        <div class="block vsm-blue">1</div>
    </vsm-n>
    <vsm-n n="3.3">
        <div class="block vsm-red">3.3</div>
    </vsm-n>
    <vsm-n>
        <div class="block vsm-blue">n</div>
    </vsm-n>
</vsm-cols>`;
        },
        codes1 () {
            return `<vsm-cols verticle height="200px">
    <vsm-n n="4" class="block vsm-blue">4</vsm-n>
    <vsm-n class="block vsm-red">n</vsm-n>
</vsm-cols>`;
        }
    }
}
</script>

<style>
.block {
    min-height: 2em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: var(--radius);
    text-align: center;
}
</style>