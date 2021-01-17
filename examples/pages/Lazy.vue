<template>
  <div class="vsm-content">
      <h2>懒加载</h2>

    <h3 class="section-title">使用</h3>
    <p>默认当图片进入视窗时进行加载。</p>
    <br>
    <div class="port">
        <div class="holder">向下滚动显示图片</div>
        <img v-lazy="'/img/naruto.6547fc29.jpg'">
    </div>

    <h3 class="section-title">背景图懒加载</h3>
    <p>背景图的懒加载需要用到指令参数：v-lazy:background。</p>
    <br>
    <div class="port">
        <div class="holder">向下滚动显示背景图</div>
        <div class="lazy-background" v-lazy:background="'/img/naruto.6547fc29.jpg'"></div>
    </div>



  </div>
</template>

<script>
export default {
    name: 'Lazy',
    data () {
        return {

        }
    }
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
    margin-bottom: 100px;
    line-height: 200px;
    text-align: center;
    font-size: 1.2em;
    font-weight: 600;
}
.lazy-background {
    height: 400px;
    background-size: cover;
    background-repeat: no-repeat;
}
</style>