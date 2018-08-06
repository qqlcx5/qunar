<template>
  <article>
    <div class="banner" @click="handleShow">
      <img class="banner-img" src="//img1.qunarzz.com/sight/p0/1805/7d/7dca9c37a87479eba3.img.jpg_600x330_77f48209.jpg" alt="">
      <div class="banner-info">
        <div class="banner-title">世茂云上厦门观光厅</div>
        <div class="banner-number">
          <span class="iconfont arrow-bottom">&#59026;</span>
          39</div>
      </div>
    </div>
    <gallary v-show="showGallary" @close="closeShow"></gallary>
  </article>

</template>
<script>
import gallary from "common/gallary/gallary";
export default {
  components: {
    gallary
  },

  data() {
    return {
      showGallary: false
    };
  },
  methods: {
    handleShow() {
      this.showGallary = true;
    },
    closeShow(e) {
      this.showGallary = e;
    }
  }
};
</script>
<style lang="stylus" scoped>
.banner {
  height: 0;
  padding-bottom: 55%;
  overflow: hidden;
  position: relative;

  .banner-img {
    width: 100%;
  }

  .banner-info {
    display: flex;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    line-height: 0.6rem;
    color: #fff;
    background-image: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8));

    .banner-title {
      flex: 1;
      font-size: 0.32rem;
      padding: 0 0.2rem;
    }

    .banner-number {
      height: 0.32rem;
      line-height: 0.32rem;
      padding: 0 0.4rem;
      margin-top: 0.14rem;
      font-size: 0.24rem;
      border-radius: 0.2rem;
      background: rgba(0, 0, 0, 0.8);
    }
  }
}
</style>
