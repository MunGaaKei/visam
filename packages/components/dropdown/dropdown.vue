<template>
  <div ref="rel"
    class="vsm-dropdown"
    :class="{
        'vsm-on': show
    }"
    @mouseenter="handleMouseenter"
    @mouseleave="handleMouseleave"
    @click="handleClick">
      <slot></slot>
      <div ref="menu"
        class="vsm-dropmenu"
        :style="cssPosition"
        @click.stop="handleMenuClick($event)">
          <slot name="content"></slot>
      </div>
  </div>
</template>

<script>
function getOffsetX (rectRel, rectMenu, rectPa) {
    let offset = (rectMenu.width - rectRel.width) / 2;
    let text = 'left: 0;';
    if (offset < 0) {
        text += `left: ${(rectRel.width - rectMenu.width)/2}px;`;
    } else if (offset + 12 < rectRel.left - rectPa.left) {
        text += rectRel.right + 12 + offset < rectPa.right? `left: ${-offset}px;`: 'right: 0;';
    }
    return text;
}

function getOffsetY (rectRel, rectMenu, rectPa) {
    return rectRel.bottom + rectMenu.height + 12 > rectPa.bottom;
}

export default {
    name: 'vsmDropdown',
    props: {
        display: Boolean,
        hover: Boolean,
        position: String,
        hideOnClick: {
            type: Boolean,
            default: true
        }
    },
    data () {
        return {
            cssPosition: '',
            show: this.display,
            closable: true
        }
    },
    methods: {
        setPosition () {
            let { rel, menu } = this.$refs;
            let { position } = this;
            let rectRel = rel.getBoundingClientRect();
            let rectMenu = menu.getBoundingClientRect();
            let rectPa = rel.offsetParent.getBoundingClientRect();
            let offset = (rectMenu.width - rectRel.width) / 2;
            let text = '';
            
            if (!position) {
                text += getOffsetY(rectRel, rectMenu, rectPa)? 'bottom: 100%;': 'top: 100%;' + getOffsetX(rectRel, rectMenu, rectPa);
            } else {
                switch (position) {
                    case 'left':
                        text += getOffsetY(rectRel, rectMenu, rectPa)? 'bottom: 0;': 'top: 0;' + 'right: 100%;';
                        break;
                    case 'right':
                        text += getOffsetY(rectRel, rectMenu, rectPa)? 'bottom: 0;': 'top: 0;' + 'left: 100%;';
                        break;
                    case 'top':
                        text += 'bottom: 100%;' + getOffsetX(rectRel, rectMenu, rectPa);
                        break;
                    case 'bottom':
                    default: 
                        text += 'top: 100%;' + getOffsetX(rectRel, rectMenu, rectPa);
                        break;
                }
            }
            this.cssPosition = text;
        },
        handleClick (e) {
            this.closable = false;
            if (this.hover) return;
            this.setPosition();
            this.show = !this.show;
            this.$emit('toggle', this.show);
            this.closable = true;
        },
        handleMenuClick (e) {
            this.$emit('content-click', e);
            console.log(this.hideOnClick);
            if (this.hideOnClick) {
                this.show = false;
                this.$emit('toggle', this.show);
            }
        },
        handleMouseenter (e) {
            if (!this.hover) return;
            this.setPosition();
            this.show = true;
            this.$emit('toggle', this.show);
        },
        handleMouseleave (e) {
            if (!this.hover) return;
            this.show = false;
            this.$emit('toggle', this.show);
        },
        collapse (e) {
            if (!this.show || !this.closable) return;
            if (!this.$refs.rel.contains(e.target) || this.hideOnClick) {
                this.show = false;
                this.$emit('toggle', this.show);
            }
        }
    },
    beforeMount () {
        document.addEventListener('click', this.collapse);
    },
    beforeDestroy () {
        document.removeEventListener('click', this.collapse);
    }
}
</script>