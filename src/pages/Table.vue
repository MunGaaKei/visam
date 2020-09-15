<template>
  <div class="vsm-content">
      <h2>表格</h2>

      <h3 class="section-title">使用</h3>
      <div class="codes">
        <vsm-tabs :tabs="codeTabs" :active="activeTab0" @change="switchTab($event, 0)">

        </vsm-tabs>
      </div>
  </div>
</template>

<script>
export default {
    name: 'Table',
    data () {
      return {
        activeTab0: 0
      }
    }
}
</script>

<style>

</style>