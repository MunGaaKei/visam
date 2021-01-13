<template>
  <div class="vsm-collapse-item"
    :class="{
        'vsm-on': isActive
    }">
        <div class="vsm-collapse-header" @click="handleHeaderClick">
            <div v-if="title" v-html="title"></div>
            <slot v-else name="title"></slot>
            <a v-if="icon"
                class="vsm-collapse-icon"
                v-html="icon"
                @click.stop="handleIconClick"></a>
        </div>

        <div class="vsm-collapse-content">
            <slot></slot>
        </div>
  </div>
</template>

<script>
export default {
    name: 'vsmCollapseItem',
    props: {
        title: String,
    },
    data () {
        return {
            index: this.$vnode.collapseIndex,
            icon: this.$parent.icon,
            iconTrigger: this.$parent.iconTrigger
        }
    },
    computed: {
        isActive () {
            let { value, isAccordion } = this.$parent;
            return isAccordion? value === this.index: value.includes(this.index);
        }
    },
    methods: {
        handleHeaderClick ( e ) {
            if ( this.iconTrigger ) return false;
            this.$parent.changeValue( this.index, !this.isActive );
        },
        handleIconClick ( e ) {
            this.$parent.changeValue( this.index, !this.isActive );
        }
    },
}
</script>