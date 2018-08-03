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
