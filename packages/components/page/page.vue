<template>
  <div v-if="!hideIfSingle || total !== 1"
    class="vsm-pages"
    :class="[
      align? `vsm-align-${align}`: '',
      round? 'vsm-round': ''
    ]">

    <a class="vsm-page vsm-page-prev"
      :class="{ 'vsm-page-loading': loadingPage === false }"
      :href="formatUrl(false)"
      v-if="onlyPN || prev"
      @click="handlePageClick(currentPage - 1, false)"
      :disabled="currentPage === 1">
      <span v-html="prev"></span>
      <span v-if="loadingPage === false" class="vsm-loading"></span>
    </a>

    <template v-if="!onlyPN && (simple || elevator)">
      <a class="vsm-page vsm-page-elevator vsm-on"
        contenteditable="plaintext-only"
        @input="handleElevatorInput"
        @keydown.enter.prevent
        @keyup.enter="handleElevatorSkip">{{ currentPage }}</a>

      <span class="vsm-page-split" v-html="spliter"></span>

      <a :href="formatUrl(total)"
        class="vsm-page"
        @click="handlePageClick(total)">
        {{ total }}{{ unit }}
      </a>
    </template>

    <template v-if="!onlyPN && !simple">
      
      <a v-if="!showAll && currentPage - siblings > 1"
        :href="formatUrl(1)"
        class="vsm-page"
        :class="{ 'vsm-page-loading': loadingPage === 1 }"
        @click="handlePageClick(1)">
        1
        <span v-if="loadingPage === 1" class="vsm-loading"></span>
      </a>
      <span v-if="ifPrevDots" class="vsm-page-dots" v-html="dots"></span>
      
      <a class="vsm-page"
        v-for="(p, i) in pageSiblings"
        :key="i"
        :href="formatUrl(p)"
        :class="{
          'vsm-on': p === currentPage,
          'vsm-page-loading': loadingPage === p
        }"
        @click="handlePageClick(p)">
        {{ p }}
        <span v-if="loadingPage === p" class="vsm-loading"></span>
      </a>

      <span v-if="ifNextDots" class="vsm-page-dots" v-html="dots"></span>
      <a v-if="!showAll && currentPage + siblings < total"
        :href="formatUrl(total)"
        class="vsm-page"
        :class="{ 'vsm-page-loading': loadingPage === total }"
        @click="handlePageClick(total)">
        {{ total }}
        <span v-if="loadingPage === total" class="vsm-loading"></span>
      </a>

    </template>

    <a class="vsm-page vsm-page-next"
      :class="{ 'vsm-page-loading': loadingPage === true }"
      :href="formatUrl(true)"
      v-if="onlyPN || next"
      @click="handlePageClick(currentPage + 1, true)"
      :disabled="currentPage === total">
      <span v-html="next"></span>
      <span v-if="loadingPage === true" class="vsm-loading"></span>
    </a>

  </div>
</template>

<script>
export default {
    name: 'vsmPage',
    props: {
      total: {
        type: Number,
        default: 1
      },
      current: {
        type: Number,
        default: 1
      },
      siblings: {
        type: Number,
        default: 2
      },
      prev: String,
      next: String,
      url: String,
      hideIfSingle: Boolean,
      showAll: Boolean,
      dots: {
        type: String,
        default: '<i class="iconfont icon-more"></i>'
      },
      align: String,
      elevator: Boolean,
      simple: Boolean,
      onlyPN: Boolean,
      round: Boolean,
      reverse: Boolean,
      loading: Boolean,
      spliter: {
        type: String,
        default: '/'
      },
      unit: {
        type: String,
        default: '页'
      }
    },
    data () {
      return {
        currentPage: this.current,
        loadingPage: 0,
      }
    },
    methods: {
      
      formatUrl (p) {
        if (!this.url) return false;
        if (typeof p === 'boolean') {
          p = p? Math.min(this.currentPage + 1, this.total - 1): Math.max(this.currentPage - 1, 0);
        }
        return this.url + (p - 1);
      },
      handlePageClick (p, pn) {
        if (p === this.currentPage) return;
        if (this.loading) {
          this.loadingPage = typeof pn === 'boolean'? pn: p;
        }
        this.$emit('change', p, this.currentPage);
      },
      handleElevatorInput (e) {
        let tar = e.target;
        let page = parseInt(tar.textContent);
        page = page > this.total? this.total: page;
        page = page < 1? 1: page;
        if (page) tar.textContent = page;
      },
      handleElevatorSkip (e) {
        let tar = e.target;
        let page = parseInt(tar.textContent);
        if (page) {
          this.$emit('change', page, this.currentPage);
          tar.blur();
        }
      }
    },
    computed: {
      ifPrevDots () {
        if (this.showAll) return false;
        return this.currentPage - this.siblings > 2;
      },
      ifNextDots () {
        if (this.showAll) return false;
        return this.currentPage + this.siblings < this.total - 1;
      },
      pageSiblings () {
        let { total, onlyPN, showAll, siblings, currentPage } = this;
        if (onlyPN) return false;
        if (showAll) {
          return total;
        } else {
          let pages = [];
          let i = currentPage - siblings;
          i = i < 1? 1: i;
          for (; i <= currentPage + siblings; i++) {
            i <= total && pages.push(i);
          }
          return pages;
        }
      }
    },
    watch: {
      current (nv) {
        this.loadingPage = 0;
        this.currentPage = nv;
      }
    }
}
</script>