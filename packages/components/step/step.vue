<template>
  <div class="vsm-steps"
    :class="[
      `vsm-align-${align}`,
      {
        'vsm-rows': verticle
      }
    ]">

    <template v-for="(s, i) in items">

      <template v-if="i !== 0 && split !== 'none'">
        <i class="vsm-step-split vsm-step-arrow iconfont"
          v-if="split === 'arrow'"
          :key="'split-'+ i"
          :class="[
            verticle? 'icon-down': 'icon-right',
            { 'vsm-step-finished': currentValue >= i }
          ]"></i>
        <span class="vsm-step-split vsm-step-line"
          v-else
          :class="[
            { 'vsm-step-finished': currentValue >= i }
          ]"
          :key="'split-'+ i"></span>
      </template>

      <a :key="'a-'+ i"
        class="vsm-step"
        :class="{
          'vsm-on': currentValue === i,
          'vsm-step-finished': currentValue > i
        }"
        @click="handleClick(i)">
        <span v-if="s.icon"
          class="vsm-step-icon"
          v-html="currentValue > i && s.iconFinish? s.iconFinish: s.icon"></span>
        <h5 class="vsm-step-title" v-html="s.title"></h5>
        <p class="vsm-step-content" v-html="s.content"></p>
      </a>
    </template>
    
  </div>
</template>

<script>
export default {
    name: 'vsmStep',
    props: {
      current: Number,
      steps: {
        type: Array,
        default () {
          return [];
        }
      },
      clickable: Boolean,
      align: {
        type: String,
        default: 'justify',
        validator (a) {
          return ['justify', 'evenly', 'center', 'left', 'right'].includes(a);
        }
      },
      verticle: Boolean,
      split: {
        type: String,
        default: 'line',
        validator (s) {
          return ['line', 'arrow', 'none'].includes(s);
        }
      }
    },
    model: {
      prop: 'current',
      event: 'change'
    },
    data () {
      return {
        currentValue: this.current
      }
    },
    computed: {
      items () {
        return this.steps.map((s, i) => {
          if ( typeof s === 'string' ) {
            return { title: s, icon: this.index? i+1: undefined };
          } else {
            if ( !s.icon ) s.icon = i+1;
            return s;
          }
        });
      }
    },
    methods: {
      handleClick (i) {
        if (!this.clickable) return;
        this.setValue(i);
      },
      setValue (v) {
        this.currentValue = v;
        this.$emit('change', v);
      }
    },
    watch: {
      current (nv) {
        this.currentValue = nv;
      }
    }
}
</script>