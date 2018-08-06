<template>
  <article>
    <div class="recommend-title">周末去哪儿</div>
    <ul>
      <li class=" item border-bottom" v-for="item in weekendList" :key="item.id">
        <div class="item-img"><img :src="item.imgUrl" alt=""></div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </article>
</template>
<script>
export default {
  props: {
    weekendList: Array
  },
  data() {
    return {};
  }
};
</script>
<style lang="stylus" scoped>
@import '~styl/mixins.styl';

.recommend-title {
  line-height: 0.8rem;
  background: #eeeeee;
  text-indent: 0.2rem;
}

.item {
  .item-img {
    height: 0;
    padding-bottom: 33.9%;
    overflow: hidden;

    img {
      width: 100%;
    }
  }

  .item-info {
    flex: 1;
    padding: 0.1rem;
    min-width: 0;

    .item-title {
      line-height: 0.54rem;
      font-size: 0.32rem;
      ellipsis();
    }

    .item-desc {
      color: #999;
      line-height: 0.4rem;
      ellipsis();
    }
  }
}
</style>
