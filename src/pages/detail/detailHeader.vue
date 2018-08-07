<template>
  <article>
    <div class="header-abs" v-show="showAbc">
      <span class="iconfont arrow-left" @click="$router.go(-1)">&#xe624;</span>
    </div>
    <div class="header-fix" v-show="!showAbc" :style="opacityStyle">
      <div>景点详情</div>
      <span class="iconfont arrow-left" @click="$router.go(-1)">&#xe624;</span>
    </div>

  </article>

</template>
<script>
export default {
  data() {
    return {
      showAbc: true,
      opacityStyle: {
        opacity: 0
      }
    };
  },
  methods: {
    handleScroll() {
      //console.log("scroll");
      //console.log(document.documentElement.scrollTop);
      const top = document.documentElement.scrollTop;
      if (top > 60) {
        let opacity = top / 140;
        opacity = opacity > 1 ? 1 : opacity;
        this.opacityStyle = {
          opacity
        };
        this.showAbc = false;
      } else {
        this.showAbc = true;
      }
    }
  },
  activated() {
    //console.log("activated" + "scroll");
    window.addEventListener("scroll", this.handleScroll);
    this.$emit("getlist")
  },
  deactivated() {
    window.removeEventListener("scroll", this.handleScroll);
  }
};
</script>
<style lang="stylus" scoped>
.header-abs {
  position: absolute;
  left: 0.2rem;
  top: 0.2rem;
  width: 0.8rem;
  height: 0.8rem;
  line-height: 0.8rem;
  background: rgba(0, 0, 0, 0.7);
  border-radius: 0.4rem;
  text-align: center;
  color: #fff;
}

.header-fix {
  z-index: 9;
  height: 0.86rem;
  line-height: 0.86rem;
  text-align: center;
  font-size: 0.32rem;
  background: #00bcd4;
  color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  overflow: hidden;

  .arrow-left {
    width: 0.64rem;
    text-align: center;
    position: absolute;
    top: 0;
    left: 0;
    font-size: 0.4rem;
  }
}
</style>
