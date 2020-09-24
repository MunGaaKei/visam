<template>
  <div class="vsm-content">
      <h2>表格</h2>

      <h3 class="section-title">使用</h3>
      <div class="codes">
        <vsm-tabs :tabs="codeTabs" :active="activeTab0" @change="switchTab($event, 0)">
          <div class="panel" v-show="activeTab0 === 0">
            <vsm-table :data="tableData"
              :header="tableHeader"
              stickyHeader
              stickyLeft="row"
              stickyRight="option"
              height="300px"
              ></vsm-table>
          </div>

          <div class="panel" v-show="activeTab0 === 1">
<pre v-highlight>
<code class="html">
&lt;vsm-table&gt;&lt;/vsm-table&gt;
&lt;script>
export default {
    name: 'Table',
    data () {
      return {
        activeTab0: 0,

        tableData: [{
          name: '张三',
          gender: 0,
          phone: '123456789',
          address: '广东省广州市海珠区怡乐路36号'
        }, {
          name: '李四',
          gender: 1,
          phone: '123456789',
          address: '广东省广州市海珠区怡乐路37号'
        }],

        tableHeader: [{
          key: 'row',
          render: (h, context) => {
            return h('span', context.row);
          }
        }, {
          key: 'name',
          title: '姓名'
        }, {
          key: 'gender',
          title: '性别',
          render: (h, context) => {
            return h('span', context.data.gender === 0? '男': '女');
          }
        }, {
          key: 'phone',
          title: '电话'
        }, {
          key: 'address',
          title: '地址'
        }, {
          title: '其它信息',
          render: (h) => {
            return h('div', {
              style: 'width: 20em;'
            });
          }
        }, {
          title: '操作',
          key: 'option',
          render: (h, context) => {
            return h('div', [
              h('vsm-button', '编辑'),
              h('vsm-button', {
                'class': 'vsm-blue'
              }, ['取消'])
            ]);
          }
        }],
        
      }
    }
}
&lt;/script>

</code>
</pre>
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
          phone: '123456789',
          address: '广东省广州市海珠区怡乐路36号'
        }, {
          name: '李四',
          gender: 1,
          phone: '123456789',
          address: '广东省广州市海珠区怡乐路37号'
        }, {
          name: '王五',
          gender: 0,
          phone: '123456789',
          address: '广东省广州市海珠区怡乐路37号'
        }, {
          name: '赵六',
          gender: 1,
          phone: '123456789',
          address: '广东省广州市海珠区怡乐路37号'
        }, {
          name: '吴七',
          gender: 1,
          phone: '123456789',
          address: '广东省广州市海珠区怡乐路37号'
        }, {
          name: '周八',
          gender: 1,
          phone: '123456789',
          address: '广东省广州市海珠区怡乐路37号'
        }, {
          name: '孙九',
          gender: 0,
          phone: '123456789',
          address: '广东省广州市海珠区怡乐路37号'
        }],

        tableHeader: [{
          key: 'row',
          render: (h, context) => {
            return h('span', context.row);
          }
        }, {
          key: 'name',
          title: '姓名'
        }, {
          key: 'gender',
          title: '性别',
          render: (h, context) => {
            return h('span', context.data.gender === 0? '男': '女');
          }
        }, {
          key: 'phone',
          title: '电话'
        }, {
          key: 'address',
          title: '地址'
        }, {
          title: '其它信息',
          render: (h) => {
            return h('div', {
              style: 'width: 20em;'
            });
          }
        }, {
          title: '操作',
          key: 'option',
          render: (h, context) => {
            return h('vsm-button-group', [
              h('vsm-button', {
                'class': 'vsm-blue'
              }, ['编辑']),
              h('vsm-button', {
                'class': 'vsm-white'
              }, ['取消'])
            ]);
          }
        }],
        
      }
    }
}
</script>

<style>

</style>