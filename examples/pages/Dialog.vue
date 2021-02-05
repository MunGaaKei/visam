<template>
  <div class="vsm-content">
    <h2>对话框</h2>

    <h3 class="section-title">使用</h3>
    <vsm-button @click="dialog0 = true">弹出</vsm-button>
    <vsm-dialog v-model="dialog0" :close-button="false" backdrop backdropClosable width="80vw">
      <img src="../assets/img/landscape.jpg">
    </vsm-dialog>
    <Codes :codes="codes0"></Codes>

    <h3 class="section-title">属性设置</h3>
    <p>设置对话框其它属性。</p>
    <br>
    <vsm-button @click="dialog1 = true" color="blue">弹出</vsm-button>

    <vsm-dialog v-model="dialog1"
      :title="title"
      :backdrop="dialogProps.includes('backdrop')"
      :backdrop-closable="dialogProps.includes('backdropClosable')"
      :closable="dialogProps.includes('closable')"
      :close-button="dialogProps.includes('closeButton')"
      :confirm="confirm"
      :cancel="cancel"
      :blur="dialogProps.includes('blur')"
      @confirm="handleConfirm"
      :width="w">
        <vsm-form>
          <vsm-input v-model="title" label="标题文本" inline></vsm-input>
          <vsm-group>
            <vsm-input v-model="confirm" label="确认文本" inline></vsm-input>
            <vsm-input v-model="cancel" label="取消文本" inline></vsm-input>
          </vsm-group>
          <vsm-input type="number" label="容器宽度" v-model="width" inline class="vsm-col-5" min="400" step="100"></vsm-input>
          <vsm-checkbox v-model="dialogProps" :options="dialogOptions" type="slide" label="可否关闭" inline></vsm-checkbox>
        </vsm-form>
    </vsm-dialog>
    <Codes :codes="codes1"></Codes>

    <h3 class="section-title">参数说明</h3>
    <vsm-table :data="params" :header="paramsHeader" stickyHeader></vsm-table>

  </div>
</template>

<script>
export default {
  name: 'Dialog',
  data () {
    return {
      dialog0: false,
      dialog1: false,

      title: '其它属性设置',
      confirm: '确定',
      cancel: '取消',
      dialogProps: ['backdrop', 'closable', 'backdropClosable'],
      dialogOptions: [
        { label: '关闭按钮', value: 'closeButton' },
        { label: '遮罩层', value: 'backdrop' },
        { label: '遮罩层可关闭', value: 'backdropClosable' },
        { label: '遮罩层模糊', value: 'blur' },
        { label: '可关闭', value: 'closable' },
      ],
      width: 400,

      params: [{
        prop: 'show | v-model',
        type: 'Boolean',
        options: '',
        default: 'false',
        desc: '对话框是否显示状态'
      }, {
        prop: 'title',
        type: 'String',
        options: '',
        default: '',
        desc: '对话框标题文本'
      }, {
        prop: 'confirm',
        type: 'String',
        options: '',
        default: '',
        desc: '「确定」按钮文本'
      }, {
        prop: 'cancel',
        type: 'String',
        options: '',
        default: '',
        desc: '「取消」按钮文本，按钮自带关闭功能'
      }, {
        prop: 'close-button',
        type: 'Boolean',
        options: '',
        default: 'false',
        desc: '是否显示关闭按钮'
      }, {
        prop: 'closable',
        type: 'Boolean',
        options: '',
        default: 'true',
        desc: '是否满足可关闭条件，可用于表单校验'
      }, {
        prop: 'backdrop',
        type: 'Boolean',
        options: '',
        default: 'false',
        desc: '是否显示遮罩层'
      }, {
        prop: 'backdrop-closable',
        type: 'Boolean',
        options: '',
        default: 'false',
        desc: '遮罩层是否带有关闭功能'
      }, {
        prop: 'blur',
        type: 'Boolean',
        options: '',
        default: 'false',
        desc: '背景遮罩层是否模糊显示'
      }, {
        prop: 'esc-closable',
        type: 'Boolean',
        options: '',
        default: 'true',
        desc: '是否可通过「ESC」键关闭对话框'
      }, {
        prop: 'width',
        type: 'String',
        options: '',
        default: '',
        desc: '对话框宽度，默认由内容控制'
      }, {
        prop: '@open',
        type: 'Function',
        options: '',
        default: '',
        desc: '监听对话框打开事件',
        event: true,
      }, {
        prop: '@close',
        type: 'Function',
        options: '',
        default: '',
        desc: '监听对话框关闭事件',
        event: true,
      }, {
        prop: '@confirm',
        type: 'Function',
        options: '',
        default: '',
        desc: '监听「确定」按钮点击事件',
        event: true,
      }, {
        prop: '@cancel',
        type: 'Function',
        options: '',
        default: '',
        desc: '监听「取消」按钮点击事件',
        event: true,
      }, {
        prop: 'slot:default',
        type: '',
        options: '',
        default: '',
        desc: '对话框内容插槽',
        slot: true,
      }, {
        prop: 'slot:header',
        type: '',
        options: '',
        default: '',
        desc: '对话框顶部插槽',
        slot: true,
      }, {
        prop: 'slot:footer',
        type: '',
        options: '',
        default: '',
        desc: '对话框底部插槽',
        slot: true,
      }]
      
    }
  },
  computed: {
    w () {
      return `${this.width}px`;
    },
    codes0 () {
      return `<vsm-button @click="dialog0 = true">弹出</vsm-button>

<vsm-dialog v-model="dialog0"
  :close-button="false"
  backdrop
  backdropClosable
  width="80vw">
  <img src="../assets/img/landscape.jpg">
</vsm-dialog>

<\script>
export default {
  data () {
    return {
      dialog0: false
    }
  }
}
</\script>`;
    },
    codes1 () {
      return `<vsm-dialog v-model="dialog1"
  title="${this.title}"
  :backdrop="${this.dialogProps.includes('backdrop')}"\
  ${this.dialogProps.includes('backdropClosable')? '\r\n  backdrop-closable': ''}\
  ${this.dialogProps.includes('closable')?'':'\r\n  :closable="false"'}
  :blur="${this.dialogProps.includes('blur')}"
  :close-button="${this.dialogProps.includes('closeButton')}"
  confirm="${this.confirm}"
  cancel="${this.cancel}"
  width="${this.w}"
  @confirm="handleConfirm">
    Dialog Content
</vsm-dialog>

<\script>
export default {
  data () {
    return {
      dialog1: false,
    }
  },
  methods: {
    handleConfirm () {
      this.dialog1 = false;

      this.$nextTick(() => {
        !this.dialog1 && this.$notice({
          html: '已关闭对话框',
          color: 'yellow',
          duration: 1000
        });
      });
    }
  }
}
</\script>`;
    }
  },
  methods: {
    handleConfirm () {

      this.dialog1 = false;

      this.$nextTick(() => {
        !this.dialog1 && this.$notice({
          html: '确定关闭对话框',
          color: 'yellow',
          duration: 1000
        });
      });

    },
  }
}
</script>