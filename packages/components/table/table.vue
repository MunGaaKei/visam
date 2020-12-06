<template>
    <div class="vsm-table" :style="tableCSS">
        <table>
            <thead v-if="header" :class="rowClass">
                <tr>
                    <th v-for="(th, i) in header"
                        :key="i" :class="[th.sticky? `vsm-sticky-${th.sticky}`: '', th.class]"
                        v-html="th.title"
                        @click="handleHeaderClick(th, i, $event)"
                        @dblclick="handleHeaderDblClick(th, i, $event)"></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(tr, i) in data"
                    :key="i"
                    @click="handleRowClick(tr, i, $event)">
                    <template v-if="header">
                        <td v-for="(td, prop) in header"
                            :key="prop" :class="[td.sticky? `vsm-sticky-${td.sticky}`: '', td.class]"
                            @click="handleCellClick(tr, i, prop, $event)"
                            @dblclick="handleCellDblClick(tr, i, prop, $event)">
                            <Render v-if="'render' in td" :render="td.render" :data="tr" :col="prop" :row="i"></Render>
                            <div v-else v-html="tr[td.key]"></div>
                        </td>
                    </template>
                    <template v-else>
                        <td v-for="(td, prop) in tr"
                            :key="prop"
                            :class="[td.sticky? `vsm-sticky-${td.sticky}`: '', td.class]"
                            v-html="td"
                            @click="handleCellClick(tr, i, prop, $event)"
                            @dblclick="handleCellDblClick(tr, i, prop, $event)"></td>
                    </template>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import Render from './render';

export default {
    name: 'vsmTable',
    props: {
        data: {
            type: Array,
            default () {
                return [];
            }
        },
        header: Array,

        height: String,
        stickyHeader: Boolean,
        stickyFooter: Boolean,
    },
    components: {
        Render
    },
    methods: {
        handleCellClick (td, row, col, e) {
            this.$emit('cell-click', td, row, col, e);
        },
        handleCellDblClick (td, row, col, e) {
            this.$emit('cell-dblclick', td, row, col, e);
        },
        handleHeaderClick (th, col, e) {
            this.$emit('header-click', th, col, e);
        },
        handleHeaderDblClick (th, col, e) {
            this.$emit('header-dblclick', th, col, e);
        },
        handleRowClick (tr, row, e) {
            this.$emit('row-click', tr, row, e);
        }
    },
    computed: {
        tableCSS () {
            return { 'max-height': this.height };
        },
        rowClass () {
            return {
                'vsm-sticky-row': this.stickyHeader
            }
        },
    }
}
</script>