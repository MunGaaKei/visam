<template>
  <div class="codes">
    <a v-if="tools" @click="toggle" class="iconfont icon-script" v-tooltip:top="{
        html: '查看代码',
        color: 'blue',
    }"><i></i></a>
    <a @click="copy" v-show="display" class="iconfont icon-copy" v-tooltip:top="{
        html: '复制代码',
        color: 'blue'
    }"></a>
    <pre v-show="!tools || display" v-highlightjs="codes">
        <code :class="language" ref="code"></code>
    </pre>
  </div>
</template>

<script>
export default {
    name: 'Codes',
    props: {
        show: Boolean,
        codes: {
            type: String,
            default: ''
        },
        language: {
            type: String,
            default: 'html'
        },
        tools: {
            type: Boolean,
            default: true
        }
    },
    data () {
        return {
            display: this.show
        }
    },
    methods: {
        copy () {
            let sel = window.getSelection();
            let range = document.createRange();
            range.selectNodeContents(this.$refs.code);
            sel.removeAllRanges();
            sel.addRange(range);
            document.execCommand('copy', false, true);
            this.$notice({
                html: '👌 已复制到粘贴板',
                overwrite: true,
                color: 'blue',
                fromtop: false
            });
        },
        toggle () {
            this.display = !this.display;
        }
    }
}
</script>

<style lang="scss" scoped>
.codes {
  position: relative;
  margin: 1rem auto;
  tab-size: 4;
  background: rgba(0,0,0,.02);
  border-radius: var(--radius);
  > pre {
      max-height: 400px;
      overflow: auto;
      border-radius: var(--radius);
      white-space: unset;
  }
  > a {
    display: inline-flex;
    align-items: center;
    margin-left: .4em;
    padding: 4px 6px;
    font-size: 1.2em;
    user-select: none;
  }
  .hljs {
    padding: 1em;
    border-radius: 4px;
    font-family: SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;
    font-size: 0.9em;
    outline: none;
    white-space: pre;
    background: #202123;
  }
}
</style>