<template>
  <div class="vsm-swiper-item"
    :class="{
        'vsm-swiper-active': isActive,
        'vsm-swiper-cloned': $vnode.isCloned,
        'vsm-swiper-prev': isPrev,
        'vsm-swiper-next': isNext
    }"
    :style="{
        padding
    }">
      <slot></slot>
  </div>
</template>

<script>
export default {
    name: 'vsmSwiperItem',
    data () {
        return {
            current: this.$parent.current,
            display: this.$parent.displayNum,
            type: this.$parent.type,
            length: this.$parent.length,
            index: this.$vnode.swiperIndex
        }
    },
    computed: {
        padding () {
            let { gap, verticle } = this.$parent;
            if ( gap ) {
                gap = gap/2 + 'px';
                return verticle? `${gap} 0`: `0 ${gap}`;
            } else {
                return false;
            }
        },
        isActive () {
            let { type, index, current, display, length } = this;
            if (type === 'flow') return;
            if (type === 'card') {
                return (current + length) % length === index;
            } else {
                return index >= current && index < current + display;
            }
        },
        isPrev () {
            let { type, current, length, index } = this;
            if (type !== 'card') return false;
            return (current - 1 + length) % length === index;
        },
        isNext () {
            let { type, current, length, index } = this;
            if (type !== 'card') return false;
            return (current + 1) % length === index;
        }
    },
    created () {

        if ( this.type !== 'flow' ) {
            this.$parent.$watch('current', nv => {
                this.current = nv;
            });

            this.$parent.$watch('display', nv => {
                this.display = nv;
            });
        }
        
    },
}
</script>