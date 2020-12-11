<template>
  <div class="vsm-content">
      <h2>下拉菜单</h2>

      <h3 class="section-title">使用</h3>
      <vsm-dropdown>
          <vsm-button>下拉菜单</vsm-button>
          <vsm-tree
            slot="content"
            :list="list"
            ></vsm-tree>
      </vsm-dropdown>
      
  </div>
</template>

<script>
export default {
    name: 'Dropdown',
    data () {
        return {
            list: [{
                name: '海珠'
            }, {
                name: '荔湾'
            }]
        }
    }
}
</script>