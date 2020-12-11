<template>
  <div class="vsm-rows vsm-container" :style="offsetLeft" codes="ithanism">
    <vsm-drawer
      v-model="sidebarHidden"
      class="drawer"
      :breakpoint="breakpoint">
      <vsm-tree :list="menu"
        :style="`width:${sidebarWidth}`"
        @node-click="handleMenuClick"></vsm-tree>
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
      sidebarWidth: '240px',
      menu,
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
    },
    handleMenuClick (node, e) {
      this.$router.push(node.href);
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
  position: relative;
  margin: 80px 0 12px;
  &:before {
    position: absolute;
    z-index: -1;
    bottom: 6px;
    content: '\20';
    width: 1.5em;
    height: 6px;
    background: var(--yellow);
  }
}
.drawer {
  .vsm-drawer-inner {
    background: #e9e9e9;
  }
  .vsm-tree-node-name {
    display: flex;
    > i {
      margin-left: 1em;
      opacity: 0.4;
    }
  }
}
.theme-dark {
  .drawer {
    .vsm-drawer-inner {
      background: #232323;
    }
  }
  .section-title:before {
    background: var(--red);
  }
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
