<template>
  <article>

    <div class="banner" @click="handleShow">
      <img class="banner-img" :src="bannerImg" alt="">
      <div class="banner-info">
        <div class="banner-title">{{sightName}}</div>
        <div class="banner-number">
          <span class="iconfont arrow-bottom">&#59026;</span>
          39</div>
      </div>

    </div>

    <fade-animate>
      <gallary v-show="showGallary" @close="closeShow" :imgs="gallaryImgs"></gallary>
    </fade-animate>
  </article>

</template>
<script>
import gallary from "common/gallary/gallary";
import FadeAnimate from "common/fade/fadeAnimate";
export default {
  components: {
    gallary,
    FadeAnimate
  },
  props: {
    bannerImg: [Array, String],
    gallaryImgs: Array,
    sightName: String
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
    closeShow() {
      this.showGallary = false;
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
