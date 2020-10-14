<template>
  <label :class="Classes">
      <span v-if="label" class="vsm-label" v-html="label"></span>
      <vsm-group>
        <slot name="prepend"></slot>
        <input :type="type"
            class="vsm-input"
            :placeholder="placeholder"
            :readonly="readonly">
        <slot name="append"></slot>
      </vsm-group>
  </label>
</template>

<script>
export default {
    name: 'vsmInput',
    props: {
        inline: Boolean,

        label: String,
        
        placeholder: String,
        type: {
            type: String,
            default: 'text'
        },
        readonly: Boolean,
    },
    computed: {
        Classes () {
            return {
                'vsm-label-inline': this.inline,
                'vsm-label-input': !this.inline
            }
        }
    },
    mounted () {
        this.bindGroupClass();
    },
    methods: {
        bindGroupClass () {
            let $s = this.$slots;
            for (let k in $s) {
                $s[k].forEach(node => {
                    node.elm.classList.add('vsm-group-item');
                    node.elm.classList.add('vsm-input-'+ k);
                });
            }
        }
    }
}
</script>

<style>

</style>