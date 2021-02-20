<template>
  <div class="vsm-viewer vsm-backdrop"
    :class="{
        'vsm-on': show,
        'vsm-blur': blur
    }">

    <div class="vsm-viewer-toolbar" @touchend.stop @mouseup.stop>
        <a class="vsm-viewer-act iconfont icon-left" @click.stop="handlePN(false)"></a>
        <a class="vsm-viewer-act iconfont icon-right" @click.stop="handlePN(true)"></a>
        <a class="vsm-viewer-act iconfont icon-zoomin" @click.stop="handleZoom(false)"></a>
        <a class="vsm-viewer-act iconfont icon-zoomout" @click.stop="handleZoom(true)"></a>
    </div>

    <ul class="vsm-viewer-ul"
        :class="{
            'vsm-viewer-dragging': touchstart
        }"
        :style="listStyle"
        ref="ul">
        <li class="vsm-viewer-li"
            v-for="(item, i) in imgs"
            :key="i">
            <video v-if="item.type === 'video'" :src="item.img"></video>
            <img v-else
                :src="item.img"
                ref="img">
        </li>
    </ul>

    <span v-if="imgs.length > 1" class="vsm-viewer-index vsm-viewer-text">{{ current+1 }} / {{ imgs.length }}</span>
    <a class="vsm-viewer-zoom vsm-viewer-text"
        :class="{
            'vsm-on': zooming
        }">{{ scale }}%</a>

    <div v-if="thumbs" class="vsm-viewer-thumbs">

    </div>

  </div>
</template>

<script>
import { debounce } from '../../js/utils';

let coord = [];
let distance = 0;
let closable = true;
let ispc = !('ontouchend' in document);
let events = {
    start: ispc? 'mousedown': 'touchstart',
    move: ispc? 'mousemove': 'touchmove',
    end: ispc? 'mouseup': 'touchend'
}

export default {
    name: 'vsmViewer',
    data () {
        return {
            imgs: [],
            thumbs: true,
            show: false,
            blur: false,
            arrows: true,
            current: 0,
            disabled: false,
            zooming: false,
            handleWheel: Object.freeze(debounce(e => {
                console.log(this, e);
            }, 400)),

            oW: 0,
            oH: 0,
            oL: 0,
            oT: 0,
            scale: 100,
            oScale: 1,
            touchstart: false,
        }
    },
    computed: {
        listStyle () {
            return `width:${this.imgs.length * 100}%;\
                    transform:translate3d(-${this.current/this.imgs.length*100}%,0,0);`;
        },
        imgStyle () {
            return `transform:translate3d(${this.oL}px,${this.oT}px,0)scale(${this.oScale});`;
        }
    },
    methods: {
        initImage (i) {
            let img = this.$refs.img[i];
            
            this.scale = Math.round(img.offsetWidth / img.naturalWidth * 100);
            this.oW = img.offsetWidth;
            this.oH = img.offsetHeight;
            img.style.cssText = this.imgStyle;
        },
        handlePN ( dir ) {
            let img = this.$refs.img[this.current];
            img.style.cssText = '';

            this.oT = this.oL = 0;
            this.oScale = 1;

            if ( dir && this.current !== this.imgs.length - 1) {
                this.current += 1;
            } else if ( !dir && this.current !== 0 ) {
                this.current -= 1;
            }
        },
        handleZoom ( zoom ) {
            let img = this.$refs.img[this.current];
            if ( this.zooming ) clearTimeout(this.zooming);

            let nw = img.naturalWidth;
            let p = nw * .125 / this.oW;
            if ( zoom ) {
                if ( (this.oScale + p) * this.oW > nw * 2 ) {
                    this.oScale = nw * 2 / this.oW;
                } else {
                    this.oScale += p;
                }
            } else {
                if ( (this.oScale - p) * this.oW < nw / 8 ) {
                    this.oScale = nw / 8 / this.oW;
                } else {
                    this.oScale -= p;
                }
            }
            
            this.scale = Math.round(this.oW * this.oScale * 100 / img.naturalWidth);
            img.style.cssText = this.imgStyle;

            this.zooming = setTimeout(() => {
                clearTimeout(this.zooming);
                this.zooming = false;
            }, 1200);

        },
        handleDragStart (e) {
            e.preventDefault();
            let touch0, touch1;
            this.touchstart = true;
            if (!ispc) {
                if ( e.touches.length > 1 ) {
                    touch0 = e.touches[0];
                    touch1 = e.touches[1];
                    distance = Math.hypot(touch0.clientX - touch1.clientX, touch0.clientY - touch1.clientY);
                } else {
                    e = e.touches[0];
                    coord = [e.clientX, e.clientY, this.oL, this.oT];
                }
            } else {
                coord = [e.clientX, e.clientY, this.oL, this.oT];
            }
        },
        handleDrag (e) {
            if ( !this.touchstart ) return;
            e.preventDefault();
            let img = this.$refs.img[this.current];
            closable = false;

            if (!ispc) {
                if ( e.touches.length > 1 ) {
                    let d = Math.hypot(touch0.clientX - touch1.clientX, touch0.clientY - touch1.clientY) - distance;
                    if ( d !== 0 ) this.handleZoom(d > 0);
                    return;
                }
                e = e.touches[0];
            }

            this.oL = e.clientX - coord[0] + coord[2];
            this.oT = e.clientY - coord[1] + coord[3];
            img.style.cssText = this.imgStyle;
        },
        handleDrop (e) {
            if (!ispc) e = e.touches[0];
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
        }
    },
    mounted () {
        this.current = this.active || 0;

        this.$nextTick(() => {
            this.initImage(this.current);
        });

        let $ul = this.$refs.ul;
        if (ispc) $ul.addEventListener('mousewheel', this.handleWheel);
        document.addEventListener('keydown', this.handleKeydown);
        $ul.addEventListener(events.start, this.handleDragStart);
        document.addEventListener(events.move, this.handleDrag, { passive: false });
        document.addEventListener(events.end, this.handleDrop);
    },
    beforeDestroy () {
        let $ul = this.$refs.ul;
        if (ispc) $ul.removeEventListener('mousewheel', this.handleWheel);
        document.removeEventListener('keydown', this.handleKeydown);
        $ul.removeEventListener(events.start, this.handleDragStart);
        document.removeEventListener(events.move, this.handleDrag, { passive: false });
        document.removeEventListener(events.end, this.handleDrop);
    }
}
</script>