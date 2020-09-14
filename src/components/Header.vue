<template>
  <header class="header vsm-cols">
      <h1><a href="/"><span class="vue">V</span>ISA<span class="masiv">M</span></a></h1>
      <a @click="toggle" class="sidebar-toggler iconfont icon-list"></a>
  </header>
</template>

<script>
export default {
  props: {
    sidebarHidden: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    toggle () {
      this.$bus.$emit('sidebar-toggle', !this.sidebarHidden);
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
}
.vue {
  color: #3fb982;
}
.masiv {
  color: var(--theme-color);
}
.sidebar-toggler {
  margin-left: 1rem;
}
</style>