<template>
    <div class="vsm-drawer"
        :class="[{
            'vsm-hidden': hidden,
            'vsm-drawer-backdrop': responsive
        }, positionClass]"
        @click="toggle">
        <div class="vsm-drawer-inner" @click.stop="stopPropagation">
            <slot></slot>
        </div>
    </div>
</template>

<script>
import { throttle } from '../../js/utils';

const listenerResize = context => throttle(() => {
    context.responsive = window.innerWidth < context.breakpoint;
});

export default {
    name: 'vsmDrawer',
    model: {
        prop: 'hidden',
        event: 'toggle'
    },
    props: {
        breakpoint: {
            type: Number | String,
            default: 1920
        },
        hidden: Boolean,
        position: {
            type: String,
            default: 'left'
        }
    },
    data () {
        return {
            positionClass: `vsm-drawer-${this.position}`,
            responsive: false,
            listenerResize: listenerResize(this)
        }
    },
    methods: {
        stopPropagation (e) {
            e.stopPropagation();
        },
        toggle (e) {
            this.$emit('toggle', true);
        }
    },
    mounted () {
        this.responsive = window.innerWidth < this.breakpoint;
        window.addEventListener('resize', this.listenerResize);
    },
    beforeDestroy () {
        window.removeEventListener('reisze', this.listenerResize);
    }
}
</script>