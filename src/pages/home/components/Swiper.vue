<template>
  <article class='swipe' v-if="showSwiper">
    <swiper :options="swiperOption">
      <swiper-slide v-for="item in swiperList" :key="item.id"><img :src="item.imgUrl" class="swipe-item"></swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </article>
</template>
<script>
export default {
  props: {
    swiperList: Array
  },
  data() {
    return {
      swiperOption: {
        loop: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: false
        }
      }
    };
  },
  // 因为props未传值时，是空数组，所以loop不能生效
  computed: {
    showSwiper() {
      return this.swiperList.length;
    }
  }
};
</script>
<style lang="stylus" scoped>
.swipe >>> .swiper-pagination-bullet-active {
  background: #fff;
}

.swipe {
  overflow: hidden;
  width: 100%;
  height: 0;
  padding-bottom: 31.25%;
  background: #eee;

  .swipe-item {
    width: 100%;
  }
}
</style>
