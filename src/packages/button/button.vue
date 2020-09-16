<script>
export default {
    name: 'vsmButton',
    props: {
      type: String,
      to: String,

      color: {
        type: String,
        default: ''
      },

      reverse: Boolean | String,
      round: Boolean,
      plain: Boolean,
      block: Boolean,
      loading: Boolean
    },
    data () {
      return {

      }
    },
    render (h) {
      return h(this.to? 'a': 'button', {
        staticClass: 'vsm-btn',
        class: [{
          'vsm-plain': this.plain,
          'vsm-reverse': this.reverse,
          'vsm-round': this.round,
          'vsm-col-x': this.block
        }, this.btnColor],
        on: {
          ...this.$listeners
        }
      }, [
        this.$slots.default,
        h('div', {
          class: 'vsm-loading',
          on: {
            click: (e) => e.stopPropagation()
          }
        })
      ]);
    },
    computed: {
      href () {
        return false;
      },
      btnColor () {
        return this.color? `vsm-${this.color}`: false;
      }
    }
}
</script>

<style>

</style>