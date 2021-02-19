const Card = {
    name: 'vsmCard',
    props: {
        tag: {
            type: String,
            default: 'div'
        },
        shadow: {
            type: String,
            default: 'always',
            validator (s) {
                return ['always', 'none', 'hover'].includes(s);
            }
        },
        margin: String,
        padding: String,
        height: String,
        width: String,
        border: Boolean,
        color: String,
        plain: Boolean,
        reverse: Boolean
    },
    computed: {
        styleList () {
            let { margin, padding, height, width } = this;
            let text = '';
            if ( margin ) text += `margin:${margin};`;
            if ( padding ) text += `padding:${padding};`;
            if ( height ) text += `height:${height};`;
            if ( width ) text += `width:${width};`;
            return text;
        },
        classList () {
            let { shadow, color, plain, reverse, border } = this;
            return [{
                'vsm-shadow': shadow === 'always',
                'vsm-shadow-hover': shadow === 'hover',
                'vsm-plain': plain,
                'vsm-reverse': reverse,
                'vsm-bordered': border
            }, color? `vsm-${color}`: ''
            ]
        }
    },
    render (h) {
        return h(this.tag, {
            staticClass: 'vsm-card',
            style: this.styleList,
            class: this.classList
        }, this.$slots.default)
    },
    install (Vue) {
        Vue.component(Card.name, Card);
    }
}

export default Card;