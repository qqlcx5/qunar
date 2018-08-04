<template>
  <div class="search">
    <input type="text" class="search-input" placeholder="输入城市名或者拼音">
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
.search {
  height: 0.72rem;
  padding: 0 0.1rem;
  background: #00bcd4;

  .search-input {
    box-sizing: border-box;
    color: #777;
    width: 100%;
    height: 0.62rem;
    line-height: 0.62rem;
    text-align: center;
    padding: 0 0.2rem;
    border-radius: 0.06rem;
  }
}
</style>
