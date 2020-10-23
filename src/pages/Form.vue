<template>
  <div class="vsm-content">
      <h2>表单</h2>

      <h3 class="section-title">输入框</h3>
      <div class="codes">
          <vsm-tabs :tabs="codeTabs" v-model="activeTab0">
              <div class="panel" v-show="activeTab0 === 0">
                <vsm-form>
                    <vsm-group>
                        <vsm-input label="用户名" v-model="text">
                            <vsm-button color="black" slot="append">
                                <vsm-icon icon="search"></vsm-icon>
                            </vsm-button>
                        </vsm-input>
                        <vsm-input label="密码" type="password" v-model="text"></vsm-input>
                    </vsm-group>

                    <vsm-input inline label="邮箱" type="email">
                        <span slot="prepend">📧</span>
                        <span slot="append">@qq.com</span>
                    </vsm-input>

                    <vsm-input inline label="年龄" :max="120" value="24" type="number" class="vsm-col-3"></vsm-input>

                    <vsm-select inline label="兴趣" class="vsm-col-5"
                        v-model="habit"
                        readonly
                        :options="habitOptions"></vsm-select>

                    <vsm-radio inline optionInline
                        v-model="gender"
                        name="gender"
                        :options="genderOptions"
                        label="性别"></vsm-radio>

                    <vsm-checkbox inline optionInline
                        v-model="habit"
                        :options="habitOptions"
                        label="兴趣"></vsm-checkbox>

                    <vsm-input label="备注" type="textarea" v-model="memo" resize></vsm-input>

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

            text: '',

            gender: 0,
            genderOptions: [{
                label: '🙍‍♂️',
                value: 0
            }, {
                label: '🙍‍♀️',
                value: 1
            }],

            habit: ['football', 'basketball'],
            habit1: 'football',
            habitOptions: [{
                label: '⚽',
                value: 'football',
            }, {
                label: '🏀',
                value: 'basketball',
            }, {
                label: '🏐',
                value: 'volleyball',
            }],
            

            domicileOptions: [{
                label: '城镇户籍',
                value: 2
            }, {
                label: '农业户籍',
                value: 1
            }, {
                label: '其它',
                value: 0
            }],

            memo: ''
            
        }
    },
    methods: {
        handleChange (v, e) {
            console.log(v, e);
        },
        handleInput (v, e) {
            console.log(v,e);
        }
    }
}
</script>

<style>

</style>