<template>
  <article class="icon">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(icons,index) in pages" :key="index">
        <article class="icon-item" v-for="icon in icons" :key='icon.id'>
          <div class="icon-img"><img :src="icon.img" alt="" class="img-content">
          </div>
          <div class="keywords">{{icon.keyword}}</div>
        </article>
      </swiper-slide>
    </swiper>

  </article>
</template>
<script>
export default {
  data() {
    return {
      swiperOption: {},
      list: [
        {
          id: "0001",
          img:
            "http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png",
          keyword: "景点门票"
        },
        {
          id: "0002",
          img:
            "http://img1.qunarzz.com/piao/fusion/1804/ed/cf572be30fc32f02.png",
          keyword: "Q+精选"
        },
        {
          id: "0003",
          img:
            "http://img1.qunarzz.com/piao/fusion/1803/89/55083b0f1951f302.png",
          keyword: "游船游艇"
        },
        {
          id: "0004",
          img:
            "http://img1.qunarzz.com/piao/fusion/1803/6a/45f595250c73d102.png",
          keyword: "夏日玩水"
        },
        {
          id: "0005",
          img:
            "http://img1.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png",
          keyword: "动植物园"
        },
        {
          id: "0006",
          img:
            "http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png",
          keyword: "一日游"
        },
        {
          id: "0007",
          img:
            "http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png",
          keyword: "厦门必游"
        },
        {
          id: "0008",
          img:
            "http://img1.qunarzz.com/piao/fusion/1803/20/831d62d2e1c7be02.png",
          keyword: "名胜古迹"
        },
        {
          id: "0009",
          img:
            "http://img1.qunarzz.com/piao/fusion/1803/95/8246f27355943202.png",
          keyword: "游乐场"
        },
        {
          id: "00010",
          img:
            "http://img1.qunarzz.com/piao/fusion/1804/95/8d02011d149bdb02.png",
          keyword: "汽车票"
        }
      ]
    };
  },
  computed: {
    pages() {
      const pages = [];
      this.list.forEach((item, index) => {
        const page = Math.floor(index / 8);
        if (!pages[page]) {
          pages[page] = [];
        }
        pages[page].push(item);
      });
      return pages;
    }
  }
};
</script>
<style lang="stylus" scoped>
.icon >>> .swiper-wrapper {
  height: 0;
  padding-bottom: 50%;
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
