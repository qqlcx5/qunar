<template>
  <section>
    <homeheader></homeheader>
    <homeSwiper></homeSwiper>
    <homeIcon></homeIcon>
    <homeRecommend></homeRecommend>
    <homeweekend></homeweekend>
  </section>
</template>
<script>
import homeheader from "../components/homeheader";
import homeSwiper from "../components/homeSwiper";
import homeIcon from "../components/homeIcon";
import homeRecommend from "../components/homeRecommend";
import homeweekend from "../components/homeweekend";
export default {
  components: {
    homeheader,
    homeSwiper,
    homeIcon,
    homeRecommend,
    homeweekend
  },
  data() {
    return {};
  }
};
</script>
<style scoped>
</style>
