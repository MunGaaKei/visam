<template>
    <label :class="[
        inline? 'vsm-label-inline': 'vsm-label-input',
    ]">
        <span v-if="label" class="vsm-label" v-html="label"></span>

        <input v-model="currentValue" type="hidden">

        <div class="vsm-slider-bar"
            ref="bar"
            @mousedown="handleClick">
            <div v-if="part" class="vsm-slider-division">
                <a class="vsm-slider-point vsm-slider-value"
                    v-for="(p, i) in points"
                    :key="i"
                    :style="`left:${(p - min) * 100 / dif}%;`">
                    <span>{{ p }}{{ unit }}</span>
                </a>
            </div>
            <div class="vsm-slider-range"
                :class="{
                    'vsm-sliding': typeof slideCursor === 'number'
                }"
                :style="rangeCSS">
                <a v-if="isRange"
                    class="vsm-slider vsm-slider-value"
                    :class="{
                        'vsm-on': slideCursor === 0
                    }"
                    @mousedown.stop="slideStart(0, $event)"
                    style="left:0;">
                    <span>{{ currentValue[0] }}{{ unit }}</span>
                </a>
                <a class="vsm-slider vsm-slider-value"
                    :class="{
                        'vsm-on': slideCursor === 1
                    }"
                    @mousedown.stop="slideStart(1, $event)">
                    <span>{{ isRange? currentValue[1]: currentValue }}{{ unit }}</span>
                </a>
            </div>
        </div>

    </label>
</template>

<script>
import vsmInput from '../input/index';
import { throttle } from '../../js/utils';

export default {
    name: 'vsmSlider',
    props: {
        inline: Boolean,
        label: String,
        value: {
            type: Number | Array,
            default: 0
        },
        name: String,
        max: {
            type: Number | String,
            default: 100
        },
        min: {
            type: Number | String,
            default: 0
        },
        part: {
            type: Number | String | Array,
            default: 1,
        },
        forceStep: Boolean,
        unit: String
    },
    model: {
        prop: 'value',
        event: 'change'
    },
    components: {
        vsmInput
    },
    data () {
        return {
            slideCursor: null,
            currentValue: this.value,
            rect: null
        }
    },
    computed: {
        isRange () {
            return Array.isArray(this.value);
        },
        dif () {
            return this.max - this.min;
        },
        rangeCSS () {
            let a = 0;
            let b = this.currentValue;
            let width = 0;
            let left = 0;

            if (this.isRange) {
                a = b[0];
                b = b[1];
                left = (a - this.min) / this.dif;
                width = (b - a) / this.dif;
            } else {
                width = (b - this.min) / this.dif;
            }
            
            return `width:${width * 100}%;left:${left * 100}%;`;
        },
        points () {
            let i = 1;
            let arr = [];
            if (typeof this.part === 'number') {
                let num = this.dif / this.part;
                for (; i < this.part; i++) {
                    arr.push(i * num + this.min);
                }
            } else {
                arr = this.part.concat();
            }
            return arr;
        }
    },
    methods: {
        handleClick (e) {
            e.stopPropagation();
            let rect = this.$refs.bar.getBoundingClientRect();
            let dx = e.clientX - rect.left;
            let result = Math.round(dx / rect.width * this.dif) + this.min;

            if (this.isRange) {
                let value = this.currentValue.concat();
                let changeCursor = this.getMinusDif(result, value);
                value[changeCursor] = result;
                this.setValue(value);
            } else {
                this.setValue(result);
            }
        },
        slideStart (cursor, e) {
            e.stopPropagation();
            this.slideCursor = cursor;
            this.rect = this.$refs.bar.getBoundingClientRect();
        },
        slideEnd (e) {
            e.stopPropagation();
            this.slideCursor = null;
            this.forceStep && this.forceValues();
        },
        sliding (e) {
            if (typeof this.slideCursor !== 'number') return;
            e.stopPropagation();
            e.preventDefault();

            let { left, width } = this.rect;
            let dx = e.clientX - left;
            dx = dx > 0? dx: 0;
            dx = dx < width? dx: width;
            let result = Math.round(dx / width * this.dif) + this.min;

            if (this.isRange) {
                let value = this.currentValue.concat();
                value[this.slideCursor] = result;
                this.setValue(value);
            } else {
                this.setValue(result);
            }
            
        },
        setValue (value) {
            if (this.isRange && value[1] < value[0]) {
                value.reverse();
            }

            this.currentValue = value;
            this.$emit('change', value);
        },
        getMinusDif (n, arr) {
            let i = 0;
            let l = arr.length;
            let d;
            let result = 0;
            for (; i < l; i++) {
                if (i === 0) {
                    d = Math.abs(n - arr[i]);
                    continue;
                }
                let nd = Math.abs(n - arr[i]);
                if (nd < d) {
                    d = nd;
                    result = i;
                }
            }
            return result;
        },
        forceValues () {
            if (this.part === 1) return;
            let value = this.currentValue;
            if (this.isRange) {
                value = value.concat();
                value[0] = this.points[this.getMinusDif(value[0], this.points)];
                value[1] = this.points[this.getMinusDif(value[1], this.points)]
            } else {
                value = this.points[this.getMinusDif(value, this.points)];
            }
            this.setValue(value);
        }
    },
    watch: {
        value (value) {
            this.setValue(value);
        }
    },
    components: {
        vsmInput
    },
    beforeMount () {
        this.forceStep && this.forceValues()
        document.addEventListener('mousemove', this.sliding);
        document.addEventListener('mouseup', this.slideEnd);
    },
    beforeDestroy () {
        document.removeEventListener('mousemove', this.sliding);
        document.addEventListener('mouseup', this.slideEnd);
    }
}
</script>

<style>

</style>