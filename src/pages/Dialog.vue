<template>
  <div class="vsm-content">
    <h2>对话框</h2>

    <h3 class="section-title">使用</h3>
    <div class="codes">
      <vsm-tabs :tabs="codeTabs" v-model="activeTab0">
        <div class="panel" v-show="activeTab0 === 0">
          <vsm-button color="black" @click="dialog0 = true">填写</vsm-button>
        </div>
      </vsm-tabs>
    </div>

    <vsm-dialog v-model="dialog0" title="TITLE">DIALOG CONTENT</vsm-dialog>

  </div>
</template>

<script>
export default {
  name: 'Dialog',
  data () {
    return {
      activeTab0: 0,
      dialog0: false
    }
  },
  methods: {

  }
}
</script>

<style>

</style>