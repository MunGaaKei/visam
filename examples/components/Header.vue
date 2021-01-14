<template>
  <header class="header vsm-cols">
      <a v-tooltip:right="'目录'" @click="toggleSidebar" class="sidebar-toggler iconfont icon-menu"></a>
      <a href="https://github.com/MunGaaKei/visam-vue" class="header-item iconfont icon-github" target="_blank" v-tooltip:bottom="'github'"></a>
      <a v-tooltip="'切换主题'" @click="toggleTheme" class="header-item iconfont icon-theme"></a>
      <h1><a href="/"><span class="vue">V</span>ISA<span class="masiv">M</span></a></h1>
  </header>
</template>

<script>
export default {
  props: {
    sidebar: {
      type: Boolean,
      default: true
    },
  },
  data () {
    return {
      themeDark: false
    }
  },
  methods: {
    toggleSidebar () {
      this.$emit('sidebar-toggle', !this.sidebar);
    },
    toggleTheme () {
      document.documentElement.classList.toggle('theme-dark');
    }
  }
}
</script>

<style>
.header {
  display: flex;
  align-items: center;
  padding: 0 var(--gap);
}
.header h1 {
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  background-image: linear-gradient(to right, var(--theme-color-vice) 0%, var(--theme-color) 100%);
}
.sidebar-toggler {
  margin: 0 auto 0 0;
}
.header-item {
  margin: 0 16px 0 0;
}
</style>