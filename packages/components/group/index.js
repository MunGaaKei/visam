const Group = {
    name: 'vsmGroup',
    props: {
      tag: {
        type: String,
        default: 'div'
      }
    },
    render (h) {
      return h(this.tag, {
        staticClass: 'vsm-group',
      }, this.$slots.default);
    },
    methods: {
      bindGroupClass () {
          let $s = this.$slots;
          for (let k in $s) {
              $s[k].forEach(node => {
                if ( !node.isComment ) {
                  let { elm, data } = node;
                  if ( elm.nodeType !== 1 ) return;
                  elm.classList.add('vsm-group-item');

                  if ( data.slot === 'prepend' || data.slot === 'append' ) {
                    elm.classList.add(`vsm-input-${data.slot}`);
                  }

                }
              });
          }
      }
    },
    mounted () {
      this.bindGroupClass();
    },
}

Group.install = Vue => Vue.component(Group.name, Group)

export default Group;