<template>
  <div class="vsm-rows vsm-container" codes="ithanism">
    <Header :sidebarHidden="sidebarHidden"></Header>
    <div class="vsm-n vsm-container">
      <vsm-drawer
        v-model="sidebarHidden"
        breakpoint="780">
        <vsm-tree :list="menus" :style="`width:${sidebarWidth}`"></vsm-tree>
      </vsm-drawer>

      <div class="vsm-n page" :style="paddingLeft">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header'
import { menu } from '@/assets/data/docs'

export default {
  name: 'App',
  data () {
    return {
      sidebarHidden: window.innerWidth < 980,
      sidebarWidth: '200px',
      menus: menu,
    }
  },
  components: {
    Header
  },
  computed: {
    paddingLeft () {
      return this.sidebarHidden? '': `padding-left: ${this.sidebarWidth}`;
    }
  },
  mounted () {
    this.$bus.$on('sidebar-toggle', hidden => this.sidebarHidden = hidden);
  }
}
</script>

<!-- <style src="@/assets/css/iconfont/iconfont.css"></style> -->

<style src="@/assets/css/visam.css"></style>

<style lang="scss">
.page {
  height: 100%;
  overflow-x: hidden;
  .hljs {
    padding: 4px 1.5em;
    border-radius: 4px;
    font-family: consolas;
    outline: none;
  }
}
.section-title {
  margin: 40px 0 20px;
}
.codes {
  margin: 1rem auto;
}
.panel {
  padding: var(--gap) 0;
}
</style>
