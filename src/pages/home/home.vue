<template>
  <section>
    <homeheader></homeheader>
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
import { mapState } from "vuex";
export default {
  components: {
    homeheader,
    homeSwiper,
    homeIcon,
    homeRecommend,
    homeweekend
  },
  data () {
    return {
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: [],
      lastCity: "" //keepalive 临时缓存
    };
  },
  computed: {
    ...mapState(["city"])
  },
  methods: {
    getHomeInfo () {
      this.$axios.get("/index").then(res => {
        console.log(res.data.data.data);
        const data = res.data.data.data
        this.swiperList = data.swiperList;
        this.iconList = data.iconList;
        this.recommendList = data.recommendList;
        this.weekendList = data.weekendList;
      });
    }
  },
  mounted () {
    this.lastCity = this.city;
    this.getHomeInfo();
  },
  activated () {
    if (this.lastCity !== this.city) {
      this.lastCity = this.city;
      this.getHomeInfo();
    }
  }
};
</script>
<style scoped>
</style>
