<template>
  <div class="vsm-viewer vsm-backdrop"
    :class="{
        'vsm-on': show,
        'vsm-viewer-dragging': touchstart
    }">

    <div v-if="toolbar" class="vsm-viewer-toolbar" @touchend.stop @mouseup.stop>
        <a class="vsm-viewer-act iconfont icon-left" @click.stop="handlePN(false)"></a>
        <a class="vsm-viewer-act iconfont icon-right" @click.stop="handlePN(true)"></a>
        <a v-if="zoomable" class="vsm-viewer-act iconfont icon-zoomin" @click.stop="handleZoom(false)"></a>
        <a v-if="zoomable" class="vsm-viewer-act iconfont icon-zoomout" @click.stop="handleZoom(true)"></a>
    </div>

    <div v-if="thumbs"
        ref="thumbs"
        class="vsm-viewer-thumbs"
        @mousedown.stop="handleThumbDragstart"
        @touchend.stop>
        <a class="vsm-viewer-thumbnail"
            v-for="(t, j) in imgs"
            :key="j"
            :class="{ 'vsm-on': current === j }"
            @click.stop="handleThumbClk(j)">
            <img :src="t.thumb">
        </a>
    </div>

    <ul class="vsm-viewer-ul"
        :style="listStyle"
        ref="ul">
        <li class="vsm-viewer-li"
            v-for="(item, i) in imgs"
            :key="i">
            <video v-if="item.type === 'video'" :src="item.img"></video>
            <template v-else>
                <img v-if="lazyload"
                    :data-src="item.img"
                    style="opacity: 0;"
                    ref="img">
                <img v-else
                    :src="item.img"
                    ref="img">
            </template>
            <h4 v-if="item.title" v-html="item.title" class="vsm-viewer-img-title"></h4>
        </li>
    </ul>

    <span v-if="index && imgs.length > 1" class="vsm-viewer-index vsm-viewer-text">{{ current+1 }} / {{ imgs.length }}</span>
    <a class="vsm-viewer-zoom vsm-viewer-text"
        :class="{
            'vsm-on': zooming
        }">{{ scale }}%</a>

  </div>
</template>

<script>
const DELTA_THRESHOLD = 200;
let coord = [];
let distance = 0;
let closable = true;
let ispc = !('ontouchend' in document);
let events = {
    start: ispc? 'mousedown': 'touchstart',
    move: ispc? 'mousemove': 'touchmove',
    end: ispc? 'mouseup': 'touchend',
    wheel: ispc? 'mousewheel': 'wheel'
};
let wheelTimer = null;
let pnTimer = null;
let delta = 0;
let thumbdrag = false;

export default {
    name: 'vsmViewer',
    data () {
        return {
            imgs: [],
            thumbs: true,
            show: false,
            current: 0,
            zooming: false,
            handleWheel: Object.freeze(e => {
                e.preventDefault();
                if ( e.ctrlKey ) {
                    // 缩放
                    if (wheelTimer) return;
                    let scale = (e.deltaX + e.deltaY) > 0? -0.1: 0.1;
                    this.handleZoom(this.oScale + scale);
                    wheelTimer = setTimeout(() => {
                        wheelTimer = null;
                    }, 600);
                } else {
                    // 切换
                    delta += e.deltaX;
                    if ( delta > DELTA_THRESHOLD ) {
                        this.handlePN(true);
                        delta = 0;
                    } else if ( delta < -DELTA_THRESHOLD ) {
                        this.handlePN(false);
                        delta = 0;
                    } else {
                        if (wheelTimer) return;
                        wheelTimer = setTimeout(() => {
                            wheelTimer = null;
                            delta = 0;
                        }, 1200);
                    }
                    if (e.deltaY > 100) this.handleZoom(false);
                    if (e.deltaY < -100) this.handleZoom(true);
                }
                return false;
            }),

            oW: 0,
            oL: 0,
            oT: 0,
            scale: 100,
            oScale: 1,
            minScale: .125,
            maxScale: 2,
            touchstart: false,
            toolbar: true,
            index: true,
            lazyload: false,
            zoomable: true,
            movable: true
        }
    },
    computed: {
        listStyle () {
            return `width:${this.imgs.length * 100}%;\
                    transform:translate3d(-${this.current/this.imgs.length*100}%,0,0);`;
        },
        imgStyle () {
            return `transform:translate3d(${this.oL}px,${this.oT}px,0)scale(${this.oScale});`;
        },
    },
    methods: {
        initImage (i) {
            let img = this.$refs.img[i];
            if (this.lazyload) {
                this.lazyloadImage(img);
            }
            this.scale = Math.round(img.offsetWidth / img.naturalWidth * 100);
            this.oW = img.offsetWidth;
            img.style.cssText = this.imgStyle;
        },
        lazyloadImage (img) {
            let src = img.dataset.src;
            if ( src ) {
                img.addEventListener('load', () => {
                    img.removeAttribute('data-src');
                    img.style.cssText = '';
                }, { once: true });
                img.src = src;
            }
        },
        handleThumbDragstart (e) {
            if ( !ispc ) return;
            let $el = this.$refs.thumbs;
            thumbdrag = true;
            closable = false;
            coord = [e.clientX, e.clientY, $el.scrollLeft, $el.scrollTop];
        },
        handleThumbDrag (e) {
            let offsetX = coord[2] - e.clientX + coord[0];
            let offsetY = coord[3] - e.clientY + coord[1];
            this.$refs.thumbs.scrollTo(offsetX, offsetY);
        },
        handleThumbClk (i) {
            let img = this.$refs.img[this.current];
            this.resetPrev( img );
            this.current = i;
            if (this.lazyload) this.lazyloadImage(this.$refs.img[i]);
        },
        handlePN ( dir ) {
            if ( pnTimer ) return;
            let img = this.$refs.img[this.current];

            this.resetPrev(img);

            if ( dir && this.current !== this.imgs.length - 1) {
                this.current += 1;
            } else if ( !dir && this.current !== 0 ) {
                this.current -= 1;
            }
            if (this.lazyload) this.lazyloadImage(this.$refs.img[this.current]);
            pnTimer = setTimeout(() => {
                pnTimer = null;
            }, 500);
        },
        handleZoom ( zoom ) {
            if ( !this.zoomable ) return;
            let { current, oScale, oW, minScale, maxScale } = this;
            let img = this.$refs.img[current];
            if ( this.zooming ) clearTimeout(this.zooming);

            let nw = img.naturalWidth;
            if (oW === 0) {
                oW = img.offsetWidth;
            }
            if (typeof zoom === 'boolean') {
                let p = nw * .125 / oW;
                if ( zoom ) {
                    if ( (oScale + p) * oW > nw * maxScale ) {
                        this.oScale = nw * maxScale / oW;
                    } else {
                        this.oScale += p;
                    }
                } else {
                    if ( (oScale - p) * oW < nw * minScale ) {
                        this.oScale = nw * minScale / oW;
                    } else {
                        this.oScale -= p;
                    }
                }
            } else {
                this.oScale = zoom;
                if (this.oScale * oW > nw * maxScale) this.oScale = nw * maxScale / oW;
                if (this.oScale * oW < nw * minScale) this.oScale = nw * minScale / oW;
            }
            
            this.scale = (oW * oScale * 100 / img.naturalWidth).toFixed(1);
            img.style.cssText = this.imgStyle;

            this.zooming = setTimeout(() => {
                clearTimeout(this.zooming);
                this.zooming = false;
            }, 1200);

        },
        handleDragStart (e) {
            e.preventDefault();
            e.stopPropagation();
            let touch0, touch1;
            if (!ispc) {
                if ( e.touches.length > 1 ) {
                    // 移动端缩放
                    touch0 = e.touches[0];
                    touch1 = e.touches[1];
                    distance = Math.hypot(touch0.clientX - touch1.clientX, touch0.clientY - touch1.clientY);
                } else {
                    // 移动端平移
                    e = e.touches[0];
                    coord = [e.clientX, e.clientY, this.oL, this.oT];
                }
            } else {
                // PC端平移
                this.touchstart = true;
                coord = [e.clientX, e.clientY, this.oL, this.oT];
            }
        },
        handleDrag (e) {
            if ( ispc ) {
                e.preventDefault();
                if ( thumbdrag ) {
                    this.handleThumbDrag(e);
                    return;
                }
                if ( !this.touchstart ) return;
            }
            let img = this.$refs.img[this.current];
            closable = false;

            if (!ispc) {
                if ( e.touches.length > 1 ) {
                    // 移动端缩放
                    closable = false;
                    let touch0 = e.touches[0];
                    let touch1 = e.touches[1];
                    let d = Math.hypot(touch0.clientX - touch1.clientX, touch0.clientY - touch1.clientY) - distance;
                    if ( d !== 0 ) {
                        if (wheelTimer) return;
                        this.handleZoom(d * .005 + this.oScale);
                        wheelTimer = setTimeout(() => {
                            wheelTimer = null;
                        }, 120);
                    }
                    return;
                } else {
                    // 移动端平移
                    e = e.touches[0];
                    let d = Math.hypot(e.clientX - coord[0], e.clientY - coord[1]);
                    if (d > 0) {
                        this.touchstart = true;
                    } else {
                        closable = true;
                    }
                }
            }

            // PC端平移
            if ( !this.movable ) return;
            this.oL = e.clientX - coord[0] + coord[2];
            this.oT = e.clientY - coord[1] + coord[3];
            img.style.cssText = this.imgStyle;
        },
        handleDrop (e) {
            if (!ispc) {
                e = e.touches[0];
            }
            thumbdrag = false;
            distance = 0;
            this.touchstart = false;
            if ( closable ) {
                this.close();
            }
            closable = true;
        },
        handleKeydown (e) {
            if ( !this.show ) return;
            switch (e.keyCode) {
                case 27:
                    this.close();
                    break;
                case 37:
                    this.handlePN(false);
                    break;
                case 38:
                    this.handleZoom(true);
                    break;
                case 39:
                    this.handlePN(true);
                    break;
                case 40:
                    this.handleZoom(false);
                    break;
                default: break;
            }
        },
        resetPrev (img) {
            img.style.cssText = '';
            this.oT = this.oL = 0;
            this.oScale = 1;
        }
    },
    mounted () {
        this.current = this.active || 0;

        this.$nextTick(() => {
            this.initImage(this.current);
        });

        let $ul = this.$refs.ul;
        if (ispc) {
            $ul.addEventListener('wheel', this.handleWheel);
            $ul.addEventListener('DOMMouseScroll', this.handleWheel);
        }
        document.addEventListener('keydown', this.handleKeydown);
        $ul.addEventListener(events.start, this.handleDragStart);
        document.addEventListener(events.move, this.handleDrag, { passive: false });
        document.addEventListener(events.end, this.handleDrop);
    },
    beforeDestroy () {
        let $ul = this.$refs.ul;
        if (ispc) {
            $ul.removeEventListener('wheel', this.handleWheel);
            $ul.removeEventListener('DOMMouseScroll', this.handleWheel);
        }
        document.removeEventListener('keydown', this.handleKeydown);
        $ul.removeEventListener(events.start, this.handleDragStart);
        document.removeEventListener(events.move, this.handleDrag, { passive: false });
        document.removeEventListener(events.end, this.handleDrop);
    }
}
</script>