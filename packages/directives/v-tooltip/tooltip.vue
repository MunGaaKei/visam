<template>
    <div class="vsm-tooltip"
        :class="[{
            'vsm-on': active && display && html,
            'vsm-reverse': reverse,
            'vsm-repos': repos
        },
            color? `vsm-${color}`: ''
        ]"
        :style="cssText"
    >
        <div class="vsm-tooltip-content" v-html="html"></div>
        <span class="vsm-tooltip-caret" :style="caretCssText"></span>
    </div>
</template>

<script>
export default {
    data () {
        return {
            cssText: '',
            caretCssText: '',
            color: '',
            reverse: false,
            repos: false
        }
    },
    beforeMount () {
        this.repos = true;
    },
    mounted () {
        this.repos = false;
    }
}
</script>