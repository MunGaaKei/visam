<template>
  <div class="vsm-content">
      <h2>表单</h2>

      <h3 class="section-title">输入框</h3>
      <div class="codes">
          <vsm-tabs :tabs="codeTabs" v-model="activeTab0">
              <div class="panel" v-show="activeTab0 === 0">
                <vsm-form>
                    <vsm-group>
                        <vsm-input label="用户名：">
                            <vsm-button color="black" slot="append">查询</vsm-button>
                        </vsm-input>
                        <vsm-input label="密码：" type="password" v-model="password"></vsm-input>
                    </vsm-group>

                    <vsm-input inline label="邮箱：" type="email">
                        <vsm-icon icon="mail" slot="prepend"></vsm-icon>
                        <span slot="append">.com</span>
                    </vsm-input>

                    <vsm-radio inline optionInline
                        v-model="gender"
                        name="gender"
                        :options="genderOptions"
                        label="性别："
                        @change="sexChange"></vsm-radio>

                    <vsm-checkbox
                        v-model="habit"
                        :options="habitOptions"
                        label="兴趣："></vsm-checkbox>

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

            password: '',
            
            gender: 0,
            genderOptions: [{
                label: '男',
                value: 0
            }, {
                label: '女',
                value: 1,
                disabled: true
            }],

            habit: [],
            habitOptions: [{
                label: '足球',
                value: 0,
            }, {
                label: '篮球',
                value: 1,
            }, {
                label: '排球',
                value: 2,
            }],
            
            agreed: 0,
            
        }
    },
    methods: {
        sexChange (v, e) {
            console.log(v, e, this.gender);
        }
    }
}
</script>

<style>

</style>