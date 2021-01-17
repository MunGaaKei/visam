const DEFAULTS = {
    once: true,
    offset: 0,
    delay: 0,
    trigger: ''
}

const Lazy = {
    
    name: 'lazy',

    install (Vue, options) {
        Vue.directive(this.name, this);
    },

    bind ($el, binding) {
        let img = binding.value;
        let setting = typeof img === 'string'? { img }: img;
        if (binding.arg === 'background') setting.background = true;

        setting = Object.assign({}, DEFAULTS, setting);

        const IO = new IntersectionObserver(entries => {
            if ( entries[0].isIntersecting ) {
                let target = entries[0].target;
                if ( setting.background ) {
                    target.style.backgroundImage = `url(${setting.img})`;
                    IO.unobserve($el);
                } else {
                    target.src = setting.img;
                }
            }
        });

        Lazy.IO = IO;

        if ( !setting.background ) {
            $el.classList.add('vsm-lazyload');
            $el.addEventListener('load', () => {
                $el.classList.remove('vsm-lazyload');
                IO.unobserve($el);
            }, { once: true});
        }

        IO.observe($el);


    },

    inserted ($el) {
        

    },

    updated ($el, binding) {
        
    }

}

export default Lazy;