<template>
  <form class="vsm-rows">
      <slot></slot>
  </form>
</template>

<script>
export default {
    name: 'vsmForm',
    props: {
        schema: Object,
        data: Object,

    },
    model: {
        prop: 'data',
    }
}
</script>

<style>

</style>