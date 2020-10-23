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
          :name="name"
          :value="v"
          :placeholder="placeholder"
          :readonly="readonly"
          :disabled="disabled"
          :autocomplete="autocomplete"
          :spellcheck="spellcheck"
          :autofocus="autofocus"
          @click.self="toggle"
        >

        <ul class="vsm-select-options" ref="options"
          :style="cssText">
          <li v-for="(opt, i) in options" :key="i"
            :class="{
              'vsm-disabled': opt.disabled,
              'vsm-selected': v.includes(typeof opt ==='string'? opt: opt.value)
            }"
            v-html="typeof opt ==='string'? opt: opt.label"
            @click.prevent="select(opt)"></li>
        </ul>

        <div class="vsm-input-spinner vsm-group-item">
          <a @click.prevent="toggle"><i class="iconfont icon-down"></i></a>
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
    showOptions: Boolean,

    multiple: Boolean,
    spliter: {
      type: String,
      default: ','
    },
  },
  data () {
    return {
      v: this.value,
      show: this.showOptions,
      cssText: ''
    }
  },
  watch: {
    value ( nv ) {
      this.setValue(nv);
    }
  },
  methods: {
    toggle () {
      this.show = !this.show;
    },
    select (opt) {
      console.log(this.v, opt);
      
      this.show = false;
    },
    setValue (nv) {
      
      this.v = nv;
    }
  }
}
</script>