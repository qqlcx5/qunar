<template>
  <section>
    <cityHeader></cityHeader>
    <citySearch></citySearch>
  </section>
</template>
<script>
import cityHeader from "./components/header.vue";
import citySearch from "./components/search.vue";
export default {
  components: {
    cityHeader,
    citySearch
  },
  data() {
    return {};
  }
};
</script>
<style lang="stylus" scoped>
</style>
