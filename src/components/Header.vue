<template>
  <header class="header vsm-cols">
      <a @click="toggleSidebar" class="sidebar-toggler iconfont icon-menu"></a>
      <h1><a href="/"><span class="vue">V</span>ISA<span class="masiv">M</span></a></h1>
      <vsm-checkbox v-model="themeDark" type="text" @change="toggleTheme">
        <i class="iconfont icon-theme"></i>
      </vsm-checkbox>
  </header>
</template>

<script>
export default {
  props: {
    sidebarHidden: {
      type: Boolean,
      default: false
    },
  },
  data () {
    return {
      themeDark: false
    }
  },
  methods: {
    toggleSidebar () {
      this.$bus.$emit('sidebar-toggle', !this.sidebarHidden);
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
  justify-content: center;
  padding: 0 var(--gap);
  /* border-bottom: 1px solid var(--background-vice); */
}
.header h1 {
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  background-image: linear-gradient(to right, #3fb982 0%, var(--theme-color) 100%);
}
.sidebar-toggler {
  margin: 0 6px 0 0;
}
</style>