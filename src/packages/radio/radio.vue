<template>
    <div class="vsm-radio-group">
        <span class="vsm-label" v-html="label"></span>
        <div>
            <label class="vsm-radio-label" v-for="(opt, i) in options" :key="i">
                <input type="radio" class="vsm-radio" :name="name" :value="opt.value">
                <span class="vsm-label" v-html="opt.label"></span>
            </label>
        </div>
    </div>
</template>

<script>
export default {
    name: 'vsmRadio',
    props: {
        inline: Boolean,
        label: String,
        name: String,
        value: String | Number,
        options: Array
    },
    data () {
        return {
            
        }
    },
}
</script>

<style>

</style>