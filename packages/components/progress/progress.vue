<template>
  <div :class="[
    verticle? 'vsm-rows': 'vsm-cols'
  ]">

    <b v-if="label"
            class="vsm-progress-label"
            v-html="label"></b>

    <div class="vsm-progress"
        :class="{
            'vsm-progress-clickable': clickable
        }"
        :style="progressStyle"
        @mousedown="handleMousedown"
        ref="progress">


        <div v-if="buffer"
            class="vsm-bar vsm-bar-buffer"
            :style="bufferStyle"></div>

        <div class="vsm-bar"
            :class="[colorClass, {
                'vsm-bar-dragging': dragging
            }]"
            :style="barStyle">
            <a v-if="point"
                class="vsm-bar-btn"
                :style="barBtnStyle"
                v-html="point"></a>
        </div>
        
        <div v-if="animating"
            class="vsm-bar-animation"
            :style="colorVar"></div>

    </div>

  </div>
</template>

<script>
const ispc = !('ontouchend' in document);

export default {
    name: 'vsmProgress',
    props: {
        percent: {
            type: Number,
            default: 0
        },
        buffer: Number,
        lineWidth: {
            type: String,
            default: '2px'
        },
        height: String,
        color: String,
        verticle: Boolean,
        clickable: Boolean,
        decimal: Number,
        animating: Boolean,
        hoverEffect: Boolean,
        label: String,
        point: Boolean | String
    },
    model: {
        prop: 'percent',
        event: 'change'
    },
    data () {
        return {
            current: this.percent,
            bufferValue: this.buffer,
            colorClass: '',
            dragging: false
        }
    },
    computed: {
        progressStyle () {
            if ( this.verticle ) {
                return `height: ${this.height};`;
            }
        },
        barStyle () {
            let { current, lineWidth, colorVar, color } = this;
            let text = this.animating? 'opacity: 0;': '';
            if (this.verticle) {
                text += `height: ${current}%;${lineWidth? `width: ${lineWidth};`: ''}`;
            } else {
                text += `width: ${current}%;${lineWidth? `height: ${lineWidth};`: ''}`;
            }
            return text + colorVar;
        },
        bufferStyle () {
            let { bufferValue } = this;
            return `${this.verticle? `height: ${bufferValue}%;`: `width: ${bufferValue}%;`}` + this.colorVar;
        },
        colorVar () {
            let { color } = this;
            if (color) {
                if (color.startsWith('#') || color.startsWith('rgb') || color.startsWith('linear')) {
                    return `background:${color};`;
                } else {
                    this.colorClass = `vsm-${color}`;
                }
            }
        },
        barBtnStyle () {
            return `min-height:${this.lineWidth};min-width:${this.lineWidth};`;
        }
    },
    methods: {
        setValue (v) {
            if (this.decimal > 0) {
                v = Number(v.toFixed(this.decimal));
            }
            this.current = v;
            this.$emit('change', v);
        },
        handleMousedown (e) {
            e.preventDefault();
            if (!this.clickable) return;
            this.dragging = true;
            let pro = this.$refs.progress;
            let rect = pro.getBoundingClientRect();
            this.setValue( this.calcValue(e, rect) );
        },
        handleMousemove (e) {
            if (!this.dragging) return;
            let pro = this.$refs.progress;
            let rect = pro.getBoundingClientRect();
            this.setValue( this.calcValue(e, rect) );
        },
        handleMouseup (e) {
            this.dragging = false;
        },
        calcValue (e, rect) {
            if (this.verticle) {
                return (e.clientY - rect.top) / rect.height * 100;
            } else {
                return (e.clientX - rect.left) / rect.width * 100;
            }
        }
    },
    watch: {
        percent (nv) {
            this.current = nv;
        },
        buffer (nv) {
            this.bufferValue = nv;
        }
    },
    mounted () {
        document.addEventListener(ispc? 'mousemove': 'touchmove', this.handleMousemove);
        document.addEventListener(ispc? 'mouseup': 'touchend', this.handleMouseup);
    },
    beforeDestroy () {
        document.removeEventListener(ispc? 'mousemove': 'touchmove', this.handleMousemove);
        document.addEventListener(ispc? 'mouseup': 'touchend', this.handleMouseup);
    }
}
</script>