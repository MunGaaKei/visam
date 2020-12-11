<template>
  <ul :class="{
      'vsm-tree': root,
      'vsm-tree-guide': guideline
    }">
      <li v-for="(item, i) in list" :key="i">

        <a
            @click.stop="handleNodeClick(item, $event)"
            :class="[
                'vsm-tree-node',
                { 'vsm-tree-open': item.open || expandAll },
                { 'vsm-tree-selected': selectable && item === seletedNode }
            ]"
        >
            <span v-if="checkable"
                class="vsm-tree-checkbox"
                @click.stop>
                <input type="checkbox" class="vsm-checkbox vsm-checkbox-textless"
                    :checked="item.checkable !== false && item.checked"
                    :disabled="item.checkable === false"
                    @change="check(item, $event)">
            </span>
            <span class="vsm-tree-node-icon" v-if="item.icon" node-icon v-html="item.icon"></span>
            <span class="vsm-tree-node-name" v-html="item.name"></span>
            <span class="vsm-tree-toggler" v-if="item.children" v-html="toggler" @click.stop="toggle(item, $event)"></span>
        </a>

        <vsm-tree
            v-if="item.children"
            :list="item.children"
            :checkable="checkable"
            :root="false"
            :expand-all="expandAll"
            :selectable="selectable"
            :selected="seletedNode"
            :check-on-click="checkOnClick"
            @node-click="handleSubNodeClick"
            @node-check="handleSubNodeCheck"
            @check-parent="handleCheckParent"
            @node-select="handleSubNodeSelect">
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
        parent: Object,
        checkable: {
            type: Boolean,
            default: false
        },
        selectable: Boolean,
        toggler: {
            type: String,
            default: '<i class="iconfont icon-triangle-down"></i>'
        },
        padding: Boolean,
        guideline: Boolean,
        toggleOnClick: {
            type: Boolean,
            default: true
        },
        checkOnClick: Boolean,
        expandAll: Boolean,
        selected: Object,
    },
    data () {
        return {
            seletedNode: this.selected
        }
    },
    methods: {
        setDefaults ( tree ) {
            tree.map(node => {
                this.$set(node, 'open', node.open && true);
                this.$set(node, 'checked', node.checked || false);
                node.children && this.setDefaults(node.children);
            });
        },
        toggle ( node, e ) {
            node.open = !node.open;
        },
        handleNodeClick ( node, e ) {
            if (this.toggleOnClick) this.toggle(node, e);
            if (this.selectable) {
                this.seletedNode = node;
                if (!this.root) this.$emit('node-select', node);
            }
            if (this.checkable && this.checkOnClick) {
                if (node.checkable === false) return;
                node.checked = !node.checked;
                this.$emit('node-check', node);
                node.children && this.checkChildren(node);
                this.checkSiblings(node);
            }
            this.$emit('node-click', node, e);
        },
        check ( node, e ) {
            if (node.checkable === false) return;
            let $checkbox = e.target;
            node.checked = $checkbox.checked;
            this.$emit('node-check', node);
            node.children && this.checkChildren(node);
            this.checkSiblings(node);
        },
        handleSubNodeClick ( node, e ){
            this.$emit('node-click', node, e);
        },
        handleSubNodeCheck ( node ) {
            this.$emit('node-check', node);
        },
        checkChildren ( node ) {
            let { checked, children } = node;
            children.map(n => {
                n.checked = checked;
                n.children && this.checkChildren(n);
            });
        },
        checkSiblings ( node ) {
            let res = false;

            if ( node.checked ) {
                res = !this.list.find(n => !n.checked);
            } else {
                res = this.list.filter(n => n.checked);
                if (res.length >= this.list.length - 1) {
                    res = true;
                }
            }
            res && this.$emit('check-parent', node);
        },
        handleCheckParent ( child ) {
            let parent = this.list.find(n => {
                return n.children && n.children.includes(child);
            });
    
            parent.checked = child.checked;
            this.checkSiblings(parent);
        },
        getCheckedNodes ( list ) {
            list = list || this.list;
            let res = [];
            list.map(node => {
                node.checked && res.push(node);
                if (node.children) res = [...res, ...this.getCheckedNodes(node.children)];
            });
            return res;
        },
        handleSubNodeSelect ( node ) {
            if (!this.root) {
                this.$emit('node-select', node);
            } else {
                this.seletedNode = node;
            }
        }
    },
    created () {
        this.setDefaults( this.list );
    },
    watch: {
        selected (nv) {
            this.seletedNode = nv;
        }
    }
}
</script>