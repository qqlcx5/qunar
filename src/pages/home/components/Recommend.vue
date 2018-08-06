<template>
  <article>
    <div class="recommend-title">热销推荐</div>
    <ul>
      <router-link tag="li" class="item border-bottom" v-for="item in recommendList" :key="item.id" :to="{name:'detail',params:{id:item.id}}">
        <img :src="item.imgUrl" alt="">
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-btn">查看详情</button>
        </div>
      </router-link>

    </ul>
  </article>
</template>
<script>
export default {
  props: {
    recommendList: Array
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
  margin-top: 0.1rem;
}

.item {
  display: flex;
  height: 1.9rem;
  overflow: hidden;

  img {
    width: 1.7rem;
    height: 1.7rem;
    padding: 0.1rem;
  }

  .item-info {
    flex: 1;
    padding: 0.1rem;
    min-width: 0;

    .item-title {
      line-height: 0.64rem;
      font-size: 0.32rem;
      ellipsis();
    }

    .item-desc {
      color: #666;
      line-height: 0.4rem;
      ellipsis();
    }

    .item-btn {
      line-height: 0.44rem;
      margin-top: 0.16rem;
      background: #ff9300;
      padding: 0 0.2rem;
      border-radius: 0.06rem;
      color: #fff;
    }
  }
}
</style>
