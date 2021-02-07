<template>
  <div :class="classes">
      <slot></slot>
  </div>
</template>

<script>
export default {
    name: 'vsmN',
    props: {
        n: {
            type: Number | String,
            default: 'n'
        }
        
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
</script>