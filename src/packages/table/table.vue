<template>
    <div class="vsm-table">
        <table>
            <thead v-if="header">
                <tr>
                    <th v-for="(th, i) in header" :key="i">{{ th.title }}</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(tr, i) in data" :key="i">
                    <td v-for="(td, prop) in header" :key="prop">
                        <template v-if="'render' in td">
                            <Render :render="td.render" :data="td"></Render>
                        </template>
                        <template v-else>{{ tr[td.key] }}</template>
                    </td>
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
        fixedHeader: Boolean,
        fixedColumn: Array
    },
    components: {
        Render
    }
}
</script>