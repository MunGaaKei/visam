const Icon = {
    name: 'vsmIcon',
    props: {
        icon: String,
        tag: {
          type: String,
          default: 'i'
        },
        size: String
    },
    render (h) {
      return h(this.tag, {
        staticClass: 'iconfont vsm-icon',
        class: this.iconName,
        style: this.fontSize
      })
    },
    computed: {
      iconName () {
        return 'icon-'+ this.icon;
      },
      fontSize () {
        return `font-size: ${this.size}`;
      }
    }
}

Icon.install = Vue => Vue.component(Icon.name, Icon)

export default Icon;