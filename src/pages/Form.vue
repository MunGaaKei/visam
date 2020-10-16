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
                        <vsm-input label="密码：" type="password"></vsm-input>
                    </vsm-group>

                    <vsm-input inline label="邮箱：" type="email">
                        <vsm-icon icon="mail" slot="prepend"></vsm-icon>
                        <span slot="append">.com</span>
                    </vsm-input>

                    <vsm-radio name="gender" v-model="gender" :options="genderOptions" label="性别："></vsm-radio>

                    <vsm-group>
                        <vsm-checkbox v-model="habit" name="habit" value="0">足球</vsm-checkbox>
                        <vsm-checkbox v-model="habit" name="habit" value="1">篮球</vsm-checkbox>
                        <vsm-checkbox v-model="habit" name="habit" value="2">排球</vsm-checkbox>
                    </vsm-group>
                </vsm-form>
              </div>
          </vsm-tabs>
      </div>

      <h3 class="section-title">单选 多选</h3>
      <div class="codes">
          <vsm-tabs :tabs="codeTabs" v-model="activeTab1">
              <div class="panel" v-show="activeTab1 === 0">
                  <vsm-group>
                    <vsm-radio v-model="agreed" name="agreed" value="0">同意</vsm-radio>
                    <vsm-radio v-model="agreed" name="agreed" value="1">同意并保存</vsm-radio>
                    <vsm-radio v-model="agreed" name="agreed" value="2">下次一定</vsm-radio>
                  </vsm-group>
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
            habit: 0,
            
            agreed: 0,
            
        }
    }
}
</script>

<style>

</style>