<template>
  <article>
    <ul class="list">
      <li class="item" v-for="(city,key) of cities" :key="key" @click="handleLetter(key)">{{key}}</li>
    </ul>
  </article>
</template>
<script>
import eventBus from './eventBus.js'
export default {
  props: {
    cities: Object
  },
  data() {
    return {};
  },
  methods: {
    handleLetter(target) {
      // console.log(e.target.innerText)
      eventBus.$emit("target", target)
    }
  }
};
</script>
<style lang="stylus" scoped>
.list {
  position: absolute;
  top: 1.58rem;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 0.4rem;

  .item {
    line-height: 0.4rem;
    text-align: center;
    color: #888;
  }
}
</style>
