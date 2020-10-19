<template>
  <div class="vsm-content">
      <h2>表单</h2>

      <h3 class="section-title">输入框</h3>
      <div class="codes">
          <vsm-tabs :tabs="codeTabs" v-model="activeTab0">
              <div class="panel" v-show="activeTab0 === 0">
                <vsm-form>
                    <vsm-group>
                        <vsm-input label="用户名">
                            <vsm-button color="black" slot="append">查询</vsm-button>
                        </vsm-input>
                        <vsm-input label="密码" type="password"></vsm-input>
                    </vsm-group>

                    <vsm-input inline label="邮箱" type="email">
                        <vsm-icon icon="mail" slot="prepend"></vsm-icon>
                        <span slot="append">.com</span>
                    </vsm-input>

                    <vsm-radio inline optionInline
                        v-model="gender"
                        name="gender"
                        :options="genderOptions"
                        label="性别"></vsm-radio>

                    <vsm-checkbox inline optionInline
                        v-model="habit"
                        :options="habitOptions"
                        label="兴趣"></vsm-checkbox>

                    <vsm-checkbox inline
                        v-model="habit"
                        :options="habitOptions"
                        @change="handleChange"
                        label="兴趣"></vsm-checkbox>

                    <vsm-checkbox v-model="agreed" @change="handleChange">已阅读并同意以下条款</vsm-checkbox>

                </vsm-form>
              </div>
          </vsm-tabs>
      </div>

      <h3 class="section-title">单选 多选</h3>
      <div class="codes">
          <vsm-tabs :tabs="codeTabs" v-model="activeTab1">
              <div class="panel" v-show="activeTab1 === 0">

              </div>
          </vsm-tabs>
      </div>
  </div>
</template>

<script>
export default {
    name: 'Form',
    data () {
        return {
            activeTab0: 0,
            activeTab1: 0,
            activeTab2: 0,
            activeTab3: 0,
            activeTab4: 0,

            gender: 0,
            genderOptions: [{
                label: '男',
                value: 0
            }, {
                label: '女',
                value: 1
            }],

            habit: [1],
            habitOptions: [{
                label: '足球',
                value: 0,
            }, {
                label: '篮球',
                value: 1,
            }, {
                label: '排球',
                value: false,
            }],
            
            agreed: false,
            
        }
    },
    methods: {
        handleChange (v, e) {
            console.log(v, e, this.habit, this.agreed);
        }
    }
}
</script>

<style>

</style>