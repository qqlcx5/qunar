<template>
  <section>
    <homeheader :city='city'></homeheader>
    <homeSwiper :swiperList="swiperList"></homeSwiper>
    <homeIcon :iconList="iconList"></homeIcon>
    <homeRecommend :recommendList="recommendList"></homeRecommend>
    <homeweekend :weekendList="weekendList"></homeweekend>
  </section>
</template>
<script>
import homeheader from "./components/header";
import homeSwiper from "./components/Swiper";
import homeIcon from "./components/Icon";
import homeRecommend from "./components/Recommend";
import homeweekend from "./components/weekend";
export default {
  components: {
    homeheader,
    homeSwiper,
    homeIcon,
    homeRecommend,
    homeweekend
  },
  data() {
    return {
      city: "",
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: []
    };
  },
  methods: {
    getHomeInfo() {
      this.$axios.get("/api/index.json").then(res => {
        const data = res.data.data;
        console.log(data);
        this.city = data.city;
        this.swiperList = data.swiperList;
        this.iconList = data.iconList;
        this.recommendList = data.recommendList;
        this.weekendList = data.weekendList;
      });
    }
  },
  mounted() {
    this.getHomeInfo();
  }
};
</script>
<style scoped>
</style>
