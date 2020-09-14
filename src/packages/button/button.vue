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

      reverse: Boolean,
      round: Boolean,
      plain: Boolean,
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
        }, this.btnColor],
        on: {
          ...this.$listeners
        }
      }, this.$slots.default);
    },
    computed: {
      href () {
        return false;
      },
      btnType () {
        // return this.href? false: ['button', 'submit', 'reset'].find(this.type) || 'button';
      },
      btnColor () {
        return this.color? `vsm-${this.color}`: false;
      }
    }
}
</script>

<style>

</style>