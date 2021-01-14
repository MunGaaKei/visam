<template>
  <vsm-cols nowrap class="vsm-container"
    :style="offsetLeft">
    <vsm-drawer
      v-model="sidebar"
      class="drawer"
      :breakpoint="breakpoint"
      blur>
      <vsm-tree :list="menu"
        :style="`width:${sidebarWidth}`"
        @node-click="handleMenuClick"></vsm-tree>
    </vsm-drawer>

    <vsm-cols verticle class="vsm-n">
      <Header :sidebar="sidebar" @sidebar-toggle="sidebarToggle"></Header>
      <div class="vsm-n page">
        <router-view name="child"></router-view>
        <Footer></Footer>
      </div>
    </vsm-cols>

  </vsm-cols>

</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { menu } from '@/assets/data/docs'

export default {
  name: 'Docs',
  data () {
    return {
      sidebar: window.innerWidth > 980,
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
      return this.sidebar || this.breakpoint > window.innerWidth? '': `left: -${this.sidebarWidth}`;
    }
  },
  methods: {
    sidebarToggle ( show ) {
      this.sidebar = show;
    },
    handleMenuClick (node, e) {
      if (node.href) {
        let path = `/docs${node.href}`;
        if (path !== this.$route.path) {
            this.$router.push(path);
        }
      }
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
  background: #e9e9e9;
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
    background: #232323;
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
