<template>
  <div class="vsm-content">
      <h2>树</h2>

      <h3 class="section-title">使用</h3>
      <vsm-tree :list="list"></vsm-tree>
  </div>
</template>

<script>
export default {
    name: 'Tree',
    data () {
        return {
            list: [{
                name: '一级目录 1',
                open: true,
                children: [{
                    name: '二级目录 1-1',
                    children: [{
                        name: '三级 1-1-1'
                    }, {
                        name: '三级 1-1-2'
                    }]
                }, {
                    name: '二级目录 1-2',
                    children: [{
                        name: '三级 1-2-1'
                    }, {
                        name: '三级 1-2-2'
                    }]
                }]
            }, {
                name: '一级目录 2',
                children: [{
                    name: '二级 2-1'
                }, {
                    name: '二级 2-2'
                }]
            }]
        }
    }
}
</script>