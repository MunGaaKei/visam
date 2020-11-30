<template>
  <label :class="[
    inline? 'vsm-label-inline': 'vsm-label-input',
  ]"
  @click.stop="handleClick">
    <span v-if="label" class="vsm-label" v-html="label"></span>

    <vsm-group>
      <slot name="prepend"></slot>
      <div class="vsm-select vsm-group vsm-group-item"
        :class="{ 'vsm-on': show }">

        <div v-if="multiple"
          class="vsm-input vsm-input-like vsm-group-item"
        >
          <input type="text"
            v-show="show || !displayValue.length"
            :readonly="readonly"
            :placeholder="placeholder"
            class="vsm-select-input"
            v-on="listeners">
          <template v-if="multiple">
            <a class="vsm-chip"
              contenteditable="false"
              v-for="(dv, i) in displayValue"
              :key="i"
              v-html="dv.label"
              @click.stop="select(dv, $event)"></a>
          </template>
        </div>

        <input
          v-else
          class="vsm-input vsm-group-item"
          v-model="currentValue"
          type="text"
          :name="name"
          :readonly="readonly"
          :autocomplete="autocomplete"
          :spellcheck="spellcheck"
          :autofocus="autofocus"
          :placeholder="placeholder"
          v-on="listeners">

        <ul v-if="opts"
          class="vsm-select-options"
          ref="options"
          :style="cssText">
          <li v-for="(opt, i) in displayOptions" :key="i"
            class="vsm-select-option"
            :class="{
              'vsm-disabled': opt.disabled,
              'vsm-selected': multiple? currentValue.includes(opt.value): opt.value === currentValue
            }"
            @click.stop="select(opt, $event)">
              <span v-html="opt.label"></span>
              <i v-if="multiple" class="iconfont icon-check"></i>
            </li>
        </ul>

        <div v-if="!hideSpinner" class="vsm-spinners vsm-group-item">
          <a class="iconfont icon-down vsm-spinner"></a>
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
        type: String | Number | Array,
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

    hideSpinner: Boolean,

    options: Array,
    showOptions: Boolean,

    multiple: Boolean,
    spliter: {
      type: String,
      default: ','
    },

    filter: {
      type: Function | Boolean,
    }
  },
  data () {
    return {
      currentValue: this.value || (this.multiple? []: ''),
      show: this.showOptions,
      cssText: '',
      editable: this.readonly? false: 'plain-text',
      closable: true,
      displayOptions: []
    }
  },
  computed: {
    listeners () {
        const vm = this;
        return Object.assign({}, this.$listeners, {
            input (e) { vm.$emit('input', vm.currentValue, e); },
            click (e) {
              e.stopPropagation();
              vm.toggle();
            }
        });
    },
    opts () {
      return this.options.map(opt => {
        return (typeof opt === 'string' || typeof opt === 'number')? {
          label: opt,
          value: opt
        }: opt;
      });
    },
    displayValue () {
      if (this.multiple) {
        let res = [];
        this.currentValue.map(value => {
          let found = this.opts.find(opt => opt.value === value);
          found && res.push(found);
        });
        return res;
      } else {
        return this.opts.find(opt => opt.value === this.currentValue) || { label: '' };
      }
    }
  },
  methods: {
    toggle () {
      this.show = !this.show;
    },
    select (opt, e) {
      e.preventDefault();
      if (opt.disabled) return;

      if (this.multiple) {
        if (!Array.isArray(this.currentValue)) {
          this.currentValue = [];
        }
        let idx = this.currentValue.findIndex(item => item === opt.value);
        if (idx > -1) {
          this.currentValue.splice(idx, 1);
        } else {
          this.currentValue.push(opt.value);
        }
        this.setValue(this.currentValue, e);
      } else {
        this.setValue(opt.value, e);
        this.show = false;
      }

    },
    setValue (value, e) {
      this.currentValue = value;
      this.$emit('input', value, e);
    },
    collapse () {
      if (this.closable) {
        this.show = false;
      }
    },
    handleClick (e) {
      console.log(111);
      this.closable = false;
      document.documentElement.click();
      this.closable = true;
    },
    handleInput (e) {
      // console.log();
      console.log(e, this.currentValue);
    },
    defaultFilter (opt) {
      return opt.label.includes(this.currentValue) || opt.value.includes(this.currentValue);
    }
  },
  watch: {
    value (value) {
      this.currentValue = value;
    }
  },
  created () {
    this.displayOptions = this.opts;
  },
  beforeMount () {
    document.addEventListener('click', this.collapse);
  },
  beforeDestroy () {
    document.removeEventListener('click', this.collapse);
  }
}
</script>