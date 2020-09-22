<template>
  <div class="vsm-content">
      <h2>表格</h2>

      <h3 class="section-title">使用</h3>
      <div class="codes">
        <vsm-tabs :tabs="codeTabs" :active="activeTab0" @change="switchTab($event, 0)">
          <div class="panel" v-show="activeTab0 === 0">
            <vsm-table :data="tableData"
              :header="tableHeader"
              ></vsm-table>
          </div>
        </vsm-tabs>
      </div>
  </div>
</template>

<script>
export default {
    name: 'Table',
    data () {
      return {
        activeTab0: 0,

        tableData: [{
          name: '张三',
          gender: 0,
          phone: '13012340987',
          address: '广东省广州市海珠区怡乐路36号'
        }, {
          name: '李四',
          gender: 1,
          phone: '15913248970',
          address: '广东省广州市海珠区怡乐路37号'
        }],

        tableHeader: [{
          key: 'name',
          title: '姓名'
        }, {
          key: 'gender',
          title: '性别',
          render: (h, context) => {
            return h('div', '女');
          }
        }, {
          key: 'phone',
          title: '电话'
        }, {
          key: 'address',
          title: '地址'
        }, {
          title: '操作'
        }]
        
      }
    }
}
</script>

<style>

</style>