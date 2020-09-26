<script>
export default {
    name: 'vsmButton',
    props: {
      type: String,
      link: String,
      color: String,
      reverse: Boolean,
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
      const $loading = h('span', {
        class: 'vsm-loading',
        on: {
          click: (e) => e.stopPropagation()
        }
      });

      return h(this.link? 'a': 'button', {
        staticClass: 'vsm-btn vsm-group-item',
        class: [{
          'vsm-plain': this.plain,
          'vsm-reverse': this.reverse,
          'vsm-round': this.round,
          'vsm-col-x': this.block,
          'vsm-btn-loading': this.loading
        }, this.btnColor],
        on: {
          ...this.$listeners
        }
      }, [
        this.$slots.default,
        this.loading? $loading: null
      ]);
    },
    computed: {
      btnColor () {
        return this.color? `vsm-${this.color}`: false;
      }
    }
}
</script>

<style>

</style>