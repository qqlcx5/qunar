<template>
  <div class="header">
    <div>国内城市</div>
    <span class="iconfont arrow-left" @click="$router.go(-1)">&#xe624;</span>

  </div>
</template>
<script>
export default {
  props: {
    city: String,
    Object
  },
  data() {
    return {};
  }
};
</script>
<style lang="stylus" scoped>
.header {
  overflow: hidden;
  height: 0.86rem;
  line-height: 0.86rem;
  text-align: center;
  font-size: 0.32rem;
  background: #00bcd4;
  color: #fff;
  position: relative;

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
