<template>
  <div class="params">
      <div class="params-row vsm-cols vsm-gapped"
          v-for="(p, i) in params"
          :key="i">
          <div class="vsm-col-2">
              <h4 class="cap">属性</h4>
              <h4 class="prop" v-html="p.prop"></h4>
          </div>
          <div class="vsm-col-2">
              <h4 class="cap">类型</h4>
              <h4 v-html="p.type"></h4>
          </div>
          <div class="vsm-col-4">
              <h4 class="cap">可选值</h4>
              <h4 v-html="p.opts"></h4>
          </div>
          <div class="vsm-col-2 p-def">
              <h4 class="cap">默认值</h4>
              <h4 v-html="p.def"></h4>
          </div>
          <div class="vsm-col-x">
              <h4 class="cap">说明</h4>
              <p class="desc" v-html="p.desc"></p>
          </div>
      </div>
      <div v-if="!params.length" class="null">Null</div>
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

<style scoped>
.params {
  margin: 8px 0 40px;
  max-height: 60vh;
  overflow-x: hidden;
}
.cap {
  margin-bottom: .2em;
  color: #808080;
}
.cap + h4 {
  font-style: italic;
}
.cap + .prop {
  color: var(--blue);
}
.def {
  text-align: right;
}
.desc {
  margin-top: .5em;
}
.params-row {
  padding: 10px;
  border-bottom: 1px solid var(--theme-color-hover);
  overflow: hidden;
  border-radius: var(--radius);
  transition: var(--transition);
}
.params-row:hover {
  background: var(--theme-color-hover);
}
.null {
  padding: 1em;
  font-style: italic;
}
</style>