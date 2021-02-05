<template>
  <div class="vsm-content">
    <h2>组合</h2>

    <h3 class="section-title">说明</h3>
    <p>主要用来消除子项目组中间项的圆角，例如按钮组，输入框这些。</p>
    <br>
    <vsm-group>
        <vsm-button color="black">黑色</vsm-button>
        <vsm-button color="blue">蓝色</vsm-button>
        <vsm-button color="red">红色</vsm-button>
    </vsm-group>
    <Codes :codes="groupCode"></Codes>

  </div>
</template>

<script>
export default {
    name: 'Group',
    data () {
        return {
            groupCode: `<vsm-group>
    <vsm-button color="black">黑色</vsm-button>
    <vsm-button color="blue">蓝色</vsm-button>
    <vsm-button color="red">红色</vsm-button>
</vsm-group>`
        }
    }
}
</script>