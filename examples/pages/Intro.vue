<template>
  <div class="vsm-content">
      <h3 class="section-title"></h3>
      <p>这是一个基于 <a href="https://cn.vuejs.org/v2/guide/index.html" target="_blank" class="vue">Vue 2+</a> 开发的 UI 框架。</p>
      <br>
      <p>框架的开发特点与 <a href="https://mungaakei.github.io/masiv/" target="_blank" class="masiv link">MASIV</a> 类似，虽然简洁得像这篇介绍 📄，但拥有更多的样式组件和功能，极易上手。</p>
      <br>
      <p>开发者结合实际经验，抽取出一些常用的功能，同时根据自己的组件设计来开发这个框架 📦。历时不长，所以框架离成熟还有很长的距离，因此希望可以拥有更多的使用者 🧑‍💻 和使用建议 ✉️。</p>
      <br>
      <br>
      <br>
      <p><router-link :to="'/docs/start'" class="vsm-btn">开始使用 👏</router-link></p>
  </div>
</template>

<script>
export default {
    name: 'Intro'
}
</script>

<style scoped>
.vue {
    color: #42b983;
    font-weight: 600;
    font-style: italic;
}
.masiv {
    font-weight: 800;
}
.link {
    position: relative;
}
.link:before {
    content: '\20';
    position: absolute;
    z-index: -1;
    left: 0; bottom: 0; right: 0;
    background: rgba(0,0,0,.1);
    height: 0;
    transition: height .2s;
}
.link:hover:before {
    height: 1.1em;
}
</style>