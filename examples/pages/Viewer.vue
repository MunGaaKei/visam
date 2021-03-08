<template>
  <div class="vsm-content">
    <h2>查看器</h2>
    <h3 class="section-title">使用</h3>
    <p>缩略图会在上方hover显示。</p>
    <br>
    <vsm-cols class="demo-images">
        <vsm-n v-for="(p, i) in imgs"
            :key="i">
            <img v-if="typeof p === 'string'" :src="p" @click="view(i)">
            <img v-else :src="p.img" @click="view(i)">
        </vsm-n>
    </vsm-cols>
    <Codes :codes="code"></Codes>

    <h3 class="section-title">参数说明</h3>
    <p>图片的选项有以下几个：</p>
    <ul class="options">
        <li><span class="vsm-blue vsm-reverse">img</span>: 图片路径</li>
        <li><span class="vsm-blue vsm-reverse">thumb</span>: 缩略图路径，无则默认取 img 值</li>
        <li><span class="vsm-blue vsm-reverse">video</span>: 视频路径，当不为空时将显示视频</li>
        <li><span class="vsm-blue vsm-reverse">title</span>: 标题</li>
    </ul>
    <br>
    <vsm-table :data="params" :header="paramsHeader" stickyHeader></vsm-table>


  </div>
</template>

<script>
export default {
    name: 'Viewer',
    data () {
        return {
            imgs: [
                require('@/assets/img/p1.jpg'),
                require('@/assets/img/p2.jpg'),
                require('@/assets/img/p3.jpg'),
                // {
                //     img: 'https://mungaakei.github.io/masiv/resource/video.mp4',
                //     type: 'video'
                // }
            ],
            params: Object.freeze([{
                prop: 'imgs',
                type: 'Array',
                options: '',
                default: '',
                desc: '显示的图片列表'
            }, {
                prop: 'thumbs',
                type: 'Boolean',
                options: '',
                default: 'true',
                desc: '是否显示缩略图'
            }, {
                prop: 'active',
                type: 'Number',
                options: '',
                default: '0',
                desc: '打开时显示第几张'
            }, {
                prop: 'minScale',
                type: 'Number',
                options: '',
                default: '0.125',
                desc: '缩小时最小比例，相对于原图大小'
            }, {
                prop: 'maxScale',
                type: 'Number',
                options: '',
                default: '2',
                desc: '放大时最大比例，相对于原图大小'
            }, {
                prop: 'index',
                type: 'Boolean',
                options: '',
                default: 'true',
                desc: '显示索引'
            }, {
                prop: 'toolbar',
                type: 'Boolean',
                options: '',
                default: 'true',
                desc: '显示功能按钮'
            }, {
                prop: 'zoomable',
                type: 'Boolean',
                options: '',
                default: 'true',
                desc: '是否可缩放'
            }, {
                prop: 'movable',
                type: 'Boolean',
                options: '',
                default: 'true',
                desc: '是否可移动'
            }, {
                prop: 'lazyload',
                type: 'Boolean',
                options: '',
                default: 'false',
                desc: '大图懒加载'
            }, {
                prop: 'target',
                type: 'HTMLElement',
                options: '',
                default: 'document.body',
                desc: '组件节点挂载的位置，可配合弹窗'
            }]),
            code: `<vsm-cols class="demo-images">
    <vsm-n v-for="(p, i) in imgs"
        :key="i">
        <img :src="p" @click="view(i)">
    </vsm-n>
</vsm-cols>

<\script>
export default {
    data () {
        return {
            imgs: [
                '/examples/assets/img/p1.jpg',
                '/examples/assets/img/p2.jpg',
                '/examples/assets/img/p3.jpg'
            ],
        }
    },
    methods: {
        view (i) {
            this.$viewer({
                imgs: this.imgs,
                active: i,
            });
        }
    }
}
</\script>`,
        }
    },
    methods: {
        view (i) {
            this.$viewer({
                imgs: this.imgs,
                active: i,
                lazyload: true
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
.options {
    padding-left: 2em;
}
.options .vsm-blue {
    display: inline-block;
    min-width: 4em;
}
.options > li {
    margin: 5px 0;
}
</style>