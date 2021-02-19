const N = {
    name: 'vsmN',
    props: {
        n: {
            type: Number | String,
            default: 'n'
        },
        tag: {
            type: String,
            default: 'div'
        }
    },
    render (h) {
        let { tag, n } = this;
        return h(tag, {
            class: this.classes
        }, this.$slots.default);
    },
    computed: {
        classes () {
            let { n } = this;

            if ( n !== 'n' ) {
                switch ( n ) {
                    case '10':
                    case 10:
                        n = 'x';
                        break;
                    case '2.5':
                    case 2.5:
                    case '3.3':
                    case 3.3:
                    case '6.6':
                    case 6.6:
                    case '7.5':
                    case 7.5:
                        n *= 10;
                        break;
                    default: break;
                }
                n = 'col-' + n;
            }

            return `vsm-${n}`;
        }
    }
}

N.install = Vue => Vue.component(N.name, N);

export default N;