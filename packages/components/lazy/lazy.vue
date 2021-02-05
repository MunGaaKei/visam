<template>
  <div :class="{
      'vsm-lazy-container': fade,
  }">
    <slot v-if="ready"></slot>
    <slot v-else-if="$slots.skeleton && !ready" name="skeleton"></slot>
    <div v-else :style="loadingStyle">
        <div class="vsm-loading"></div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'vsmLazy',
    props: {
        timeout: Number,
        trigger: String,
        margin: String,
        viewporat: HTMLElement,
        width: String,
        height: String,
        active: Boolean,
        fade: {
            type: Boolean,
            default: true
        }
    },
    data () {
        return {
            ready: false,
            IO: null,
        }
    },
    computed: {
        loadingStyle () {
            let { ready, width, height } = this;
            return ready? null: {
                position: 'relative',
                width,
                height
            };
        }
    },
    methods: {
        observe () {
            let { viewport, margin } = this;
            let opts = {};

            if ( viewport instanceof HTMLElement ) opts.root = viewport;
            if ( margin ) opts.rootMargin = margin;

            this.IO = new IntersectionObserver(entries => {
                entries.map(entry => {
                    if ( entry.isIntersecting ) {
                        this.show();
                        this.IO.unobserve(entry.target);
                    }
                });
            }, opts);

            this.IO.observe(this.$el);
        },
        show () {
            if ( this.fade ) {
                let { $el } = this;
                $el.classList.add('vsm-lazyload');
                $el.offsetWidth;
                $el.classList.remove('vsm-lazyload');
            }
            this.ready = true;
        },
        init () {
            let { timeout, observe, trigger, show } = this;

            if (timeout !== undefined) {
                setTimeout(() => {
                    this.show();
                }, timeout);
            } else if ( trigger ) {
                this.$el.addEventListener(trigger, show, { once: true });
            } else {
                observe();
            }
        }
    },
    mounted () {
        this.init();
    },
    beforeDestroy () {
        let { $el, trigger, show } = this;
        this.IO = null;
        $el.removeEventListener(trigger, show);
    },
    watch: {
        active ( nv ) {
            if ( nv ) {
                this.show();
            }
        }
    }
}
</script>