<template>
    <div class="vsm-tabs"
        :class="{
            'vsm-tabs-vertical': vertical
        }">
        <div class="vsm-tabs-navs"
            :class="[
                align? `vsm-align-${align}`: '',
            ]"
            :style="background? `background:${background};`: ''"
            @mousedown="dragStart"
            ref="navs">
            <div class="vsm-tabs-nav"
                ref="nav"
                v-for="(nav, i) in navs"
                :key="i"
                :class="activeClasses(i)"
                @click="switchTab(i, $event)"
            >
                <div class="vsm-tabs-nav-title" v-html="nav.title"></div>
                <a v-if="closable"
                @click.stop="closeTab(i)"
                class="iconfont icon-close vsm-close"></a>
            </div>

            <div class="vsm-tabs-bar"
                v-if="bar"
                :style="barCSS"></div>
        </div>
        <slot>
            <div class="vsm-tab"
                :class="{
                    'vsm-tab-active': activeTab === i && tab.content
                }"
                v-for="(tab, i) in tabs"
                :key="i"
                v-html="tab.content">
            </div>
        </slot>
    </div>
</template>

<script>
const STYLE = getComputedStyle(document.documentElement);
const GAP = parseInt(STYLE.getPropertyValue('--gap'));

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
        active: {
            type: Number | String,
            default: 0
        },

        background: String,
        color: String,
        closable: Boolean,
        vertical: Boolean,
        centerActive: Boolean,
        round: Boolean,
        align: String,
        plain: Boolean,
        reverse: Boolean,
        navWidth: String,

        bar: Boolean,
        barWidth: String | Number,
        barHeight: String | Number,
        barColor: String,
    },
    model: {
        prop: 'active',
        event: 'change'
    },
    data () {
        return {
            activeTab: this.active,

            draggable: false,
            dragPosX: null,
            dragPosY: null,
            dragPosO: null,

            barCSS: '',
        }
    },
    computed: {
        navs () {
            return this.tabs.map(tab => {
                return typeof tab === 'string'? {
                    title: tab
                }: tab;
            });
        },
        barW () {
            return this.barWidth || (this.vertical? 4: 24);
        },
        barH () {
            return this.barHeight || (this.vertical? 16: 4);
        }
    },
    methods: {
        switchTab (i, e) {
            if ( this.activeTab === i ) return;
            this.$emit('beforeChange', i, this.activeTab, e);
            this.activeTab = i;
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
            e.stopPropagation();
            this.draggable = false;
        },
        setBarCSS () {
            if (!this.bar) return;

            let $navs = this.$refs.navs;
            let $nav = this.$refs.nav[this.activeTab];
            
            if( !$nav ) {
                this.barCSS = 'width:0;height:0;';
                return;
            }
            let { barW, barH, barColor } = this;
            if (this.vertical) {
                let { offsetHeight, offsetTop } = $nav;
                let auto = barH === 'auto';
                barH = auto? offsetHeight - GAP * 2: barH;
                let offset = auto? offsetTop + GAP: offsetTop + (offsetHeight - barH)/2;
                
                this.barCSS = `width:${barW}px;height:${barH}px;transform:translate(0,${offset}px);top:0;right:0;background:${barColor};`;
            } else {
                let { offsetWidth, offsetLeft } = $nav;
                let auto = barW === 'auto';
                barW = auto? offsetWidth - GAP * 2: barW;
                let offset = auto? offsetLeft + GAP: offsetLeft + (offsetWidth - barW)/2;
                
                this.barCSS = `width:${barW}px;height:${barH}px;transform:translate(${offset}px,0);left:0;bottom:0;background:${barColor};`;
            }
        },
        setTabCenter () {
            if ( !this.centerActive ) return;
            let $navs = this.$refs.navs;
            let $nav = this.$refs.nav[this.activeTab];

            $nav && $navs.scrollTo({
                top: 0,
                left: $nav.offsetLeft - ($navs.offsetWidth - $nav.offsetWidth)/2,
                behavior: 'smooth'
            });
        },
        activeClasses (i) {
            return this.activeTab === i?
                [
                    'vsm-tabs-nav-active',
                    this.color? `vsm-${this.color}`: '',
                    {
                        'vsm-plain': this.plain,
                        'vsm-reverse': this.reverse
                    }
                ]: '';
        }
    },

    mounted () {
        this.setBarCSS();
        this.setTabCenter();

        document.addEventListener('mousemove', this.dragging);
        document.addEventListener('mouseup', this.dragEnd);
    },

    updated () {
        this.$nextTick(() => {
            this.setBarCSS();
            this.setTabCenter();
        });
    },

    beforeDestroy () {
        document.removeEventListener('mousemove', this.dragging);
        document.removeEventListener('mouseup', this.dragEnd);
    },
}
</script>