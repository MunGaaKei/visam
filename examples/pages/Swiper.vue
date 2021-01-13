<template>
  <div class="vsm-content">
      <h2>轮播</h2>

      <h3 class="section-title">普通类型</h3>
      <vsm-swiper
        ref="swiper"
        :display="2"
        :scroll="2"
        :gap="12">
          <vsm-swiper-item v-for="i in 3" :key="i">
              <div class="swiper-block">{{ i }}</div>
          </vsm-swiper-item>
      </vsm-swiper>
      <Codes :codes="codes0" show></Codes>

      <h3 class="section-title">卡片类型</h3>
      <p>必须设置高度属性。</p>
      <br>
      <vsm-swiper type="card" height="200px">
          <vsm-swiper-item v-for="i in 5" :key="i">
              <div class="swiper-block">{{ i }}</div>
          </vsm-swiper-item>
      </vsm-swiper>
      <Codes :codes="codes1"></Codes>

      <h3 class="section-title">渐显类型</h3>
      <p>必须设置高度属性。</p>
      <br>
      <vsm-swiper type="fade" height="200px" arrows-on-hover>
          <vsm-swiper-item v-for="i in 3" :key="i">
              <div class="swiper-block">{{ i }}</div>
          </vsm-swiper-item>
      </vsm-swiper>
      <Codes :codes="codes2"></Codes>

      <h3 class="section-title">流式布局</h3>
      <p>以正常的排列方式表现。</p>
      <br>
      <vsm-swiper type="flow" :gap="12">
          <vsm-swiper-item v-for="i in 8" :key="i">
              <div class="swiper-block" :style="{ width: `${100 + Math.random() * 100 }px` }">{{ i }}</div>
          </vsm-swiper-item>
      </vsm-swiper>
      <Codes :codes="codes3"></Codes>

      <h3 class="section-title">垂直方向</h3>
      <p>必须设置高度属性。</p>
      <br>
      <vsm-swiper :gap="12"
        :display="2"
        verticle
        height="240px"
        :arrows="false">
        <vsm-swiper-item v-for="i in 4" :key="i">
            <div class="swiper-block">{{ i }}</div>
        </vsm-swiper-item>
      </vsm-swiper>
      <Codes :codes="codes4"></Codes>

      <h3 class="section-title">参数说明</h3>
      <vsm-table :data="params" :header="paramsHeader" stickyHeader></vsm-table>

  </div>
</template>

<script>
export default {
    name: 'Swiper',
    data () {
        return {
            codes0: `<vsm-swiper
    ref="swiper"
    :display="2"
    :scroll="2"
    :gap="12">
        <vsm-swiper-item v-for="i in 5" :key="i">
            <div class="swiper-block">{{ i }}</div>
        </vsm-swiper-item>
    </vsm-swiper>`,
            codes1: `<vsm-swiper type="card" height="200px">
    <vsm-swiper-item v-for="i in 5" :key="i">
        <div class="swiper-block">{{ i }}</div>
    </vsm-swiper-item>
</vsm-swiper>`,
            codes2: `<vsm-swiper type="fade" height="200px" arrows-on-hover>
    <vsm-swiper-item v-for="i in 5" :key="i">
        <div class="swiper-block">{{ i }}</div>
    </vsm-swiper-item>
</vsm-swiper>`,
            codes3: `<vsm-swiper type="flow" height="200px">
    <vsm-swiper-item v-for="i in 8" :key="i">
        <div class="swiper-block" :style="{ width: \`\${100 + Math.random() * 100 }px\` }">{{ i }}</div>
    </vsm-swiper-item>
</vsm-swiper>`,
            codes4: `<vsm-swiper :gap="12"
    :display="2"
    verticle
    height="240px"
    :arrows="false">
    <vsm-swiper-item v-for="i in 4" :key="i">
        <div class="swiper-block">{{ i }}</div>
    </vsm-swiper-item>
    </vsm-swiper>`,
            params: Object.freeze([{
                prop: 'type',
                type: 'String',
                options: 'normal | fade | card | flow',
                default: 'normal',
                desc: '轮播类型'
            }, {
                prop: 'display',
                type: 'Number',
                options: '',
                default: '1',
                desc: '每屏展示数，仅对 normal 型有效'
            }, {
                prop: 'scroll',
                type: 'Number',
                options: '',
                default: '1',
                desc: '切换数，仅对 normal 型有效'
            }, {
                prop: 'autoplay',
                type: 'Boolean',
                options: '',
                default: 'false',
                desc: '自动轮播，对 flow 型无效'
            }, {
                prop: 'interval',
                type: 'Number',
                options: '',
                default: '3000',
                desc: '自动轮播计时，单位毫秒ms'
            }, {
                prop: 'loop',
                type: 'Boolean',
                options: '',
                default: 'true',
                desc: '首尾循环，对 flow 型无效'
            }, {
                prop: 'arrows',
                type: 'Boolean',
                options: '',
                default: 'true',
                desc: '左右切换按钮'
            }, {
                prop: 'arrow-prev',
                type: 'String',
                options: '',
                default: `<i class='iconfont icon-left'></i>`,
                desc: '左切换按钮'
            }, {
                prop: 'arrow-next',
                type: 'String',
                options: '',
                default: `<i class='iconfont icon-right'></i>`,
                desc: '右切换按钮'
            }, {
                prop: 'arrows-on-hover',
                type: 'Boolean',
                options: '',
                default: 'false',
                desc: '鼠标悬停时才显示切换按钮'
            }, {
                prop: 'indicator',
                type: 'Boolean | Array',
                options: '',
                default: 'true',
                desc: '索引指示器'
            }, {
                prop: 'invert',
                type: 'Boolean',
                options: '',
                default: 'false',
                desc: '反方向切换，仅在 autoplay 时有效'
            }, {
                prop: 'initial',
                type: 'Number',
                options: '',
                default: '0',
                desc: '初始索引值'
            }, {
                prop: 'gap',
                type: 'Number',
                options: '',
                default: '0',
                desc: '轮播子项对间距，单位像素px，仅对 normal、flow 型有效'
            }, {
                prop: 'draggable',
                type: 'Boolean',
                options: '',
                default: 'true',
                desc: '是否可以拖动，仅对 normal、flow 型有效'
            }, {
                prop: 'drag-offset',
                type: 'String',
                options: '',
                default: '',
                desc: '拖动多少距离触发切换，默认距离为轮播子项的一半宽度'
            }, {
                prop: 'pause-on-hover',
                type: 'Boolean',
                options: '',
                default: '',
                desc: '自动轮播时，当鼠标悬停暂停自动轮播'
            }, {
                prop: 'verticle',
                type: 'Boolean',
                options: '',
                default: '',
                desc: '垂直方向显示，仅对 normal、flow 型有效'
            }, {
                prop: 'height',
                type: 'String',
                options: '',
                default: '',
                desc: '当类型为 fade、card 时，必须设置一个显示高度'
            }, {
                prop: '@beforeSwipe',
                type: 'Function',
                options: '',
                default: '',
                desc: '监听滑动切换前事件，参数（切换前索引）',
                event: true
            }, {
                prop: '@afterSwipe',
                type: 'Function',
                options: '',
                default: '',
                desc: '监听滑动切换前事件，参数（切换后索引）',
                event: true
            }, {
                prop: '@navClick',
                type: 'Function',
                options: '',
                default: '',
                desc: '监听索引指示器点击事件，参数（点击项索引）',
                event: true
            }, {
                prop: '@initialized',
                type: 'Function',
                options: '',
                default: '',
                desc: '监听初始化完成事件',
                event: true
            }, {
                prop: 'slot:default',
                type: 'String',
                options: '',
                default: '',
                desc: '轮播列表',
                slot: true
            }])
        }
    },
}
</script>

<style scoped>
.swiper-block {
    width: 100%;
    height: 120px;
    min-height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
    color: #212121;
    text-align: center;
    font-size: 4rem;
    font-weight: 900;
    border-radius: var(--radius);
}
</style>