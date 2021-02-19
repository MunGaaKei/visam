const Cols = {
    name: 'vsmCols',
    props: {
      nowrap: Boolean,
      align: String,
      verticle: Boolean,
      height: String,
      width: String,
      gap: Boolean,
      tag: {
        type: String,
        default: 'div'
      }
    },
    render (h) {
      let { tag, verticle, align, nowrap, gap, height, width } = this;
      return h(tag, {
        class: [
          verticle? 'vsm-rows': 'vsm-cols',
          align? `vsm-align-${align}`: '',
          {
            'vsm-nowrap': nowrap,
            'vsm-gapped': gap
          }
        ],
        style: {
          height,
          width
        }
      }, this.$slots.default)
    }
}

Cols.install = Vue => Vue.component(Cols.name, Cols);

export default Cols;