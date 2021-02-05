<template>
  <div class="vsm-content">
      <h2>懒加载</h2>

    <h3 class="section-title">使用</h3>
    <p>默认当图片进入视窗时进行加载。</p>
    <br>
    <div class="port">
        <div class="holder">向下滚动显示图片</div>
        <img class="img" v-lazy="img">
        <div class="holder">向上滚动显示图片</div>
    </div>
    <Codes :codes="codes0"></Codes>

    <h3 class="section-title">背景图懒加载</h3>
    <p>背景图的懒加载需要用到指令参数：v-lazy:background。</p>
    <br>
    <div class="port">
        <div class="holder">向下滚动显示背景图</div>
        <div class="lazy-background" v-lazy:background="img"></div>
        <div class="holder">向上滚动显示背景图</div>
    </div>
    <Codes :codes="codes1"></Codes>


    <h3 class="section-title">参数说明</h3>
    <vsm-table :data="params" :header="paramsHeader" stickyHeader></vsm-table>



  </div>
</template>

<script>
export default {
    name: 'Lazy',
    data () {
        return {
            img: '/examples/assets/img/landscape.33aaf0ef.jpg',
            codes0: `<div class="port">
    <div class="holder">向下滚动显示图片</div>
    <img v-lazy="'/img/landscape.jpg'">
    <div class="holder">向上滚动显示图片</div>
</div>`,
            codes1: `<div class="port">
    <div class="holder">向下滚动显示背景图</div>
    <div v-lazy:background="'/img/landscape.jpg'">
    <div class="holder">向上滚动显示背景图</div>
</div>`,    
            params: Object.freeze([{
                prop: 'img',
                type: 'String',
                options: '',
                default: '',
                desc: '图片路径'
            }, {
                prop: 'background',
                type: 'Boolean',
                options: '',
                default: 'false',
                desc: '是否为背景图，可通过指令参数设置'
            }, {
                prop: 'fade',
                type: 'Boolean',
                options: '',
                default: 'true',
                desc: '是否加载完成后渐显'
            }, {
                prop: 'viewport',
                type: 'HTMLElement',
                options: '',
                default: '',
                desc: '视窗元素节点'
            }, {
                prop: 'margin',
                type: 'String',
                options: '',
                default: '',
                desc: '视窗大小偏移值'
            }])
        }
    },
}
</script>

<style scoped>
.port {
    height: 200px;
    overflow: auto;
    background: var(--background-vice);
    border-radius: var(--radius);
}
.holder {
    line-height: 200px;
    text-align: center;
    font-size: 1.2em;
    font-weight: 600;
}
.img,
.lazy-background {
    margin: 100px auto;
    max-height: unset;
    max-width: 90%;
}
.lazy-background {
    height: 400px;
    background-size: cover;
    background-repeat: no-repeat;
}
</style>