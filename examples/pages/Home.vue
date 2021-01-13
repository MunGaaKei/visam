<template>
  <div class="home">
    <div class="vsm-content">
      <h1 class="visam">VISAM</h1>
      <span class="version">1.0</span>
      <div class="icons">
        <router-link v-tooltip="'使用文档'" to="/docs/button" class="iconfont icon-script"><i></i></router-link>
        <a v-tooltip="'Github'" href="https://github.com/MunGaaKei/visam-vue" target="_blank" class="iconfont icon-github"></a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'Home'
}
</script>

<style scoped>
.home {
  overflow: hidden;
}
.visam {
  margin: 2em 0;
  font-size: 4rem;
  text-align: center;
  font-weight: 900;
  font-style: italic;
  color: var(--color);
  letter-spacing: 4px;
}
.version {
  font-weight: 900;
  font-family: monospace;
}
.icons {
  margin: 1em 0;
  display: flex;
  font-size: 1.5em;
}
.icons > a {
  margin-right: .8em;
}
</style>