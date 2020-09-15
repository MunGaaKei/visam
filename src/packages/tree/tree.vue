<template>
  <ul :class="{ 'vsm-tree': root }">
      <li v-for="(item, i) in list" :key="i">

        <a :href="item.href"
            class="vsm-tree-node"
            :class="{ 'vsm-tree-open': item.open }"
            @click.stop="toggle(item)"
        >
            <span v-if="checkable" :node-check="item.checked">{{ item.checked? '■': '□' }}</span>
            <span v-if="item.icon" node-icon>{{ item.icon }}</span>
            <span node-name>{{ item.name }}</span>
            <span v-if="item.children" class="iconfont icon-down" :node-open="item.open"></span>
        </a>

        <vsm-tree
            v-if="item.children"
            :list="item.children"
            :checkable="checkable"
            :root="false">
        </vsm-tree>

      </li>
  </ul>
</template>

<script>
export default {
    name: 'vsmTree',
    props: {
        root: {
            type: Boolean,
            default: true
        },
        list: {
            type: Array,
            default () {
                return []
            }
        },
        checkable: {
            type: Boolean,
            default: false
        }
    },
    data () {
        return {
            defaults: {
                open: false,
                checked: false
            }
        }
    },
    methods: {
        setDefaults ( tree ) {
            tree.map(node => {
                this.$set(node, 'open', node.open && true);
                node.children && this.setDefaults(node.children);
            });
        },
        toggle ( node ) {
            node.open = !node.open;
        }
    },
    created () {

        this.setDefaults( this.list );

    }
}
</script>