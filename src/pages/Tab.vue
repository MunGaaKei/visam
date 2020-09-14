<template>
  <div class="vsm-content">
    <h2>标签页</h2>
    <h3 class="section-title">基本</h3>
    <vsm-tabs
      :tabs="tabs"
      title="name"
      :active="activeTab"
      @change="listener">
      
    </vsm-tabs>


    <h3 class="section-title">参数</h3>
  </div>
</template>

<script>
export default {
    name: 'Tab',
    data () {
      return {
        activeTab: 0,
        tabs: [{
          name: 'William Shakespeare',
          content: 'Glorious road is narrow, a person can only move forward, not backward; so you should continue in this one narrow road moving forward, because many people are in competition behind you, a bear with a.'
        }, {
          name: '题破山寺后禅院',
          content: '清晨入古寺，初日照高林。曲径通幽处，禅房花木深。山光悦鸟性，潭影空人心。万籁此都寂，但余钟磬音。'
        }, {
          name: 'TAB THREE',
          content: '标签页内容'
        }, {
          name: '黑色毛衣',
          content: '白色蜻蜓',
          disabled: true
        }, {
          name: '听妈妈的话',
          content: '因为张学友开始准备唱吻别'
        }],
      }
    },
    methods: {
      listener (i, e) {
        this.activeTab = i;
      }
    },
}
</script>

<style lang="scss">

</style>