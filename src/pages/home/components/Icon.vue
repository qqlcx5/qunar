<template>
  <article class="icon">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(icons,index) in pages" :key="index">
        <article class="icon-item" v-for="icon in icons" :key='icon.id'>
          <div class="icon-img"><img :src="icon.imgUrl" alt="" class="img-content">
          </div>
          <div class="keywords">{{icon.desc}}</div>
        </article>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>

  </article>
</template>
<script>
export default {
  props: {
    iconList: Array
  },
  data() {
    return {
      swiperOption: {
        pagination: {
          el: ".swiper-pagination",
          clickable: false
        }
      }
    };
  },
  computed: {
    pages(){
      const icons = []
      this.iconList.forEach((ele,index) => {
      const icon = Math.floor(index/8)
      // console.log(icons[icon])
      // console.log([[]])
      if(!icons[icon]){
        icons[icon]= []
      }
      icons[icon].push(ele)
    })
    return icons
    }
  }
};
</script>
<style lang="stylus" scoped>
.icon >>> .swiper-wrapper {
  height: 0;
  padding-bottom: 50%;
}

.icon >>> .swiper-pagination-bullet-active {
  background-color: rgba(0, 175, 190, 0.8);
}

.icon {
  margin-top: 0.1rem;
}

.icon-item {
  float: left;
  width: 25%;
  padding-bottom: 25%;
  position: relative;

  .icon-img {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0.44rem;
    box-sizing: border-box;
    padding: 0.1rem;

    .img-content {
      display: block;
      margin: 0 auto;
      height: 100%;
    }
  }

  .keywords {
    color: #212121;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 0.44rem;
    line-height: 0.44rem;
    text-align: center;
  }
}
</style>
    // pages() {
    //   const pages = [];
    //   this.iconList.forEach((item, index) => {
    //     const page = Math.floor(index / 8);
    //     if (!pages[page]) {
    //       pages[page] = [];
    //     }
    //     pages[page].push(item);
    //   });
    //   return pages;
    // }