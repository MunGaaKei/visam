import Params from '@/components/Params';

export default {
  data () {
    return {
      codeTabs: [
        '<i class="iconfont icon-app"></i>',
        '<i class="iconfont icon-script"></i>'
      ],
      paramTabs: [
        '属性',
        '事件'
      ]
    }
  },
  methods: {
    switchTab (i, tab) {
      this[`activeTab${tab}`] = i;
    }
  },
  components: {
    Params
  }
}