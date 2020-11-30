<template>
  <div class="vsm-rows vsm-container" :style="offsetLeft" codes="ithanism">
    <vsm-drawer
      v-model="sidebarHidden"
      class="drawer"
      :breakpoint="breakpoint">
      <vsm-tree :list="menus" :style="`width:${sidebarWidth}`"></vsm-tree>
    </vsm-drawer>

    <Header :sidebarHidden="sidebarHidden" @sidebar-toggle="sidebarToggle"></Header>
    <div class="vsm-n page">
      <router-view />
      <Footer></Footer>
    </div>

  </div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { menu } from '@/assets/data/docs'

export default {
  name: 'App',
  data () {
    return {
      sidebarHidden: window.innerWidth < 980,
      sidebarWidth: '200px',
      menus: menu,
      breakpoint: 780
    }
  },
  components: {
    Header,
    Footer
  },
  computed: {
    offsetLeft () {
      return this.sidebarHidden || window.innerWidth < this.breakpoint? '': `padding-left: ${this.sidebarWidth}`;
    }
  },
  methods: {
    sidebarToggle (hidden) {
      this.sidebarHidden = hidden;
    }
  }
}
</script>

<style lang="scss">
.page {
  height: 100%;
  overflow-x: hidden;
}
.section-title {
  margin: 80px 0 12px;
}
.drawer .vsm-drawer-inner {
  background: var(--theme-color-hover);
}
.widget {
  margin-right: var(--gap);
  padding-right: var(--gap);
  display: flex;
  align-items: center;
  justify-content: center;
}
.footer {
  min-height: 60px;
}
</style>
