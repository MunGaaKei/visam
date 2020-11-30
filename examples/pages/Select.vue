<template>
  <div class="vsm-content">
      <h2>选择框</h2>

      <h3 class="section-title">使用</h3>
      <div class="vsm-cols">
        <div class="vsm-col-4">
            <vsm-select
                v-model="value"
                :options="options"
                inline
                label="单选下拉框"
                filter></vsm-select>

            <vsm-select
                v-model="values"
                :options="options"
                multiple
                inline
                label="多选下拉框"
                placeholder="Placeholder"
                filter></vsm-select>
        </div>
        
        <div class="vsm-n">
            <p v-if="value">单选框的值：{{ value }}</p>
            <p v-if="values.length">多选框的值：{{ values.join(',') }}</p>
        </div>
      </div>

  </div>
</template>

<script>
export default {
    name: 'Select',
    data () {
        return {
            value: '',
            values: [],
            options: ['Foo', 'Bar', 'Baz', 'Qux']
        }
    }
}
</script>

<style>

</style>