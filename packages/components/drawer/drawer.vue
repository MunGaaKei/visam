<template>
    <div class="vsm-drawer"
        :class="[{
            'vsm-on': isActive,
            'vsm-drawer-backdrop': responsive
        }]"
        :style="`${blurEffect}`"
        @click="toggle">
        <div class="vsm-drawer-inner"
            :style="[innerTransform, innerPosition]"
            @click.stop>
            <slot></slot>
        </div>
    </div>
</template>

<script>
import { debounce } from '../../js/utils';

const listenerResize = context => debounce(() => {
    context.responsive = window.innerWidth < context.breakpoint;
});

export default {
    name: 'vsmDrawer',
    model: {
        prop: 'show',
        event: 'toggle'
    },
    props: {
        breakpoint: {
            type: Number | String,
            default: 1940
        },
        show: Boolean,
        position: {
            type: String,
            default: 'left'
        },
        blur: Boolean,
    },
    data () {
        return {
            active: this.show,
            windowWidth: 1941,
            responsive: false,  // 是否进入小屏模式
            listenerResize: listenerResize(this)
        }
    },
    computed: {
        isActive () {
            return this.active || !this.responsive;
        },
        innerTransform () {
            if (this.isActive) return false;
            let offset = 'translate(-100%,0)';
            switch (this.position) {
                case 'top':
                    offset = 'translate(0,-100%)';
                    break;
                case 'right':
                    offset = 'translate(100%,0)';
                    break;
                case 'bottom':
                    offset = 'translate(0,100%)';
                    break;
                default: break;
            }
            return {
                transform: offset
            };
        },
        innerPosition () {
            let position = {};
            switch (this.position) {
                case 'top':
                    position.width = '100%';
                    position.marginBottom = 'auto';
                    break;
                case 'right':
                    position.marginLeft = 'auto';
                    break;
                case 'bottom':
                    position.width = '100%';
                    position.marginTop = 'auto';
                    break;
                default: break;
            }
            return position;
        },
        blurEffect () {
            return this.blur? 'backdrop-filter: blur(12px);': '';
        }
    },
    methods: {
        toggle (e) {
            this.active = !this.active;
            this.$emit('toggle', this.active);
        }
    },
    mounted () {
        this.responsive = window.innerWidth < this.breakpoint;
        window.addEventListener('resize', this.listenerResize);
    },
    beforeDestroy () {
        window.removeEventListener('reisze', this.listenerResize);
    },
    watch: {
        show (nv) {
            this.active = nv;
        }
    }
}
</script>