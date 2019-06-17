<template>
  <section>
    <cityHeader></cityHeader>
    <citySearch :cities="cities"></citySearch>
    <cityList :cities="cities" :hotCities="hotCities"></cityList>
    <Alphabet :cities="cities" ></Alphabet>
  </section>
</template>
<script>
import cityHeader from "./components/header";
import citySearch from "./components/search";
import cityList from "./components/list";
import Alphabet from "./components/Alphabet";
export default {
  components: {
    cityHeader,
    citySearch,
    cityList,
    Alphabet
  },
  data() {
    return {
      cities: {},
      hotCities: []
    };
  },
  methods: {
    getHomeInfo() {
      this.$axios.get("/city").then(res => {
        const data = res.data.data.data;
        // console.log(data.cities);
        this.cities = data.cities;
        this.hotCities = data.hotCities;
      });
    }
  },
  mounted() {
    this.getHomeInfo();
  }
};
</script>
<style lang="stylus" scoped>
</style>
