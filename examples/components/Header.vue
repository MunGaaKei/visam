<template>
  <header class="header vsm-cols">
    <a
      @click="toggleSidebar"
      class="vsm-btn vsm-plain vsm-small iconfont icon-menu"
    ></a>
    <a
      href="https://github.com/MunGaaKei/visam"
      class="vsm-btn vsm-plain vsm-small iconfont icon-github"
      target="_blank"
      v-tooltip:bottom="'GitHub'"
    ></a>
    <a
      v-tooltip="'切换主题'"
      @click="toggleTheme"
      class="vsm-btn vsm-plain vsm-small iconfont icon-theme"
    ></a>
    <h1>
      <router-link to="/"
        ><span class="vue">V</span>ISA<span class="masiv">M</span></router-link
      >
    </h1>
  </header>
</template>

<script>
export default {
  props: {
    sidebar: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      themeDark: false,
    };
  },
  methods: {
    toggleSidebar() {
      this.$emit("sidebar-toggle", !this.sidebar);
    },
    toggleTheme() {
      document.documentElement.classList.toggle("theme-dark");
    },
  },
};
</script>

<style>
.header {
  display: flex;
  align-items: center;
  padding: 0 var(--gap);
}
.header h1 {
  margin-left: 8px;
  font-weight: 900;
  font-style: italic;
  font-size: 2rem;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  background-image: linear-gradient(
    to right,
    var(--theme-color-vice) 0%,
    var(--theme-color) 100%
  );
}
.header .vsm-btn {
  margin-right: 4px;
}
.header .icon-menu {
  margin: 0 auto 0 0;
}
</style>
