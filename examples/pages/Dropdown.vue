<template>
  <div class="vsm-content">
      <h2>下拉菜单</h2>
      
      <h3 class="section-title">使用</h3>
      <vsm-dropdown hover>
          <vsm-button>下拉菜单</vsm-button>
          <vsm-tree
            slot="content"
            :list="list"
            ></vsm-tree>
      </vsm-dropdown>
      
      <Codes :codes="codes0" show></Codes>

      <h3 class="section-title">规定方向</h3>
      <p>通过点击向右弹出自定义内容，点击内容不会隐藏下拉框。</p>
      <br>
      <vsm-dropdown position="right" :hide-on-content-click="false">
          <vsm-button color="blue">向右弹出</vsm-button>
          <vsm-input placeholder="请输入" slot="content" width="150px">
              <vsm-button slot="append">
                  <i class="iconfont icon-search"></i>
              </vsm-button>
          </vsm-input>
      </vsm-dropdown>
      <Codes :codes="codes1"></Codes>
      
      <h3 class="section-title">参数说明</h3>
      <vsm-table :data="params" :header="paramsHeader" stickyHeader></vsm-table>


  </div>
</template>

<script>
export default {
    name: 'Dropdown',
    data () {
        return {
            list: [{
                name: '下拉选项 一'
            }, {
                name: '下拉选项 二'
            }, {
                name: '下拉选项 三'
            }, {
                name: '下拉选项 四'
            }, {
                name: '下拉选项 五'
            }],
            params: [{
                prop: 'display',
                type: 'Boolean',
                options: '',
                default: 'false',
                desc: '是否默认打开'
            }, {
                prop: 'hover',
                type: 'Boolean',
                options: '',
                default: 'false',
                desc: '鼠标移入移出控制显示隐藏，默认为点击'
            }, {
                prop: 'hide-on-content-click',
                type: 'Boolean',
                options: '',
                default: 'true',
                desc: '点击下拉内容时是否隐藏'
            }, {
                prop: 'hide-on-outside-click',
                type: 'Boolean',
                options: '',
                default: 'true',
                desc: '点击外部区域时是否隐藏'
            }, {
                prop: 'position',
                type: 'String',
                options: '"left", "top", "right", "bottom"',
                default: '',
                desc: '默认空值，设置备选值时会固定此方向弹出'
            }, {
                prop: 'toggle',
                type: 'Function',
                options: '',
                default: '',
                desc: '监听下拉框显示隐藏事件，参数（$event）',
                event: true
            }, {
                prop: 'content-click',
                type: 'Function',
                options: '',
                default: '',
                desc: '监听下拉框内容点击事件，建议可以在内容上进行监听，参数（$event）',
                event: true
            }, {
                prop: 'slot:default',
                type: '',
                options: '',
                default: '',
                desc: '触发下拉框显示隐藏的元素',
                slot: true
            }, {
                prop: 'slot:content',
                type: '',
                options: '',
                default: '',
                desc: '下拉框的内容',
                slot: true
            }],
            codes0: `<vsm-dropdown hover>
    <vsm-button>下拉菜单</vsm-button>
    <vsm-tree
    slot="content"
    :list="list"
    ></vsm-tree>
</vsm-dropdown>`,
            codes1: `<vsm-dropdown position="right" :hide-on-content-click="false">
    <vsm-button color="blue">向右弹出</vsm-button>
    <vsm-input placeholder="请输入" slot="content" width="150px">
        <vsm-button slot="append">
            <i class="iconfont icon-search"></i>
        </vsm-button>
    </vsm-input>
</vsm-dropdown>`
        }
    },
}
</script>