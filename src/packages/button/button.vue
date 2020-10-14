<script>
import { getDefault } from '../utils';

export default {
    name: 'vsmButton',
    props: {
      type: String,
      to: String | Object,
      color: String,
      reverse: Boolean,
      round: Boolean,
      plain: Boolean,
      block: Boolean,
      loading: Boolean
    },
    data () {
      return {
        btnType: this.type
      }
    },
    render (h) {
      const $loading = h('span', {
        class: 'vsm-loading',
        on: {
          click: (e) => e.stopPropagation()
        }
      });

      return h(this.tag, {
        staticClass: 'vsm-btn',
        props: {
          to: this.to
        },
        attrs: {
          type: this.btnType
        },
        class: [{
          'vsm-plain': this.plain,
          'vsm-reverse': this.reverse,
          'vsm-round': this.round,
          'vsm-col-x': this.block,
          'vsm-btn-loading': this.loading,
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
      tag () {
        let tag = 'button';
        if ( this.to ) {
          tag = 'router-link';
          this.btnType = false;
        } else {
          this.btnType = getDefault(this.btnType, ['button', 'submit', 'reset'], 'button');
        }
        return tag;
      },

      btnColor () {
        return this.color? `vsm-${this.color}`: false;
      }
    },
}
</script>

<style>

</style>