import Vue from 'vue';
import tpl from './viewer.vue';

const ViewerConstructor = Vue.extend(tpl);

ViewerConstructor.prototype.close = function () {
    
    const STYLE = getComputedStyle(this.$el);
    const DURATION = STYLE.getPropertyValue('--transition-duration');
    let duration = 240;
    if (DURATION.endsWith('ms')) {
        duration = DURATION.slice(0, -2);
    } else if (DURATION.endsWith('s')) {
        duration = DURATION.slice(0, -1) * 1000;
    }

    this.show = false;

    setTimeout(() => {
        this.$el.remove();
        this.$destroy();
    }, duration);
}

const Viewer = (options) => {
    let data = {};
    if ( Array.isArray(options) ) {
        data = {
            imgs: options
        }
    } else {
        data = Object.assign({
            target: document.body
        }, options);
    }
    
    data.imgs = data.imgs.map(img => {
        if (typeof img === 'string') {
            img = { img }
        }
        return img;
    });

    let instance = new ViewerConstructor({ data }).$mount();

    data.target.append(instance.$el);

    setTimeout(() => {
        instance.show = true;
    }, 16);

    return instance;
}

export default Viewer;