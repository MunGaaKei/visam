<template>
  <label :class="[
    inline? 'vsm-label-inline': 'vsm-label-input',
  ]"
  ref="label">
    <span v-if="label" class="vsm-label" v-html="label"></span>

    <vsm-group>
      <slot name="prepend"></slot>
      <div class="vsm-select vsm-group vsm-group-item"
        :class="{ 'vsm-on': show }">

        <div v-if="multiple"
          class="vsm-input vsm-input-like vsm-group-item"
        >
          <input type="text" ref="input"
            v-model="multipleValue"
            v-show="!displayValue.length || (filter && show)"
            :readonly="!filter"
            :placeholder="placeholder"
            :disabled="disabled"
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
          :disabled="disabled"
          :pattern="pattern"
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
    pattern: String,
    autocomplete: {
      type: String,
      default: 'on'
    },
    spellcheck: Boolean,
    autofocus: Boolean,
    readonly: Boolean,
    disabled: Boolean,

    hideSpinner: Boolean,

    options: Array,
    showOptions: Boolean,

    multiple: Boolean,
    top: Boolean,

    filter: Boolean,
    filterDelay: {
      type: Number | String,
      default: 200
    }
  },
  data () {
    return {
      currentValue: this.value || (this.multiple? []: ''),
      show: this.showOptions,
      editable: this.readonly? false: 'plain-text',
      closable: true,
      opts: [],
      displayOptions: [],
      multipleValue: '',
      filterTimer: false,
    }
  },
  computed: {
    listeners () {
        const vm = this;
        return Object.assign({}, this.$listeners, {
            input (e) { vm.$emit('input', vm.currentValue, e); },
            click (e) {
              vm.closable = false;
              vm.toggle();
              if (vm.multiple && vm.show) {
                vm.$nextTick(() => {
                  e.target.focus();
                });
              }
              vm.$emit('click', e);
              vm.closable = true;
            },
            keyup (e) {
              if (vm.filter) {
                vm.triggerFilter();
              }
              vm.$emit('keyup', e);
            },
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
    },
    cssText () {
      return this.top? 'top: auto; bottom: 100%;': '';
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
        this.$refs.input.focus();
      } else {
        this.setValue(opt.value, e);
        this.show = false;
      }
      this.$emit('select', opt, e);
    },
    setValue (value, e) {
      this.currentValue = value;
      this.$emit('input', value, e);
    },
    collapse (e) {
      if (!this.show || !this.closable) return;
      if (!this.$refs.label.contains(e.target)) {
        this.show = false;
      }
    },
    triggerFilter () {
      this.filterTimer && clearTimeout(this.filterTimer);
      this.filterTimer = setTimeout(() => {
        this.displayOptions = this.opts.filter(this.defaultFilter);
        this.$emit('filter', this.displayOptions);
      }, this.filterDelay);
    },
    defaultFilter (opt) {
      let value = this.multiple? this.multipleValue: this.currentValue;
      value = value.trim();
      let found = opt.label.includes(value) || opt.value.includes(value);
      if (opt.keywords) {
        found = opt.keywords.includes(value) || found;
      }
      return found;
    },
    formatOptions (options) {
      return options.map(opt => {
        return (typeof opt === 'string' || typeof opt === 'number')? {
          label: opt,
          value: opt
        }: opt;
      });
    }
  },
  watch: {
    value (value) {
      this.currentValue = value;
    },
    options (value) {
      this.opts = this.formatOptions(value);
      this.displayOptions = this.opts.concat();
    }
  },
  created () {
    this.opts = this.formatOptions(this.options);
    this.displayOptions = this.opts.concat();
  },
  beforeMount () {
    document.addEventListener('click', this.collapse);
  },
  beforeDestroy () {
    document.removeEventListener('click', this.collapse);
  }
}
</script>