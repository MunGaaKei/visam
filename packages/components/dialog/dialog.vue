<template>
  <div
    :class="{
      'vsm-on': display,
      'vsm-backdrop': backdrop,
      'vsm-blur': blur
    }"
    @click.self="handleBackdropClick">
    <div class="vsm-dialog"
      ref="dialog"
      :class="{
        'vsm-bounce': bounced
      }"
      :style="cssText">
      <header v-if="title || $slots.header || closeButton" class="vsm-dialog-header">
        <slot name="header">
          <span class="vsm-dialog-title" v-html="title"></span>
        </slot>
        <a v-if="closeButton" class="iconfont icon-close" @click="close"></a>
      </header>
      <slot></slot>
      <footer v-if="footer || $slots.footer" class="vsm-dialog-footer">
        <slot name="footer">
          <vsm-button v-if="cancel" v-html="cancel" @click="handleCancel" small plain></vsm-button>
          <vsm-button v-if="confirm" v-html="confirm" @click="handleConfirm" small></vsm-button>
        </slot>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: 'vsmDialog',
  props: {
    backdrop: Boolean,
    backdropClosable: Boolean,
    closeButton: {
      type: Boolean,
      default: true
    },
    title: String,
    show: Boolean,
    width: String,

    closable: {
      type: Boolean,
      default: true
    },

    confirm: String,
    cancel: String,
    escClosable: {
      type: Boolean,
      default: true
    },
    blur: Boolean,
  },
  model: {
    prop: 'show',
    event: 'toggle'
  },
  data () {
    return {
      display: this.show,
      cssText: this.width? `width:${this.width};`: '',
      bounced: false
    }
  },
  computed: {
    footer () {
      return this.confirm || this.cancel;
    }
  },
  methods: {
    close () {
      if (this.closable) {
        this.display = false;
        this.$emit('toggle', false);
        !this.show && this.$emit('close', this);
      } else {
        this.$emit('toggle', true);
        this.setBounced();
      }
      return this.closable;
    },
    open () {
      this.setPosition();
      this.$nextTick(() => {
        this.display = true;
        this.$emit('toggle', true);
        this.$emit('open', this);
      });
    },
    handleBackdropClick () {
      this.backdropClosable && this.close();
    },
    handleConfirm () {
      this.$emit('confirm');
    },
    handleCancel () {
      this.close() && this.$emit('cancel');
    },
    setPosition () {
      if (!this.backdrop) {
        let $dialog = this.$refs.dialog;
        let rect = $dialog.getBoundingClientRect();
        // let $pa = $dialog.offsetParent;
        // let top = $pa.scrollTop + (rect.height >= $pa.clientHeight? 0: ($pa.clientHeight - rect.height)/2);
        // let left = $pa.scrollLeft + (rect.width >= $pa.clientWidth? 0: ($pa.clientWidth - rect.width)/2);
        let top = (window.innerHeight - rect.height) / 2;
        let left = (window.innerWidth - rect.width) / 2;
        this.cssText = `left:${left}px;top:${top}px;${this.width?`width:${this.width};`:''}`;
      } else {
        this.cssText = this.width? `width:${this.width};`: '';
      }
    },
    setBounced () {
      if (this.bounced) return;
      this.bounced = true;
      setTimeout(() => { this.bounced = false; }, 1000);
    },
    escClose (e) {
      if (this.show && this.escClosable && e.keyCode === 27) {
        this.close();
      }
    }
  },
  watch: {
    show (nv) {
      nv? this.open(): this.close();
    },
    backdrop (nv) {
      this.setPosition();
    },
    width (nv) {
      this.setPosition();
    }
  },
  beforeMount () {
    this.show && this.open();
    document.addEventListener('keydown', this.escClose);
  },
  beforeDestroy () {
    document.removeEventListener('keydown', this.escClose);
  }
}
</script>

<style>

</style>