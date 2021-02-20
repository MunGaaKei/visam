<template>
  <div class="vsm-swiper" ref="swiper">

    <!-- flow -->
    <div v-if="type === 'flow'"
      class="vsm-swiper-flow"
      :style="{
        margin: gapMargin
      }"
      @mousedown.stop="handleMousedown"
      ref="flowlist">
      <slot></slot>
    </div>

    <template v-else>
      <div class="vsm-swiper-track"
        :class="{
          'vsm-swiper-hover': arrowsOnHover
        }"
        :style="{
          height
        }">

        <!-- normal -->
        <div class="vsm-swiper-list"
          v-if="type === 'normal'"
          ref="normallist"
          :class="{
            'vsm-transless': transless,
            'vsm-swiper-verticle': verticle
          }"
          :style="{
            height: verticle && listSpace,
            width: !verticle && listSpace,
            transform: listPosition
          }"
          @mousedown.stop="handleMousedown"
          @touchstart.stop="handleMousedown">
          <slot></slot>
        </div>

        <!-- card -->
        <div v-else-if="type === 'card'"
          class="vsm-swiper-cards"
          :class="{
            'vsm-transless': transless,
          }">
          <slot></slot>
        </div>

        <!-- fade -->
        <div v-else-if="type === 'fade'"
          class="vsm-swiper-fade">
          <slot></slot>
        </div>


        <template v-if="arrows && length > displayNum">
          <a v-if="arrowPrev"
            class="vsm-swiper-arrow vsm-swiper-arrow-prev"
            v-html="arrowPrev"
            @mousedown.stop
            @click.stop="swipe(false)"></a>

          <a v-if="arrowNext"
            class="vsm-swiper-arrow vsm-swiper-arrow-next"
            v-html="arrowNext"
            @mousedown.stop
            @click.stop="swipe(true)"></a>
        </template>

      </div>

      <div v-if="indicator && length > displayNum"
        class="vsm-swiper-indicator">
        <template v-if="Array.isArray(indicator) && displayNum === 1">
          <a v-for="(p, i) in indicator"
            :key="i"
            :data-swiper="i"
            class="vsm-swiper-indicator-img"
            :class="{
              'vsm-swiper-active': i === currentIndex
            }"
            @click.stop="handleNavClick(i)">
            <img :src="p">
          </a>
        </template>
        <template v-else>
          <a v-for="i in Math.ceil((length - displayNum) / scrollNum) + 1"
            :key="i"
            :data-swiper="i - 1"
            class="vsm-swiper-indicator-a"
            :class="{
              'vsm-swiper-active': i - 1 === currentIndex
            }"
            @click.stop="handleNavClick((i - 1) * scrollNum)">{{ i }}</a>
        </template>
      </div>
    </template>


  </div>
</template>
<script>
let seq = 0;
function cloneVNode ( vnode ) {
  const node = Object.assign({}, vnode);
  seq ++;
  node.key = `cloe-${vnode.key}-${seq}`;
  node.isCloned = true;
  return node;
}

export default {
    name: 'vsmSwiper',
    props: {
      type: {
        type: String,
        default: 'normal',
        validator (t) {
          return ['normal', 'card', 'flow', 'fade'].includes(t);
        }
      },
      height: String,
      autoplay: Boolean,
      arrowPrev: {
        type: String,
        default: `<i class='iconfont icon-left'></i>`
      },
      arrowNext: {
        type: String,
        default: `<i class='iconfont icon-right'></i>`
      },
      arrows: {
        type: Boolean,
        default: true
      },
      arrowsOnHover: Boolean,
      loop: {
        type: Boolean,
        default: true
      },
      interval: {
        type: Number,
        default: 3000
      },
      indicator: {
        type: Boolean | Array,
        default: true
      },
      invert: Boolean,
      trigger: {
        type: String,
        default: 'click'
      },
      initial: {
        type: Number,
        default: 0
      },
      gap: Number,
      draggable: {
        type: Boolean,
        default: true
      },
      dragOffset: String,
      display: {
        type: Number,
        default: 1
      },
      scroll: {
        type: Number,
        default: 1
      },
      pauseOnHover: Boolean,
      verticle: Boolean,
    },
    data () {
        return {
          items: [],
          total: 0,
          length: 0,
          current: this.initial,
          rawSlides: [],
          transless: false,
          swipable: true,
          transitionDuration: 240,
          timer: null,
          scrollNum: Math.min(this.scroll, this.display),
          displayNum: this.type === 'normal'? this.display: 1,

          dragging: false,
          touchable: false,
          dragStart: [0, 0],
          dragEnd: [0, 0],

        }
    },
    methods: {
      swipe ( dir ) {
        let { length, current, scrollNum, swipeTo, resetPosition, loop, displayNum, autoplay } = this;
        
        if ( !loop ) {
          if (dir && current === length - displayNum) return;
          if (!dir && current === 0) return;
        }

        current += dir? scrollNum: -scrollNum;
        
        swipeTo( current, dir );
      },
      swipeTo ( i, dir ) {
        if (!this.swipable) return;
        let { scrollNum, displayNum, length, current, transitionDuration, autoplay, timer } = this;
        let reset = false;
        this.$emit('beforeSwipe', this.current);
        this.swipable = false;

        if ( this.type === 'fade' ) {
          i = (i + length) % length;
        } else if ( typeof dir === 'boolean' ) {
          if ( dir ) {
            if ( i === length ) {
              reset = true;
            } else if (i + displayNum > length) {
              i = current === length - displayNum? length: length - displayNum;
              reset = true;
            }
          } else {
            if ( i === -scrollNum ) {
              i = -displayNum;
              reset = true;
            } else if ( i < 0 ) {
              i = 0;
              reset = true;
            }
          }
        }

        this.current = i;

        if ( autoplay ) {
          timer && clearTimeout(timer);
          this.setTimer();
        }

        setTimeout(() => {
          this.swipable = true;

          if ( reset ) {
            this.transless = true;
            this.current = (i + length) % length;
            setTimeout(() => {
              this.transless = false;
            }, 16);
          }

          this.$emit('afterSwipe', this.current);
        }, transitionDuration);

      },
      prev () {
        this.swipe(false);
      },
      next () {
        this.swipe(true);
      },
      handleNavClick ( i ) {
        this.$emit('navClick', i);
        this.swipeTo(i, true);
      },
      handleMousedown ( e ) {
        let { touchable, type, draggable, autoplay } = this;
        if (!draggable) return;
        this.dragging = true;
        let $el;
        autoplay && this.removeTimer();
        e.preventDefault();

        e = touchable? e.touches[0]: e;

        if (!touchable && type === 'flow') {
          $el = this.$refs.flowlist;
          this.dragStart = [e.clientX, e.clientY, $el.scrollLeft, $el.scrollTop];
        } else {
          this.transless = true;
          $el = this.$refs.normallist;
          this.dragStart = [e.clientX, e.clientY];
        }

      },
      handleMousemove ( e ) {
        if ( !this.dragging ) return;
        let { type, dragStart, current, displayNum, total, verticle, touchable } = this;
        e.preventDefault();
        
        if (type === 'flow') {
          let offsetX = dragStart[2] - e.clientX + dragStart[0];
          let offsetY = dragStart[3] - e.clientY + dragStart[1]
          this.$refs.flowlist.scrollTo(offsetX, offsetY);
        } else if (type === 'normal') {
          if ( touchable ) {
            e = e.touches[0];
            this.dragEnd = [e.clientX, e.clientY];
          }
          let $el = this.$refs.normallist;
          if ( verticle ) {
            let part = $el.offsetHeight / total;
            let range = part * displayNum;
            let initial = (current + displayNum) * part;
            let offset = e.clientY - dragStart[1];
            if ( offset > range ) offset = range;
            if ( offset < -range ) offset = -range;
            $el.style.transform = `translate3d(0, ${-initial + offset}px,0)`;
          } else {
            let part = $el.offsetWidth / total;
            let range = part * displayNum;
            let initial = (current + displayNum) * part;
            let offset = e.clientX - dragStart[0];
            if ( offset > range ) offset = range;
            if ( offset < -range ) offset = -range;
            $el.style.transform = `translate3d(${-initial + offset}px,0,0)`;
          }
        }
      },
      handleMouseup ( e ) {
        if ( !this.dragging ) return false;
        if ( this.type === 'normal' ) {
          this.transless = false;
          let { verticle, total, displayNum, dragStart, dragEnd, current, touchable, dragOffset } = this;
          let offset, part;
          let $el = this.$refs.normallist;

          if ( verticle ) {
            offset = (touchable? dragEnd[1]: e.clientY) - dragStart[1];
            part = $el.offsetHeight / total;
          } else {
            offset = (touchable? dragEnd[0]: e.clientX) - dragStart[0];
            part = $el.offsetWidth / total;
          }
          
          if ( Math.abs(offset) >= (dragOffset || part/3) ) {
            this.swipe( offset < 0 );
          } else {
            let origin = -(current + displayNum) * 100 / total;
            $el.style.transform = verticle? `translate3d(0,${origin}%,0)`: `translate3d(${origin}%,0,0)`;
          }
          
        }
        this.dragging = false;
      },
      setTimer () {
        this.timer = setTimeout(() => {
          this.swipe( this.invert );
        }, this.interval);
      },
      removeTimer () {
        this.timer && clearTimeout(this.timer);
      }
    },
    computed: {
      gapMargin () {
        let { gap, verticle } = this;
        if ( gap ) {
          gap = gap/2 + 'px';
          return verticle? `-${gap} 0`: `0 -${gap}`;
        } else {
          return false;
        } 
      },
      listSpace () {
        let { total, displayNum, loop, length } = this;
        let space = '';
        if ( loop && length > displayNum ) {
          space = total / displayNum * 100 + '%';
        } else {
          space = length / displayNum * 100 + '%';
        }
        return space;
      },
      listPosition () {
        let { verticle, current, total, displayNum, length } = this;
        if ( length <= displayNum ) return false;
        let percent = -100 * (current + displayNum) / total;
        let coord = verticle? `0,${percent}%`: `${percent}%,0`;
        return `translate3d(${coord},0)`;
      },
      currentIndex () {
        let { current, scrollNum, length } = this;
        current += length;
        return Math.ceil( current % length / scrollNum );
      }
    },
    created () {
      let slides = this.$slots.default;
      let l = slides.length;
      let { type, loop, displayNum } = this;
      this.length = l;

      if ( displayNum >= l ) {
        return;
      }

      this.total = l;
      this.rawSlides = slides.slice(0);

      slides.map((slide, i) => {
        slide.swiperIndex = i;
      });

      if ( loop && (type === 'normal' || type === 'card') ) {
        let i = 0;
        let times;
        if ( type === 'normal' ) {
          times = displayNum;
        } else {
          times = 2;
          this.scrollNum = 1;
        }
        for (; i < times; i++) {
          slides.unshift( cloneVNode(this.rawSlides[l - 1 - i]) );
          slides.push( cloneVNode(this.rawSlides[i]) );
        }
        
        this.total += times * 2;

      }
    },
    mounted () {
      let duration = getComputedStyle(this.$el).getPropertyValue('--transition-duration');
      if (duration.endsWith('ms')) {
        duration = duration.slice(0, -2);
      } else if (duration.endsWith('s')) {
        duration = duration.slice(0, -1);
      }
      this.transitionDuration = duration;
      
      this.autoplay && this.setTimer();

      this.touchable = 'ontouchstart' in document;

      let { draggable, type, touchable, handleMousemove, handleMouseup, } = this;
      if (draggable && !touchable || type === 'normal' ) {
        document.addEventListener(touchable? 'touchmove': 'mousemove', handleMousemove);
        document.addEventListener(touchable? 'touchend': 'mouseup', handleMouseup);
      }

      if ( this.autoplay && this.pauseOnHover ) {
        this.$refs.swiper.addEventListener('mouseover', this.removeTimer);
        this.$refs.swiper.addEventListener('mouseleave', this.setTimer);
      }

      this.$emit('initialized');

    },
    beforeDestroy () {
      if ( this.autoplay && this.pauseOnHover ) {
        this.$refs.swiper.removeEventListener('mouseover', this.removeTimer);
        this.$refs.swiper.removeEventListener('mouseleave', this.setTimer);
      }
    },
}
</script>