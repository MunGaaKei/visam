import Vue from 'vue';
import tooltipTemplate from './tooltip.vue';

const tooltipConstructor = Vue.extend(tooltipTemplate);

class TooltipInstance {
    constructor ($el, binding) {
        let data = binding.value;
        let instance = this;
        if (Object.prototype.toString.call(data) !== "[object Object]") data = { html: data };

        instance.tooltip = new tooltipConstructor({
            data: Object.assign({
                html: '',
                show: 'mouseover',
                hide: 'mouseleave',
                active: false,
                display: true,
                position: binding.arg,
                gap: 12,
                delay: 0,
                events: true,
                selector: ''
            }, data),
            watch: {
                display (value) {
                    if (this.events) return;
                    value? instance.init.call($el, instance): instance.destroy.call($el, instance);
                }
            }
        });

        instance.destroyTimer = null;
        instance.hideTimer = null;
        instance.duration = 0;

    }
    
    init (instance) {
        let { tooltip, hideTimer, destroyTimer } = instance;

        hideTimer && clearTimeout(hideTimer);
        destroyTimer && clearTimeout(destroyTimer);

        if (tooltip.active) return;
        tooltip.$mount();
        
        this.offsetParent.append(tooltip.$el);

        tooltip.active = true;
        instance.setPosition(this);
    }

    destroy (instance) {
        let { tooltip, duration, hideTimer, destroyTimer } = instance;

        if (!duration) {
            duration = getComputedStyle(tooltip.$el).getPropertyValue('--transition-duration');
            if (duration.endsWith('ms')) {
                duration = duration.slice(0, -2);
            } else if (duration.endsWith('s')) {
                duration = duration.slice(0, -1);
            }
        }

        hideTimer && clearTimeout(hideTimer);
        instance.hideTimer = setTimeout(() => {
            destroyTimer && clearTimeout(destroyTimer);
            tooltip.active = false;
            instance.destroyTimer = setTimeout(() => { tooltip.$el.remove(); }, duration);
        }, tooltip.delay);
        
    }

    setPosition (target) {
        let { tooltip } = this;
        if (tooltip.selector) {
            target = target.querySelector(tooltip.selector) || target;
        }
        let rectTar = target.getBoundingClientRect();
        let rectSrc = tooltip.$el.getBoundingClientRect();
        let $pa = target.offsetParent;
        let w = $pa.scrollWidth;
        let h = $pa.scrollHeight;
        let { position, gap } = tooltip;
        
        let left = 0;
        let top = 0;
        let caretLeft = 0;
        let caretTop = 0;
        let rotate = 45;

        if (position !== 'left' && position !== 'right') {
            if (rectTar.width > rectSrc.width) {
                left = target.offsetLeft + (rectTar.width - rectSrc.width)/2;
                caretLeft = rectSrc.width/2;
            } else {
                left = target.offsetLeft + rectTar.width/2;
                if (left > rectSrc.width/2 + gap) {
                    left -= rectSrc.width/2;
                    caretLeft = rectSrc.width/2;
                } else {
                    left = target.offsetLeft;
                    caretLeft = rectTar.width/2;
                }
                if (left + rectSrc.width > w) {
                    left = w - gap - rectSrc.width;
                    caretLeft = rectSrc.width - rectTar.width/2;
                }
            }
        } else if (position) {
            if (rectTar.height > rectSrc.height) {
                top = target.offsetTop + (rectTar.height - rectSrc.height)/2;
                caretTop = rectSrc.height/2;
            } else {
                top = target.offsetTop + rectTar.height/2;
                if (top > rectSrc.height/2 + gap) {
                    top -= rectSrc.height/2;
                    caretTop = rectSrc.height/2;
                } else {
                    top = target.offsetTop;
                    caretTop = rectTar.height/2;
                }
                if (top + rectSrc.height > h) {
                    top = h - gap - rectSrc.height;
                    caretTop = rectSrc.height - rectTar.height/2;
                }
            }
        }
        
        if (['top', 'left', 'right', 'bottom'].includes(position)) {
            if (position === 'top') {
                top = target.offsetTop - gap - rectSrc.height;
                caretTop = rectSrc.height - 2;
                rotate = 225;
            } else if (position === 'bottom') {
                top = target.offsetTop + gap + rectTar.height;
                caretTop = 1;
            } else if (position === 'left') {
                left = target.offsetLeft - gap - rectSrc.width;
                caretLeft = rectSrc.width - 2;
                rotate = 135;
            } else if (position === 'right') {
                left = target.offsetLeft + rectTar.width + gap;
                caretLeft = 1;
                rotate = 315;
            }
        } else {
            top = target.offsetTop - gap*2 - rectSrc.height;
            if (top > 0) {
                caretTop = rectSrc.height - 2;
                top += gap;
                rotate = 225;
            } else {
                caretTop = 2;
                top = target.offsetTop + rectTar.height + gap;
            }
        }

        tooltip.cssText = `left:${left}px;top:${top}px;`;
        tooltip.caretCssText = `left:${caretLeft}px;top:${caretTop-1}px;transform:translate(-50%,-50%) rotate(${rotate}deg);`;
    }
}

const Tooltip = {

    name: 'tooltip',

    install (Vue, options) {
        if (Vue.prototype.$isServer) return;

        Vue.directive(this.name, this);
    },

    bind ($el, binding) {
        let instance = new TooltipInstance($el, binding);
        let { tooltip } = instance;
        $el.$tooltip = instance;
        let $tarEl = $el;
        if (tooltip.selector) {
            $tarEl = $el.querySelector(tooltip.selector) || $el;
        }
        
        if (tooltip.events) {
            $tarEl.addEventListener(
                tooltip.show,
                instance.init.bind($el, instance),
                binding.modifiers.capture
            );
    
            $tarEl.addEventListener(
                tooltip.hide,
                instance.destroy.bind($el, instance),
                binding.modifiers.capture
            );
        } else {
            tooltip.display && tooltip.$nextTick(() => {
                instance.init.call($el, instance);
            });
        }
        
    },

    update ($el, binding) {
        let instance = $el.$tooltip;
        let { tooltip } = instance;

        let data = binding.value;
        if (Object.prototype.toString.call(data) !== "[object Object]") data = { html: data };

        tooltip.html = data.html;
        tooltip.display = typeof data.display === 'boolean'? data.display: true;
        tooltip.position = data.position;
        tooltip.color = data.color;
        tooltip.reverse = data.reverse;

        if (tooltip.display && tooltip.active) {
            tooltip.$nextTick(() => instance.setPosition($el));
        }
    },
    
    unbind ($el) {
        let instance = $el.$tooltip;
        let { tooltip } = instance;
        let $tarEl = $el;
        if (tooltip.selector) {
            $tarEl = $el.querySelector(tooltip.selector) || $el;
        }
        
        if (tooltip.events) {
            $tarEl.removeEventListener(
                tooltip.show,
                instance.init
            );
    
            $tarEl.removeEventListener(
                tooltip.hide,
                instance.destroy
            );
        }
        
        tooltip.$destroy();
        $el.$tooltip = null;
    }
}

export default Tooltip;