<template>
  <label :class="[
        inline? 'vsm-label-inline': 'vsm-label-input',
    ]"
    :style="width? `width:${width}`: ''"
    ref="label">
    <span v-if="label" class="vsm-label" v-html="label"></span>

    <div class="vsm-group vsm-calendar-input">
      <i class="vsm-group-item vsm-input-prepend iconfont icon-calendar"></i>

      <div class="vsm-calendar"
        :class="{
          'vsm-on': show
        }"
        @click.prevent
        @click.self="toggle">
        <div class="vsm-calendar-inner">
          <div class="vsm-calendar-header">
            <a class="vsm-calendar-item"
              @click="openYears"><b>{{ tYear }}</b></a>
            <a class="vsm-calendar-item"
              @click="monthPanel = true"><b>{{ tMonth + 1 }}</b></a>
            <a class="vsm-calendar-item iconfont icon-left"
              @click="setMonth(false)"></a>
            <a class="vsm-calendar-item iconfont icon-right"
              @click="setMonth(true)"></a>
          </div>
          <div class="vsm-calendar-dates">
            <span class="vsm-calendar-item"
              v-for="(w, i) in weeks"
              :key="i">{{ w }}</span>
            <span :style="emptyHolder"></span>
            <a class="vsm-calendar-item"
              :class="{
                'vsm-on': d === today
              }"
              v-for="(d, j) in dates"
              :key="j+7"
              @click="setDate(d)">{{ d }}</a>
          </div>

          <div v-show="yearPanel" class="vsm-calendar-panel">
            <a class="vsm-calendar-item iconfont icon-left"
              @click="yearPanel = false"></a>
            <div class="vsm-calendar-years">
              <a class="vsm-calendar-item"
                :class="{
                  'vsm-on': (bYear + y) === tYear
                }"
                v-for="y in 7"
                :key="y"
                @click="setYear(bYear + y)">{{ bYear + y }}</a>
            </div>
            <div class="vsm-calendar-years">
              <a @click="changeYear(false)" class="vsm-calendar-item iconfont icon-up"></a>
              <a @click="changeYear(true)" class="vsm-calendar-item iconfont icon-down"></a>
            </div>
          </div>

          <div v-show="monthPanel" class="vsm-calendar-panel">
            <a class="vsm-calendar-item iconfont icon-left"
              @click="monthPanel = false"></a>
            <div class="vsm-calendar-months">
              <a class="vsm-calendar-item"
                :class="{
                  'vsm-on': m === tMonth + 1
                }"
                v-for="m in 12"
                :key="m"
                @click="setMonth(m)">{{ m }}</a>
            </div>
          </div>
        </div>
      </div>
      
      <input class="vsm-input vsm-group-item"
        type="text"
        v-model="currentValue"
        :readonly="readonly"
        :placeholder="placeholder"
        :name="name"
        v-on="listeners">
    </div>
    
  </label>
</template>

<script>
export default {
    name: 'vsmCalendar',
    props: {
      inline: Boolean,
      width: String,
      label: String,
      readonly: Boolean,
      placeholder: String,
      name: String,
      min: String,
      max: String,
      zero: Boolean,
      format: {
        type: String,
        default: 'Y-M-D'
      },
      weeks: {
        type: Array,
        default () {
          return ['日', '一', '二', '三', '四', '五', '六'];
        }
      },
      value: {
        type: String,
        default: ''
      }
    },
    model: {
      prop: 'value',
      event: 'change'
    },
    data () {
        return {
          year: 2021,
          month: 1,
          date: 1,
          currentValue: '',
          show: false,
          closable: true,

          tYear: 2021,
          tMonth: 1,
          tDate: 1,

          yearPanel: false,
          bYear: 2018,
          monthPanel: false,
        }
    },
    computed: {
      dates () {
        let t = new Date(this.tYear, this.tMonth + 1, 0);
        return t.getDate();
      },
      emptyHolder () {
        let t = new Date(this.tYear, this.tMonth, 1);
        return `width: ${32 * t.getDay()}px;`;
      },
      today () {
        return this.year === this.tYear
            && this.month === this.tMonth
            && this.date;
      },
      listeners () {
        const vm = this;
        return Object.assign({}, this.$listeners, {
            click (e) {
              vm.toggle();
              vm.$emit('click', e);
            },
            change (e) {
              vm.setValue(new Date(e.target.value));
            }
        });
      }
    },
    methods: {
      changeYear ( f ) {
        this.bYear += f? 3: -3;
      },
      openYears () {
        this.bYear = this.tYear - 4;
        this.yearPanel = true;
      },
      setYear ( y ) {
        this.tYear = y;
        this.yearPanel = false;
      },
      setMonth ( m ) {
        if (typeof m === 'boolean') {
          let month = this.tMonth + (m? 1: -1);
          if (month === 12) {
            this.tMonth = 0;
            this.tYear += 1;
          } else if (month === -1) {
            this.tMonth = 11;
            this.tYear -= 1;
          } else {
            this.tMonth = month;
          }
        } else {
          this.tMonth = m - 1;
          this.monthPanel = false;
        }
      },
      setDate ( d ) {
        this.date = d;
        this.year = this.tYear;
        this.month = this.tMonth;

        this.show = false;
        
        this.setValue(new Date(
          this.year,
          this.month,
          this.date
        ));
      },
      toggle () {
        this.show = !this.show;
        if ( this.show ) {
          let t = new Date(this.currentValue);
          if ( !isNaN( t.getDate() ) ) {
            this.setTempDate(t);
          } else {
            t = new Date(this.currentValue.split('-').join('/'));
            if (!isNaN( t.getDate() )) {
              this.setTempDate(t);
            } else {
              this.date = 0;
            }
          }
        }
      },
      setTempDate (t) {
        this.tYear = t.getFullYear();
        this.tMonth = t.getMonth();
        this.date = t.getDate();
      },
      collapse ( e ) {
        if (!this.show || !this.closable) return;
        if (!this.$refs.label.contains(e.target)) {
          this.show = false;
          this.yearPanel = false;
          this.monthPanel = false;
        }
      },
      setValue ( v ) {
        if (isNaN(v.getDate())) {
          this.currentValue = '';
        } else {
          let { zero, format, min, max } = this;

          if ( min ) {
            min = new Date(min);
            v = v > min? v: min;
          }
          if ( max ) {
            max = new Date(max);
            v = v < max? v: max;
          }

          let map = {
            Y: v.getFullYear(),
            M: v.getMonth() + 1,
            D: v.getDate(),
          };

          this.currentValue = format.replace(/Y|M|D/g, function( tag ){
            tag = map[tag];
            return zero && tag < 10? '0'+ tag: tag;
          });
        }

        this.$emit('change', this.currentValue);
      },
      initValue (v) {
        let time = new Date(v);
        if ( time.getTime() ) {
          this.year = time.getFullYear();
          this.month = time.getMonth();
          this.date = time.getDate();

          this.setValue(new Date(
            this.year,
            this.month,
            this.date
          ));
        }
      }
    },
    created () {
      this.initValue(this.value);
    },
    beforeMount () {
      document.addEventListener('click', this.collapse);
    },
    beforeDestroy () {
      document.removeEventListener('click', this.collapse);
    },
    watch: {
      value (nv) {
        this.initValue(nv);
      }
    }
}
</script>