<template>
  <div class="vsm-content">
      <h2>开始使用</h2>

      <h3 class="section-title">安装</h3>
      
      <p>1.</p>
      <Codes :codes="install" :tools="false" language="node"></Codes>
      <br>
      <p>2.</p>
      <Codes :codes="use" :tools="false" language="node"></Codes>

      <h3 class="section-title">按需加载</h3>
      <p>安装 <a href="https://github.com/ElementUI/babel-plugin-component" target="_blank" class="link">babel-plugin-component</a></p>
      <Codes :codes="bpc" :tools="false" language="node"></Codes>
      <br>
      <p>配置 babel.config.js</p>
      <Codes :codes="babel" :tools="false" language="json"></Codes>
      <br>
      <p>选择组件引入</p>
      <Codes :codes="imports" :tools="false" language="js"></Codes>


  </div>
</template>

<script>
export default {
    name: 'Start',
    data () {
      return {
        install: `npm install visam`,
        use: `import visam from 'visam'
import 'visam/lib/visam.css'

Vue.use(visam)`,
        bpc: `npm i babel-plugin-component -D`,
        babel: `plugins: [
  ["component", {
    libraryName: "visam",
    libDir: "lib/src",
    style: false,
  }],
]`,     
        imports: `import { vsmButton, vsmCheckbox } from 'visam';

Vue.use(vsmButton);
Vue.use(vsmCheckbox);`
      }
    }
}
</script>

<style scoped>
.script {
  font-size: 1.2em;
  font-weight: 600;
}
</style>