<template>
  <div class="vsm-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
    name: 'vsmGroup',
    props: {
      label: String
    },
    methods: {
      bindGroupClass () {
          let $s = this.$slots;
          for (let k in $s) {
              $s[k].forEach(node => {
                if ( !node.isComment ) {
                  let { elm, data } = node;

                  elm.classList.add('vsm-group-item');

                  if ( data.slot === 'prepend' || data.slot === 'append' ) {
                    elm.classList.add(`vsm-input-${data.slot}`);
                  }

                }
              });
          }
      }
    },
    mounted () {
      this.bindGroupClass();
    },
}
</script>

<style>

</style>