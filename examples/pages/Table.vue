<template>
  <div class="vsm-content">
      <h2>表格</h2>

      <h3 class="section-title">使用</h3>

      <vsm-table :data="tableData"
        :header="tableHeader"
        sticky-header
        height="300px"
      ></vsm-table>

      <Codes :codes="codes0"></Codes>

      <h3 class="section-title">属性说明</h3>
      <vsm-table :data="params" :header="paramsHeader" sticky-header></vsm-table>

      <h3 class="section-title">表格渲染属性说明</h3>
      <p>通过<code>header</code>数组里的子对象属性设置：</p>
      <br>
      <vsm-table :data="headerParams" :header="paramsHeader"></vsm-table>


  </div>
</template>

<script>
export default {
    name: 'Table',
    data () {
      return {
        headerParams: [{
          prop: 'key',
          type: 'String',
          options: '',
          default: '',
          desc: '数据项属性名'
        }, {
          prop: 'title',
          type: 'String',
          options: '',
          default: '',
          desc: '列表头文本'
        }, {
          prop: 'sticky',
          type: 'String',
          options: '"left", "right"',
          default: '',
          desc: '该列是否固定左右'
        }, {
          prop: 'render',
          type: 'Function',
          options: '',
          default: '',
          desc: '该列中的表格渲染方式，函数的第二个参数包含该表格的数据'
        }, {
          prop: 'class',
          type: 'String',
          options: '',
          default: '',
          desc: '该列表格的class'
        }],
        
        params: [{
          prop: 'data',
          type: 'Array',
          options: '',
          default: '[]',
          desc: '表格数据'
        }, {
          prop: 'header',
          type: 'Array',
          options: '',
          default: '[]',
          desc: '表格头部设置，列顺序，其中包括该列数据渲染方式'
        }, {
          prop: 'stickyHeader',
          type: 'Boolean',
          options: '',
          default: 'false',
          desc: '表格头部是否置顶'
        }, {
          prop: 'height',
          type: 'String',
          options: '',
          default: '',
          desc: '表格最大高度设置'
        }, {
          prop: '@header-click',
          type: 'Function',
          options: '',
          default: '',
          desc: '监听表格头部单元格点击事件，参数：th, col, event',
          event: true
        }, {
          prop: '@header-dblclick',
          type: 'Function',
          options: '',
          default: '',
          desc: '监听表格头部单元格双击事件，参数：th, col, event',
          event: true
        }, {
          prop: '@cell-click',
          type: 'Function',
          options: '',
          default: '',
          desc: '监听单元格点击事件，参数：td, row, col, event',
          event: true
        }, {
          prop: '@cell-dblclick',
          type: 'Function',
          options: '',
          default: '',
          desc: '监听单元格双击事件，参数：td, row, col, event',
          event: true
        }, {
          prop: '@row-click',
          type: 'Function',
          options: '',
          default: '',
          desc: '监听表格行点击事件，参数：tr, row, event',
          event: true
        }],
        codes0: `<vsm-table :data="tableData"
  :header="tableHeader"
  stickyHeader
  height="300px"
></vsm-table>

<\script>
export default {
  data () {
    return {
      tableData: [{
        name: '张三',
        gender: 0,
        phone: '13010241874',
        address: '广东省广州市海珠区新港西路',
        bio: '一段很长很长很长很长真的非常长的自我介绍'
      }],
      tableHeader: [{
        key: 'row',
        sticky: 'left',
        render: (h, context) => {
          return h('span', context.row);
        }
      }, {
        key: 'name',
        title: '姓名',
        sticky: 'left',
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
        title: '自我介绍',
        key: 'bio'
      }, {
        title: '操作',
        key: 'option',
        sticky: 'right',
        render: (h, context) => {
          return h('vsm-group', [
            h('vsm-button', {
              'attrs': { small: true }
            }, ['编辑']),
            h('vsm-button', {
              'attrs': { small: true, plain: true }
            }, ['取消'])
          ]);
        }
      }],
    }
  }
}
</\script>`,

        tableData: [{
          name: '张三',
          gender: 0,
          phone: '13010241874',
          address: '广东省广州市海珠区新港西路',
          bio: '一段很长很长很长很长真的非常长的自我介绍'
        }, {
          name: '李四',
          gender: 1,
          phone: '13010241874',
          address: '广东省广州市海珠区新港西路',
          bio: '一段很长很长很长很长真的非常长的自我介绍'
        }, {
          name: '王五',
          gender: 0,
          phone: '13010241874',
          address: '广东省广州市海珠区新港西路',
          bio: '一段很长很长很长很长真的非常长的自我介绍'
        }, {
          name: '赵六',
          gender: 1,
          phone: '13010241874',
          address: '广东省广州市海珠区新港西路',
          bio: '一段很长很长很长很长真的非常长的自我介绍'
        }, {
          name: '吴七',
          gender: 1,
          phone: '13010241874',
          address: '广东省广州市海珠区新港西路',
          bio: '一段很长很长很长很长真的非常长的自我介绍'
        }, {
          name: '周八',
          gender: 1,
          phone: '13010241874',
          address: '广东省广州市海珠区新港西路',
          bio: '一段很长很长很长很长真的非常长的自我介绍'
        }, {
          name: '孙九',
          gender: 0,
          phone: '13010241874',
          address: '广东省广州市海珠区新港西路',
          bio: '一段很长很长很长很长真的非常长的自我介绍'
        }],

        tableHeader: [{
          key: 'row',
          sticky: 'left',
          render: (h, context) => {
            return h('span', context.row);
          },
        }, {
          key: 'gender',
          title: '性别',
          render: (h, context) => {
            return h('span', context.data.gender === 0? '男': '女');
          }
        }, {
          key: 'name',
          title: '姓名',
          sticky: 'left',
        }, {
          key: 'phone',
          title: '电话'
        }, {
          key: 'address',
          title: '地址'
        }, {
          title: '自我介绍',
          key: 'bio'
        }, {
          title: '操作',
          key: 'option',
          sticky: 'right',
          render: (h, context) => {
            return h('vsm-group', [
              h('vsm-button', {
                'attrs': {
                  small: true
                }
              }, ['编辑']),
              h('vsm-button', {
                'attrs': { small: true, plain: true }
              }, ['取消'])
            ]);
          }
        }],
      }
    },
    methods: {
      
    }
}
</script>

<style>

</style>