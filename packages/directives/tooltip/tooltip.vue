<template>
    <div class="vsm-tooltip"
        :class="[{
            'vsm-on': active && display && html,
            'vsm-reverse': reverse
        },
            color? `vsm-${color}`: ''
        ]"
        :style="cssText"
    >
        <div v-html="html"></div>
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
        }
    }
}
</script>

<style>

</style>