<template>
  <section class='swipe'>
    <swiper :options="swiperOption" name='swiper1'>
      <swiper-slide v-for="item in swipeList" :key="item.id"><img :src="item.imgUrl" class="swipe-item" ></swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </section>
</template>
<script>
export default {
  data() {
    return {
      swiperOption: {
        // spaceBetween: 30,
        // centeredSlides: true,
        // loop: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: false,
        }
      },
      swipeList: [
        {
          id: "001",
          imgUrl:
            "http://img1.qunarzz.com/piao/fusion/1804/bd/8e4a1c3f470d3702.jpg_750x200_f1f0a8c7.jpg"
        },
        {
          id: "002",
          imgUrl:
            "http://img1.qunarzz.com/piao/fusion/1806/1d/187ca571d2f9d602.jpg_750x200_d163f927.jpg"
        },
        {
          id: "003",
          imgUrl:
            "http://img1.qunarzz.com/piao/fusion/1806/1d/187ca571d2f9d602.jpg_750x200_d163f927.jpg"
        }
      ]
    };
  }
};
</script>
<style lang="stylus" scoped>
.swipe >>> .swiper-pagination-bullet-active {
  background: #fff;
}

.swipe {
  width: 100%;
  height: 26.27vw;

  .swipe-item {
    width: 100%;
  }
}
</style>
