<template>
  <div class="home">
    <div class="vsm-content">
      <h1 class="visam">VISAM</h1>
      <span class="version">{{ version }}</span>
      <div class="icons">
        <a v-tooltip="'使用文档'" href="/docs/intro" class="iconfont icon-script"><i></i></a>
        <a v-tooltip="'GitHub'" href="https://github.com/MunGaaKei/visam" target="_blank" class="iconfont icon-github"></a>
      </div>
    </div>
  </div>
</template>

<script>
import { version } from '../../package.json';

export default {
    name: 'Home',
    data () {
      return {
        version
      }
    }
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