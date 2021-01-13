<template>
  <div class="vsm-collapse">
    <slot></slot>
  </div>
</template>

<script>
export default {
    name: 'vsmCollapse',
    props: {
      active: {
        type: Number | Array,
        default () {
          return [];
        },
      },
      icon: String,
      iconTrigger: Boolean
    },
    model: {
      prop: 'active',
      event: 'change'
    },
    data () {
        return {
          isAccordion: !Array.isArray(this.active),
          value: this.active,
        }
    },
    methods: {
      changeValue ( index, active ) {
        if ( this.isAccordion ) {
          this.value = this.value === index? -1: index;
        } else {
          let i = this.value.indexOf(index);
          if ( i > -1 ) {
            this.value.splice(i, 1);
          } else {
            this.value.push(index);
          }
        }
        this.$emit('toggle', index, active);
        this.$emit('change', this.value);
      }
    },
    created () {
      let vnodes = this.$slots.default;
      let i = 0;
      vnodes.map(node => {
        let co = node.componentOptions;
        if ( co ) {
          node.collapseIndex = i;
          ++ i;
        }
      });
    },
    watch: {
      active ( nv ) {
        this.value = nv;
      }
    }
}
</script>