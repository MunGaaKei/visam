<template>
  <header class="header vsm-cols">
      <a @click="toggleSidebar" class="sidebar-toggler iconfont icon-menu"></a>
      <a class="header-item iconfont icon-github"></a>
      <span>
        <vsm-checkbox v-model="themeDark" type="text" @change="toggleTheme">
          <i class="iconfont icon-theme"></i>
        </vsm-checkbox>
      </span>
      <h1><a href="/"><span class="vue">V</span>ISA<span class="masiv">M</span></a></h1>
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
      this.$emit('sidebar-toggle', !this.sidebarHidden);
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
  margin: 0 4px;
}
</style>