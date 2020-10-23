<template>
    <div class="vsm-table" :style="tableCSS">
        <table>
            <thead v-if="header" :class="rowClass">
                <tr>
                    <th v-for="(th, i) in header" :key="i" :class="[{
                        'vsm-sticky-left': stickyLeft === th.key,
                        'vsm-sticky-right': stickyRight === th.key
                    }, tdClass]">{{ th.title }}</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(tr, i) in data" :key="i">
                    <template v-if="header">
                        <td v-for="(td, prop) in header" :key="prop" :class="[{
                            'vsm-sticky-left': stickyLeft === td.key,
                            'vsm-sticky-right': stickyRight === td.key
                        }, tdClass]">
                            <Render v-if="'render' in td" :render="td.render" :data="tr" :col="prop" :row="i"></Render>
                            <Render v-else :text="tr[td.key]"></Render>
                        </td>
                    </template>
                    <template v-else>
                        <td v-for="(td, prop) in tr" :key="prop" :class="[{
                            'vsm-sticky-left': stickyLeft === td.key,
                            'vsm-sticky-right': stickyRight === td.key
                        }, tdClass]" v-html="td"></td>
                    </template>
                </tr>
            </tbody>
            <tfoot>
                <tr></tr>
            </tfoot>
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
        stickyLeft: String,
        stickyRight: String,
        stickyFooter: Boolean,
    },
    components: {
        Render
    },
    mounted () {
        
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
        tdClass () {
            return {
                
            }
        }
    }
}
</script>