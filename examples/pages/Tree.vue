<template>
  <div class="vsm-content">
      <h2>树</h2>

      <h3 class="section-title">使用</h3>
      <vsm-checkbox v-model="treeProps" :options="treeOptions" type="slide" inline></vsm-checkbox>

      <vsm-tree :list="list"
        :checkable="treeProps.includes('checkable')"
        :selectable="treeProps.includes('selectable')"
        :guideline="treeProps.includes('guideline')"></vsm-tree>

      <Codes :codes="codes0"></Codes>

      <h3 class="section-title">参数说明</h3>
      <vsm-table :data="paramsComp" :header="paramsHeader" stickyHeader></vsm-table>
      <br>
      <vsm-table :data="paramsNode" :header="paramsHeaderNode" stickyHeader></vsm-table>
      
  </div>
</template>

<script>
export default {
    name: 'Tree',
    data () {
        return {
            treeProps: ['checkable'],
            treeOptions: [
                { label: '可勾选', value: 'checkable' },
                { label: '可选择', value: 'selectable' },
                { label: '目录线', value: 'guideline' },
            ],
            list: [{
                name: '一级目录 1',
                icon: '<i class="iconfont icon-folder"></i>',
                open: true,
                children: [{
                    name: '二级目录 1-1',
                    icon: '<i class="iconfont icon-folder"></i>',
                    open: true,
                    children: [{
                        name: '三级 1-1-1',
                        checked: true
                    }, {
                        name: '三级 1-1-2'
                    }, {
                        name: '三级 1-1-3'
                    }, {
                        name: '三级 1-1-4'
                    }]
                }, {
                    name: '二级目录 1-2',
                    icon: '<i class="iconfont icon-folder"></i>',
                    children: [{
                        name: '三级 1-2-1'
                    }, {
                        name: '三级 1-2-2',
                        checkable: false
                    }]
                }]
            }, {
                name: '一级目录 2',
                icon: '<i class="iconfont icon-folder"></i>',
                children: [{
                    name: '二级 2-1'
                }, {
                    name: '二级 2-2'
                }]
            }],
            paramsComp: [{
                prop: 'list',
                type: 'Array',
                options: '',
                default: '',
                desc: '生成数据'
            }, {
                prop: 'checkable',
                type: 'Boolean',
                options: '',
                default: 'false',
                desc: '节点勾选功能'
            }, {
                prop: 'selectable',
                type: 'Boolean',
                options: '',
                default: 'false',
                desc: '节点选择功能'
            }, {
                prop: 'guideline',
                type: 'Boolean',
                options: '',
                default: 'false',
                desc: '目录辅助线功能'
            }, {
                prop: 'toggler',
                type: 'String',
                options: '',
                default: '<i class="iconfont icon-triangle-down"></i>',
                desc: '下拉图标'
            }, {
                prop: 'toggle-on-click',
                type: 'Boolean',
                options: '',
                default: 'true',
                desc: '是否点击整个节点打开子列表'
            }, {
                prop: 'check-on-click',
                type: 'Boolean',
                options: '',
                default: 'false',
                desc: '是否点击整个节点代替勾选'
            }, {
                prop: 'expand-all',
                type: 'Boolean',
                options: '',
                default: 'false',
                desc: '是否默认打开所有子列表'
            }, {
                prop: '@node-click',
                type: 'Function',
                options: '',
                default: '',
                desc: '监听节点点击事件，参数（node, $event）',
                event: true
            }, {
                prop: '@node-check',
                type: 'Function',
                options: '',
                default: '',
                desc: '监听节点勾选事件，参数（node）',
                event: true
            }],
            paramsNode: [{
                prop: 'name',
                type: 'String',
                options: '',
                default: '',
                desc: '节点名称'
            }, {
                prop: 'icon',
                type: 'String',
                options: '',
                default: '',
                desc: '节点图标'
            }, {
                prop: 'children',
                type: 'Array',
                options: '',
                default: '',
                desc: '节点子列表'
            }, {
                prop: 'open',
                type: 'Boolean',
                options: '',
                default: 'false',
                desc: '节点子列表是否展开'
            }, {
                prop: 'checked',
                type: 'Boolean',
                options: '',
                default: 'false',
                desc: '节点勾选状态'
            }, {
                prop: 'checkable',
                type: 'Boolean',
                options: '',
                default: 'true',
                desc: '节点是否可被勾选'
            }],
        }
    },
    computed: {
        codes0 () {
            return `<vsm-tree :list="list"\
${this.treeProps.includes('checkable')? ' checkable': ''}\
${this.treeProps.includes('guideline')? ' guideline': ''}\
${this.treeProps.includes('selectable')? ' selectable': ''}></vsm-tree>

<\script>
export default {
  data () {
    return {
        list: [{
            name: '一级目录 1',
            icon: '<i class="iconfont icon-folder"></i>',
            open: true,
            children: [{
                name: '二级目录 1-1',
                icon: '<i class="iconfont icon-folder"></i>',
                open: true,
                children: [{
                    name: '三级 1-1-1',
                    checked: true
                }, {
                    name: '三级 1-1-2'
                }, {
                    name: '三级 1-1-3'
                }, {
                    name: '三级 1-1-4'
                }]
            }, {
                name: '二级目录 1-2',
                icon: '<i class="iconfont icon-folder"></i>',
                children: [{
                    name: '三级 1-2-1'
                }, {
                    name: '三级 1-2-2',
                    checkable: false
                }]
            }]
        }, {
            name: '一级目录 2',
            icon: '<i class="iconfont icon-folder"></i>',
            children: [{
                name: '二级 2-1'
            }, {
                name: '二级 2-2'
            }]
        }]
    }
  }
}
</\script>`;
        },
        paramsHeaderNode () {
            let arr = JSON.parse(JSON.stringify(this.paramsHeader));
            arr[0].title = "节点属性";
            return arr;
        }
    },
    created () {
        this.paramsHeader[0].title = '组件属性';
    },
}
</script>