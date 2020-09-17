<template>
  <div class="params">
      <div class="params-row vsm-cols vsm-gapped"
          v-for="(p, i) in params"
          :key="i">
          <div class="vsm-col-2">
              <h4 class="p-cap">属性</h4>
              <h4 class="p-prop" v-html="p.prop"></h4>
          </div>
          <div class="vsm-col-2">
              <h4 class="p-cap">类型</h4>
              <h4 v-html="p.type"></h4>
          </div>
          <div class="vsm-col-4">
              <h4 class="p-cap">可选值</h4>
              <h4 v-html="p.opts"></h4>
          </div>
          <div class="vsm-col-2 p-def">
              <h4 class="p-cap">默认值</h4>
              <h4 v-html="p.def"></h4>
          </div>
          <div class="vsm-col-x">
              <h4 class="p-cap">说明</h4>
              <p v-html="p.desc"></p>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Params',
  props: {
    params: Array
  }
}
</script>

<style>
.params {
  max-height: 60vh;
  overflow-x: hidden;
}
.p-cap {
  margin-bottom: .2em;
  color: #808080;
}
.p-prop {
  color: var(--blue);
  font-size: 1.25em;
}
.p-def {
  text-align: right;
}
.params-row {
  padding: 1em 1em 1em 0;
  border-bottom: 1px solid #80808022;
  overflow: hidden;
  transition: var(--transition);
}
</style>