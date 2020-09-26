<template>
  <div class="vsm-content">
      <h2>表单</h2>

      <h3 class="section-title">输入框</h3>
      <div class="codes">
          <vsm-tabs :tabs="codeTabs" v-model="activeTab0">
              <div class="panel" v-show="activeTab0 === 0">
                <vsm-form>
                    <vsm-group>
                        <vsm-input label="用户名："></vsm-input>
                        <vsm-input label="密码：" type="password"></vsm-input>
                    </vsm-group>
                    <vsm-group>
                        <vsm-input inline label="邮箱：" type="email">
                            <vsm-button color="blue" slot="after">校验</vsm-button>
                        </vsm-input>
                    </vsm-group>
                </vsm-form>
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
            activeTab0: 0
        }
    }
}
</script>

<style>

</style>