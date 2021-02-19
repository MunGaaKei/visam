<template>
  <div class="vsm-content">
    <h2>图标</h2>
    <h3 class="section-title">样例</h3>
    <p><vsm-icon size="20px" icon="plugin"></vsm-icon></p>
    <br>
    <Codes :codes="code" show></Codes>
    <ul class="vsm-cols icons">
        <li><i class="iconfont icon-home"></i><span>home</span></li>
        <li><i class="iconfont icon-menu"></i><span>menu</span></li>
        <li><i class="iconfont icon-setting"></i><span>setting</span></li>
        <li><i class="iconfont icon-link"></i><span>link</span></li>
        <li><i class="iconfont icon-bright"></i><span>bright</span></li>
        <li><i class="iconfont icon-bookmark"></i><span>bookmark</span></li>
        <li><i class="iconfont icon-cn"></i><span>cn</span></li>
        <li><i class="iconfont icon-en"></i><span>en</span></li>
        <li><i class="iconfont icon-private"></i><span>private</span></li>
        <li><i class="iconfont icon-shake"></i><span>shake</span></li>
        <li><i class="iconfont icon-pay"></i><span>pay</span></li>
        <li><i class="iconfont icon-food"></i><span>food</span></li>
        <li><i class="iconfont icon-bag"></i><span>bag</span></li>
        <li><i class="iconfont icon-battery"></i><span>battery</span></li>
        <li><i class="iconfont icon-upload"></i><span>upload</span></li>
        <li><i class="iconfont icon-download"></i><span>download</span></li>
        <li><i class="iconfont icon-danmu"></i><span>danmu</span></li>
        <li><i class="iconfont icon-carousel"></i><span>carousel</span></li>
        <li><i class="iconfont icon-theme"></i><span>theme</span></li>
        <li><i class="iconfont icon-brush"></i><span>brush</span></li>
        <li><i class="iconfont icon-help"></i><span>help</span></li>
        <li><i class="iconfont icon-safe"></i><span>safe</span></li>
        <li><i class="iconfont icon-qrcode"></i><span>qrcode</span></li>
        <li><i class="iconfont icon-hashtag"></i><span>hashtag</span></li>
        <li><i class="iconfont icon-user"></i><span>user</span></li>
        <li><i class="iconfont icon-friends"></i><span>friends</span></li>
        <li><i class="iconfont icon-female"></i><span>female</span></li>
        <li><i class="iconfont icon-male"></i><span>male</span></li>
        <li><i class="iconfont icon-search"></i><span>search</span></li>
        <li><i class="iconfont icon-tag"></i><span>tag</span></li>
        <li><i class="iconfont icon-notice"></i><span>notice</span></li>
        <li><i class="iconfont icon-desktop"></i><span>desktop</span></li>
        <li><i class="iconfont icon-mobile"></i><span>mobile</span></li>
        <li><i class="iconfont icon-form"></i><span>form</span></li>
        <li><i class="iconfont icon-image"></i><span>image</span></li>
        <li><i class="iconfont icon-file"></i><span>file</span></li>
        <li><i class="iconfont icon-folder"></i><span>folder</span></li>
        <li><i class="iconfont icon-time"></i><span>time</span></li>
        <li><i class="iconfont icon-edit"></i><span>edit</span></li>
        <li><i class="iconfont icon-copy"></i><span>copy</span></li>
        <li><i class="iconfont icon-cut"></i><span>cut</span></li>
        <li><i class="iconfont icon-save"></i><span>save</span></li>
        <li><i class="iconfont icon-pin"></i><span>pin</span></li>
        <li><i class="iconfont icon-filter"></i><span>filter</span></li>
        <li><i class="iconfont icon-sort"></i><span>sort</span></li>
        <li><i class="iconfont icon-comment"></i><span>comment</span></li>
        <li><i class="iconfont icon-talking"></i><span>talking</span></li>
        <li><i class="iconfont icon-notebook"></i><span>notebook</span></li>
        <li><i class="iconfont icon-plugin"></i><span>plugin</span></li>
        <li><i class="iconfont icon-heart"></i><span>heart</span></li>
        <li><i class="iconfont icon-star"></i><span>star</span></li>
        <li><i class="iconfont icon-share"></i><span>share</span></li>
        <li><i class="iconfont icon-like"></i><span>like</span></li>
        <li><i class="iconfont icon-dislike"></i><span>dislike</span></li>
        <li><i class="iconfont icon-appreciate"></i><span>appreciate</span></li>
        <li><i class="iconfont icon-ban"></i><span>ban</span></li>
        <li><i class="iconfont icon-warn"></i><span>warn</span></li>
        <li><i class="iconfont icon-fire"></i><span>fire</span></li>
        <li><i class="iconfont icon-unchecked"></i><span>unchecked</span></li>
        <li><i class="iconfont icon-checked"></i><span>checked</span></li>
        <li><i class="iconfont icon-close"></i><span>close</span></li>
        <li><i class="iconfont icon-check"></i><span>check</span></li>
        <li><i class="iconfont icon-cart"></i><span>cart</span></li>
        <li><i class="iconfont icon-table"></i><span>table</span></li>
        <li><i class="iconfont icon-rank"></i><span>rank</span></li>
        <li><i class="iconfont icon-chart"></i><span>chart</span></li>
        <li><i class="iconfont icon-zoomout"></i><span>zoomout</span></li>
        <li><i class="iconfont icon-zoomin"></i><span>zoomin</span></li>
        <li><i class="iconfont icon-move"></i><span>move</span></li>
        <li><i class="iconfont icon-fullscreen"></i><span>fullscreen</span></li>
        <li><i class="iconfont icon-fullscreen-exit"></i><span>fullscreen-exit</span></li>
        <li><i class="iconfont icon-rocket"></i><span>rocket</span></li>
        <li><i class="iconfont icon-plane"></i><span>plane</span></li>
        <li><i class="iconfont icon-car"></i><span>car</span></li>
        <li><i class="iconfont icon-lightning"></i><span>lightning</span></li>
        <li><i class="iconfont icon-mail"></i><span>mail</span></li>
        <li><i class="iconfont icon-location"></i><span>location</span></li>
        <li><i class="iconfont icon-map"></i><span>map</span></li>
        <li><i class="iconfont icon-phone"></i><span>phone</span></li>
        <li><i class="iconfont icon-delete"></i><span>delete</span></li>
        <li><i class="iconfont icon-up"></i><span>up</span></li>
        <li><i class="iconfont icon-down"></i><span>down</span></li>
        <li><i class="iconfont icon-left"></i><span>left</span></li>
        <li><i class="iconfont icon-right"></i><span>right</span></li>
        <li><i class="iconfont icon-add"></i><span>add</span></li>
        <li><i class="iconfont icon-subtract"></i><span>subtract</span></li>
        <li><i class="iconfont icon-more"></i><span>more</span></li>
        <li><i class="iconfont icon-more-v"></i><span>more-v</span></li>
        <li><i class="iconfont icon-lock"></i><span>lock</span></li>
        <li><i class="iconfont icon-fingerprint"></i><span>fingerprint</span></li>
        <li><i class="iconfont icon-exit"></i><span>exit</span></li>
        <li><i class="iconfont icon-undo"></i><span>undo</span></li>
        <li><i class="iconfont icon-redo"></i><span>redo</span></li>
        <li><i class="iconfont icon-attention-forbid"></i><span>attention-forbid</span></li>
        <li><i class="iconfont icon-wifi"></i><span>wifi</span></li>
        <li><i class="iconfont icon-refresh"></i><span>refresh</span></li>
        <li><i class="iconfont icon-order"></i><span>order</span></li>
        <li><i class="iconfont icon-shuffle"></i><span>shuffle</span></li>
        <li><i class="iconfont icon-repeat"></i><span>repeat</span></li>
        <li><i class="iconfont icon-music"></i><span>music</span></li>
        <li><i class="iconfont icon-record"></i><span>record</span></li>
        <li><i class="iconfont icon-camera"></i><span>camera</span></li>
        <li><i class="iconfont icon-mute"></i><span>mute</span></li>
        <li><i class="iconfont icon-volume"></i><span>volume</span></li>
        <li><i class="iconfont icon-voice"></i><span>voice</span></li>
        <li><i class="iconfont icon-play"></i><span>play</span></li>
        <li><i class="iconfont icon-pause"></i><span>pause</span></li>
        <li><i class="iconfont icon-stop"></i><span>stop</span></li>
        <li><i class="iconfont icon-forward"></i><span>forward</span></li>
        <li><i class="iconfont icon-backward"></i><span>backward</span></li>
        <li><i class="iconfont icon-live"></i><span>live</span></li>
        <li><i class="iconfont icon-play-prev"></i><span>play-prev</span></li>
        <li><i class="iconfont icon-play-next"></i><span>play-next</span></li>
        <li><i class="iconfont icon-align-left"></i><span>align-left</span></li>
        <li><i class="iconfont icon-align-right"></i><span>align-right</span></li>
        <li><i class="iconfont icon-align-center"></i><span>align-center</span></li>
        <li><i class="iconfont icon-align-justify"></i><span>align-justify</span></li>
        <li><i class="iconfont icon-fontweight"></i><span>fontweight</span></li>
        <li><i class="iconfont icon-fontsize"></i><span>fontsize</span></li>
        <li><i class="iconfont icon-fontcolor"></i><span>fontcolor</span></li>
        <li><i class="iconfont icon-fontstyle"></i><span>fontstyle</span></li>
        <li><i class="iconfont icon-strike"></i><span>strike</span></li>
        <li><i class="iconfont icon-underline"></i><span>underline</span></li>
        <li><i class="iconfont icon-eraser"></i><span>eraser</span></li>
        <li><i class="iconfont icon-app"></i><span>app</span></li>
        <li><i class="iconfont icon-compass"></i><span>compass</span></li>
        <li><i class="iconfont icon-heading"></i><span>heading</span></li>
        <li><i class="iconfont icon-list-disc"></i><span>list-disc</span></li>
        <li><i class="iconfont icon-list-deci"></i><span>list-deci</span></li>
        <li><i class="iconfont icon-calendar"></i><span>calendar</span></li>
        <li><i class="iconfont icon-tree"></i><span>tree</span></li>
        <li><i class="iconfont icon-script"></i><span>script</span></li>
        <li><i class="iconfont icon-js"></i><span>js</span></li>
        <li><i class="iconfont icon-fork"></i><span>fork</span></li>
        <li><i class="iconfont icon-html5"></i><span>html5</span></li>
        <li><i class="iconfont icon-css"></i><span>css</span></li>
        <li><i class="iconfont icon-database"></i><span>database</span></li>
        <li><i class="iconfont icon-coffee"></i><span>coffee</span></li>
        <li><i class="iconfont icon-qq"></i><span>qq</span></li>
        <li><i class="iconfont icon-weibo"></i><span>weibo</span></li>
        <li><i class="iconfont icon-github"></i><span>github</span></li>
        <li><i class="iconfont icon-wechat"></i><span>wechat</span></li>
        <li><i class="iconfont icon-zhihu"></i><span>zhihu</span></li>
        <li><i class="iconfont icon-facebook"></i><span>facebook</span></li>
        <li><i class="iconfont icon-instagram"></i><span>instagram</span></li>
        <li><i class="iconfont icon-youtube"></i><span>youtube</span></li>
        <li><i class="iconfont icon-pinterest"></i><span>pinterest</span></li>
        <li><i class="iconfont icon-twitter"></i><span>twitter</span></li>
        <li><i class="iconfont icon-whatsapp"></i><span>whatsapp</span></li>
        <li><i class="iconfont icon-google"></i><span>google</span></li>
        <li><i class="iconfont icon-linkedin"></i><span>linkedin</span></li>
        <li><i class="iconfont icon-safari"></i><span>safari</span></li>
        <li><i class="iconfont icon-chrome"></i><span>chrome</span></li>
        <li><i class="iconfont icon-firefox"></i><span>firefox</span></li>
        <li><i class="iconfont icon-ie"></i><span>ie</span></li>
        <li><i class="iconfont icon-edge"></i><span>edge</span></li>
        <li><i class="iconfont icon-redpacket"></i><span>redpacket</span></li>
        <li><i class="iconfont icon-apple"></i><span>apple</span></li>
        <li><i class="iconfont icon-android"></i><span>android</span></li>
        <li><i class="iconfont icon-linux"></i><span>linux</span></li>
        <li><i class="iconfont icon-windows"></i><span>windows</span></li>
    </ul>

    <h3 class="section-title">参数说明</h3>
    <vsm-table :data="params" :header="paramsHeader" stickyHeader></vsm-table>
  </div>
</template>

<script>
import Codes from '../components/Codes.vue'
export default {
  components: { Codes },
    name: 'Icon',
    data () {
        return {
            code: `<vsm-icon icon="plugin"></vsm-icon>
<!-- or -->
<i class="iconfont icon-plugin"></i>`,
            params: Object.freeze([{
              prop: 'tag',
              type: 'String',
              options: '',
              default: 'div',
              desc: '标签名'
            }, {
              prop: 'icon',
              type: 'String',
              options: '',
              default: '',
              desc: '图标名称'
            }, {
              prop: 'size',
              type: 'String',
              options: '',
              default: '',
              desc: '图标字号'
            }])
        }
    }
}
</script>

<style scoped>
.icons{ flex-wrap: wrap; text-align: center; }
.icons .iconfont{ font-size: 2rem; margin-bottom: .5rem; display: block; transition: transform .2s linear; }
.icons span{ transition: opacity .2s ease; opacity: 0; }
.icons:hover span{ opacity: 1; }
.icons li{ box-sizing: border-box; width: 20%; padding: 1rem 5px; margin: 1rem 0; border-radius: .2rem; transition: all .15s ease; }
.icons li:hover{ background-color: #dae7faaa; }
.icons li:hover .iconfont{ transform: scale(1.3); }
@media (max-width: 580px){ .icons li{ width: 25%; } }
@media (max-width: 480px){ .icons li{ width: 33.333333%; } }
</style>