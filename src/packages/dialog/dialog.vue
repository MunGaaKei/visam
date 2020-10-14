<template>
  <div class="vsm-backdrop" :class="{ 'vsm-on': show }" @click.self="dismiss">
    <div class="vsm-dialog">
      <header class="vsm-dialog-header" v-html="title"></header>
      <div class="vsm-dialog-content">
        <slot></slot>
      </div>
      <footer class="vsm-dialog-footer"></footer>
    </div>
  </div>
</template>

<script>
export default {
  name: 'vsmDialog',
  props: {
    title: String,
    show: Boolean
  },
  model: {
    prop: 'show',
    event: 'change'
  },
  data () {
    return {
    }
  },
  methods: {
    dismiss () {
      this.toggle();
    },
    toggle () {
      this.$emit('change', false);
    }
  }
}
</script>

<style>

</style>