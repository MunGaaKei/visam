<template>
  <ul :class="{
      'vsm-tree': root,
      'vsm-tree-padding': padding
    }">
      <li v-for="(item, i) in list" :key="i">

        <router-link :to="{ path: item.href }"
            :class="[
                'vsm-tree-node',
                { 'vsm-tree-open': item.open }
            ]"
            @click="handleItemClick(item, $event)"
        >
            <span v-if="checkable" :node-check="item.checked">{{ item.checked? '■': '□' }}</span>
            <span class="vsm-tree-node-icon" v-if="item.icon" node-icon v-html="item.icon"></span>
            <span class="vsm-tree-node-name" v-html="item.name" @click="toggle(item, $event)"></span>
            <span class="vsm-tree-toggler" v-if="item.children" v-html="toggler" @click.stop="toggle(item, $event)"></span>
        </router-link>

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
        },
        toggler: {
            type: String,
            default: '<i class="iconfont icon-down"></i>'
        },
        padding: Boolean
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
        toggle ( node, e ) {
            node.open = !node.open;
        },
        handleItemClick ( node, e ) {
            // e.preventDefault();
            console.log(node);
            this.$emit('item-click', node, e);
        }
    },
    created () {

        this.setDefaults( this.list );

    }
}
</script>