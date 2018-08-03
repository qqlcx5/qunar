<template>
  <article class='swipe'>
    <swiper :options="swiperOption" >
      <swiper-slide v-for="item in swipeList" :key="item.id"><img :src="item.imgUrl" class="swipe-item" ></swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </article>
</template>
<script>
export default {
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
          clickable: false,
        }
      },
      swipeList: [
        {
          id: "005",
          imgUrl:
            "http://img1.qunarzz.com/piao/fusion/1712/91/a275569091681d02.jpg_640x200_0519ccb9.jpg"
        },
        {
          id: "001",
          imgUrl:
            "http://img1.qunarzz.com/piao/fusion/1801/1a/94428c6dea109402.jpg_640x200_2cf590d8.jpg"
        },
        {
          id: "002",
          imgUrl:
            "http://img1.qunarzz.com/piao/fusion/1802/42/7c92b9a381e46402.jpg_640x200_1cdce2a4.jpg"
        },
        {
          id: "003",
          imgUrl:
            "http://img1.qunarzz.com/piao/fusion/1712/91/a275569091681d02.jpg_640x200_0519ccb9.jpg"
        },{
          id: "004",
          imgUrl:
            "http://img1.qunarzz.com/piao/fusion/1802/51/e78f936a5b404102.jpg_640x200_c14f0b3a.jpg"
        },


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
  overflow: hidden
    width: 100%
    height: 0
    padding-bottom: 31.25%
    background: #eee

  .swipe-item {
    width: 100%;
  }
}
</style>
