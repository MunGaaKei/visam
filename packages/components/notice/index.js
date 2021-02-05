import Vue from 'vue';
import tpl from './notice.vue';

const noticeConstructor = Vue.extend(tpl);

let defs = {
    html: '',
    duration: 3000,
    fromtop: true,
    position: '',
    gap: 8,
    render: null,
    show: false,
    color: '',
    reverse: false,
    closable: 'self',
    pauseOnHover: true,
    onClick: null,
    onClose: null,
    overwrite: false,
    settop: false
}

let queueTop = [];
let queueBot = [];

let reflowNotices = (queue, dir) => {
    let pos = 24;
    queue.forEach(ins => {
        ins.position = `${dir}: ${pos}px;`;
        pos += ins.$el.offsetHeight + ins.gap;
    });
}

let removeNotice = (queue, id, dir) => {
    let i = queue.findIndex(ins => ins._uid === id);
    if (i > -1) {
        queue.splice(i, 1);
        reflowNotices(queue, dir);
    }
}

noticeConstructor.prototype.close = function () {
    this.show = false;
    typeof this.onClose === 'function' && this.onClose.call(this);

    const STYLE = getComputedStyle(this.$el);
    const DURATION = STYLE.getPropertyValue('--transition-duration');
    let duration = 240;
    if (DURATION.endsWith('ms')) {
        duration = DURATION.slice(0, -2);
    } else if (DURATION.endsWith('s')) {
        duration = DURATION.slice(0, -1) * 1000;
    }

    removeNotice(
        this.fromtop? queueTop: queueBot,
        this._uid,
        this.fromtop? 'top': 'bottom',
    );

    setTimeout(() => {
        this.$el.remove();
        this.$destroy();
    }, duration);
}

const Notice = (options = {}) => {
    if (Vue.prototype.$isServer) return;
    
    if (typeof options === 'string') {
        options = { html: options }
    }

    let data = Object.assign({}, defs, options);
    let instance;

    if (data.overwrite) {
        instance = data.fromtop? queueTop[queueTop.length - 1]: queueBot[queueBot.length - 1];
        if (instance) {
            instance.html = data.html;
            instance.color = data.color;
            instance.closable = data.closable;
            instance.onClick = data.onClick;
            instance.onClose = data.onClose;
            instance.reverse = data.reverse;
            instance.duration = data.duration;
            instance._timer && clearTimeout(instance._timer);
            if (data.duration > 0) {
                instance._timer = setTimeout(() => {
                    instance.close();
                }, data.duration);
            }
            return instance;
        }
    }

    instance = new noticeConstructor({
        data
    }).$mount();
    
    document.body.appendChild(instance.$el);

    Vue.nextTick(() => {
        setTimeout(() => {
            if (data.fromtop) {
                queueTop[data.settop? 'unshift': 'push'](instance);
                reflowNotices(queueTop, 'top');
            } else {
                queueBot[data.settop? 'unshift': 'push'](instance);
                reflowNotices(queueBot, 'bottom');
            }
            instance.show = true;
        }, 0);

        if (data.duration > 0) {
            instance._timer = setTimeout(() => {
                instance.close();
            }, data.duration);
        }
    });

    return instance;
}

export default Notice;