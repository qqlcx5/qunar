<template>
  <section>
    <homeheader></homeheader>
    <homeSwiper></homeSwiper>
    <homeIcon></homeIcon>
    <homeRecommend></homeRecommend>
  </section>
</template>
<script>
import homeheader from "../components/homeheader";
import homeSwiper from "../components/homeSwiper";
import homeIcon from "../components/homeIcon";
import homeRecommend from "../components/homeRecommend";
export default {
  components: {
    homeheader,
    homeSwiper,
    homeIcon,
    homeRecommend
  },
  data() {
    return {};
  }
};
</script>
<style scoped>
</style>
