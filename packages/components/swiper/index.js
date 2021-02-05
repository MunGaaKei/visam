import Swiper from './swiper.vue';
import SwiperItem from './swiper-item.vue';

Swiper.install = Vue => Vue.component(Swiper.name, Swiper);
SwiperItem.install = Vue => Vue.component(SwiperItem.name, SwiperItem);

export {
    Swiper,
    SwiperItem,
};