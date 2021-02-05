
class lazyInstance {
    constructor ($el, setting) {
        this.$el = $el;
        this.setting = setting;
        this.IO = this.observe();
    }

    observe () {
        let { img, background, viewport, margin } = this.setting;
        let opts = {};
        if ( viewport instanceof HTMLElement ) opts.root = viewport;
        if ( margin ) opts.rootMargin = margin;

        return new IntersectionObserver(entries => {
            entries.map(entry => {
                if ( entry.isIntersecting ) {
                    let target = entry.target;
                    console.log(target);
                    if ( background ) {
                        target.style.backgroundImage = `url(${img})`;
                    } else {
                        target.src = img;
                    }
                    this.IO.unobserve(target);
                }
            });
        }, opts);
    }

    init () {
        let { IO, $el, setting, handleLoad } = this;
        IO.observe($el);

        if ( !setting.background && setting.fade ) {
            if ( setting.fade ) $el.classList.add('vsm-lazyload');
            $el.addEventListener('load', handleLoad, { once: true });
        }
    }

    handleLoad () {
        this.classList.remove('vsm-lazyload');
    }
}

function initSetting (binding) {
    let img = binding.value;
    let setting = typeof img === 'string'? { img }: img;
    if (binding.arg === 'background') setting.background = true;

    return Object.assign({}, {
        fade: true
    }, setting);

}

const Lazy = {
    
    name: 'lazy',

    install (Vue, options) {
        Vue.directive(this.name, this);
    },

    bind ($el, binding) {
        let setting = initSetting( binding );
        let instance = new lazyInstance($el, setting);

        instance.init();
        $el.$instance = instance;
    },

    update ($el, binding) {
        let setting = initSetting( binding );
        
        $el.instance = new lazyInstance($el, setting);
        $el.instance.init();
    },

    unbind ($el) {
        let instance = $el.$instance;
        $el.removeEventListener('load', instance.handleLoad);
        $el.$instance = null;
    }

}

export default Lazy;