import Swiper from './swiper';
import SwiperItem from './swiper-item';

Swiper.install = Vue => Vue.component(Swiper.name, Swiper);
SwiperItem.install = Vue => Vue.component(SwiperItem.name, SwiperItem);

export {
    Swiper,
    SwiperItem,
};