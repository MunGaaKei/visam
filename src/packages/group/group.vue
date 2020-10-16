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
                  node.elm.classList.add('vsm-group-item');
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