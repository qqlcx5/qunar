<template>
  <article class="container" @click="handlecloseShow">

    <div class="wrapper">
      <swiper :options="swiperOption">
        <swiper-slide v-for="(item,index)  in imgs" :key="index"><img :src="item" class="gallary-img"></swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>

  </article>

</template>
<script>
export default {
  props: {
    imgs: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      swiperOption: {
        pagination: {
          el: ".swiper-pagination",
          type: "fraction"
        },
        observer: true,
        observeParents: true
      }
    };
  },
  methods:{
    handlecloseShow(){
      this.$emit("close")
    }
  }
};
</script>
<style lang="stylus" scoped>
.wrapper >>> .swiper-container {
  overflow: inherit;
}

.container {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  background: #000;
  display: flex;
  flex-direction: column;
  justify-content: center;

  .wrapper {
    height: 0;
    padding-bottom: 100%;
    width: 100%;

    .gallary-img {
      width: 100%;
    }

    .swiper-pagination {
      color: #fff;
      bottom: -1rem;
    }
  }
}
</style>
