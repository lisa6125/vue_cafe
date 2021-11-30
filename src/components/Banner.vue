<template>
  <div id="banner">
    <swiper class="swiper" :options="swiperOptionbanner">
      <swiper-slide>
        <img src="@/assets/img/banner1.png" alt="">
      </swiper-slide>
      <swiper-slide>
        <img src="@/assets/img/banner2.png" alt="">
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
import 'swiper/css/swiper.css';
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
        swiperOptionbanner: {
          slidesPerView: 1,
          spaceBetween: 0,
          effect: 'fade',
          slidesPerGroup: 1,
          loop: true,
          loopFillGroupWithBlank: true,
          autoplay: {
            disableOnInteraction: true,
            delay:3000
          }
        },
      }
  },
  name: 'Banner'
};
</script>

<style lang="scss">
@import "../assets/scss/_variables.scss";
#banner{
  padding: 20px;
  img{
    @extend %img-cover;
  }
}
</style>
