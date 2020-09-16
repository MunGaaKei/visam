export default {
  data () {
    return {
      codeTabs: [
        '<i class="iconfont icon-app"></i>',
        '<i class="iconfont icon-script"></i>'
      ]
    }
  },
  methods: {
    switchTab (i, tab) {
      this[`activeTab${tab}`] = i;
    }
  }
}