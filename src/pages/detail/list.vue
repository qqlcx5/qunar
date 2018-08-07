<template>
  <article>
    <div class="item" v-for="(item,index) in list" :key="index">
      <div class="item-title">
        <span class="item-title-ticket"></span>
        {{item.title}}</div>
      <div v-if="item.children" class="item-children">
        <detail-list :list="item.children"></detail-list>
      </div>
    </div>
  </article>
</template>
<script>
export default {
  name: "DetailList",
  props: {
    list: Array
  },
  data() {
    return {};
  }
};
</script>
<style lang="stylus" scoped>
.item-title {
  line-height: 0.8rem;
  font-size: 0.32rem;
  padding: 0.1rem;

  .item-title-ticket {
    display: inline-block;
    position: relative;
    left: 0.1rem;
    top: 0.07rem;
    width: 0.36rem;
    height: 0.36rem;
    background: url('http://s.qunarzz.com/piao/image/touch/sight/detail.png') 0 -0.45rem no-repeat; // s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -.45rem no-repeat;
    margin-right: 0.1rem;
    background-size: 0.4rem 3rem;
  }
}

.item-children {
  padding: 0 0.4rem;
}
</style>
