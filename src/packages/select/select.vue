<template>
  <label :class="[
    inline? 'vsm-label-inline': 'vsm-label-input',
  ]">
    <span v-if="label" class="vsm-label" v-html="label"></span>

    <vsm-group>
      <slot name="prepend"></slot>
      <div class="vsm-select vsm-group vsm-group-item"
        :class="{ 'vsm-on': show }">

        <input type="text" class="vsm-input vsm-group-item"
          v-model="v"
          :name="name"
          :placeholder="placeholder"
          :readonly="readonly"
          :disabled="disabled"
          :autocomplete="autocomplete"
          :spellcheck="spellcheck"
          :autofocus="autofocus"
          @click.self="handleClick"
        >

        <div class="vsm-input-spinner vsm-group-item">
          <a @click.prevent="handleClick"><i class="iconfont icon-down"></i></a>
          
          <ul class="vsm-select-options" ref="options">
            
          </ul>

        </div>
      </div>
      <slot name="append"></slot>
    </vsm-group>

  </label>
</template>

<script>
export default {
  name: 'vsmSelect',
  props: {
    inline: Boolean,
    label: String,
    value: {
        type: String | Number,
        default: ''
    },
    placeholder: String,
    name: String,
    type: {
        type: String,
        default: 'text'
    },
    pattern: String,
    autocomplete: Boolean,
    spellcheck: Boolean,
    autofocus: Boolean,
    readonly: Boolean,
    disabled: Boolean,
    options: Array,
    showOptions: Boolean
  },
  data () {
    return {
      v: this.value,
      show: this.showOptions
    }
  },
  watch: {
    value ( nv ) {
      this.setValue(nv);
    }
  },
  methods: {
    handleClick (e) {
      console.log(this.show);
      this.show = !this.show;
      this.$emit('click', e);
    }
  }
}
</script>