const Lazy = {
    
    name: 'lazy',

    install (Vue, options) {
        Vue.directive(this.name, this);
    },

    bind ($el, binding) {
        console.log(binding, $el);
    }

}

export default Lazy;