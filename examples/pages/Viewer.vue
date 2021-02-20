<template>
  <div class="vsm-content">
    <h2>查看器</h2>
    <h3 class="section-title">使用</h3>
    <vsm-cols class="demo-images">
        <vsm-n v-for="(p, i) in imgs"
            :key="i">
            <img v-if="typeof p === 'string'" :src="p" @click="view(i)">
        </vsm-n>
    </vsm-cols>
    <Codes :codes="code"></Codes>

  </div>
</template>

<script>
export default {
    name: 'Viewer',
    data () {
        return {
            imgs: [
                '/examples/assets/img/p1.jpg',
                '/examples/assets/img/p2.jpg',
                '/examples/assets/img/p3.jpg',
                // {
                //     img: 'https://mungaakei.github.io/masiv/resource/video.mp4',
                //     type: 'video'
                // }
            ],
            code: `<vsm-cols class="demo-images">
    <vsm-n v-for="(p, i) in imgs"
        :key="i">
        <img v-if="typeof p === 'string'" :src="p" @click="view(i)">
    </vsm-n>
</vsm-cols>`
        }
    },
    methods: {
        view (i) {
            this.$viewer({
                imgs: this.imgs,
                blur: true,
                active: i,
            });
        }
    }
}
</script>

<style lang="scss" scoped>
.demo-images {
    align-items: center;
    img {
        height: 200px;
        width: 100%;
        object-fit: cover;
        &:hover {
            object-position: 20% 20%;
        }
    }
}
</style>