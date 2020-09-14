<template>
    <div class="vsm-tabs">
        <div class="vsm-tabs-navs"
            @mousedown="dragStart"
            ref="navs">
            <div class="vsm-tabs-nav"
                ref="nav"
                v-for="(nav, i) in navs"
                :key="i"
                :class="{ 'vsm-tab-active': activeTab == i }"
                @click="switchTab(i, $event)"
                :disabled="nav.disabled"
                :tabindex="i"
                v-html="title? nav[title]: nav"
            >
                <a v-if="tabClosable"
                @click.stop="closeTab(i)"
                class="iconfont icon-close vsm-close"></a>
            </div>

            <div class="vsm-tabs-bar"
                v-if="bar"
                :style="barCSS"></div>
        </div>
        
        <slot></slot>
    </div>
</template>

<script>
const STYLE = getComputedStyle(document.documentElement);
const GAP = parseInt(STYLE.getPropertyValue('--gap'));
const THEME_COLOR = STYLE.getPropertyValue('--theme-color');

export default {
    name: 'vsmTabs',
    props: {
        tabs: {
            type: Array,
            default () {
                return []
            },
            required: true
        },
        title: String,
        active: {
            type: Number | String,
            default: 0
        },

        vertical: {
            type: String | Boolean,
            default: false
        },
        center: {
            type: String | Boolean,
            default: false
        },

        bar: {
            type: Boolean,
            default: true
        },
        barConfigs: {
            type: Object,
            default () {
                return {}
            }
        },

        closable: {
            type: Boolean | String,
            default: false
        }
    },
    data () {
        return {
            navs: this.tabs,
            activeTab: this.active,

            draggable: false,
            dragPosX: null,
            dragPosY: null,
            dragPosO: null,

            barCSS: '',
            barDefs: Object.freeze(Object.assign({
                width: 24,
                height: 4,
                color: THEME_COLOR
            }, this.barConfigs)),

            tabClosable: this.closable || this.closable !== false
        }
    },
    methods: {
        switchTab (i, e) {
            this.activeTab = i;
            
            this.$nextTick(() => {
                this.setBarCSS();
                this.setTabCenter();
            });

            this.$emit('change', i, e);
        },
        closeTab (i) {

            this.$emit('close', i, this.navs[i]);
            this.navs.splice(i, 1);

            this.activeTab === i && this.switchTab( i - 1 < 0? 0: --i );
        },
        dragStart (e) {
            this.dragPosX = e.pageX;
            this.dragPosO = this.$refs.navs.scrollLeft;
            this.draggable = true;
        },
        dragging (e) {
            e.stopPropagation();
            if ( this.draggable ) {
                let dx = e.pageX - this.dragPosX;
                let $navs = this.$refs.navs;
                $navs.scrollTo({
                    left: this.dragPosO - dx,
                    top: 0,
                    behavior: 'instant'
                });
            }
        },
        dragEnd (e) {
            this.draggable = false;
        },
        setBarCSS () {
            if (!this.bar) return;

            let $navs = this.$refs.navs;
            let $nav = this.$refs.nav[this.activeTab];

            let auto = this.barDefs.width === 'auto';
            let width = auto? $nav.offsetWidth - GAP * 2: this.barDefs.width;
            let offset = auto? $nav.offsetLeft + GAP: $nav.offsetLeft + ($nav.offsetWidth - this.barDefs.width)/2;
            
            this.barCSS = `width: ${width}px; height: ${this.barDefs.height}px; transform: translate(${offset}px, 0); background: ${this.barDefs.color}`;
        },
        setTabCenter () {
            if ( !this.center ) return;
            let $navs = this.$refs.navs;
            let $nav = this.$refs.nav[this.activeTab];

            $navs.scrollTo({
                top: 0,
                left: $nav.offsetLeft - ($navs.offsetWidth - $nav.offsetWidth)/2,
                behavior: 'smooth'
            });
        }
    },

    mounted () {
        this.setBarCSS();
        this.setTabCenter();

        document.addEventListener('mousemove', this.dragging);
        document.addEventListener('mouseup', this.dragEnd);
    },

    beforeDestroy () {
        document.removeEventListener('mousemove', this.dragging);
        document.removeEventListener('mouseup', this.dragEnd);
    }
}
</script>