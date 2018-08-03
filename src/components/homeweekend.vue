<template>
  <article>
    <div class="recommend-title">周末去哪儿</div>
    <ul>
      <li class=" item border-bottom" v-for="item in recommendList" :key="item.id">
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
  data() {
    return {
      recommendList: [
        {
          id: "0001",
          imgUrl:
            "http://img1.qunarzz.com/sight/source/1606/85/c6b6bad1b977e.jpg_r_640x214_5c638941.jpg",
          title: "故宫",
          desc:
            "北京故宫是中国明清两代的皇家宫殿，旧称为紫禁城，位于北京中轴线的中心，是中国古代宫廷建筑之精华。"
        },
        {
          id: "0002",
          imgUrl:
            "http://img1.qunarzz.com/sight/source/1505/9e/21df651e19af5d.jpg_r_640x214_3ea5bb38.jpg",
          title: "故宫故宫故宫故宫故宫故宫故宫故宫故宫故宫故宫故宫故宫故宫",
          desc:
            "北京故宫是中国明清两代的皇家宫殿，旧称为紫禁城，位于北京中轴线的中心，是中国古代宫廷建筑之精华。"
        },
        {
          id: "0003",
          imgUrl:
            "http://img1.qunarzz.com/sight/source/1505/9e/21df651e19af5d.jpg_r_640x214_3ea5bb38.jpg",
          title: "故宫",
          desc:
            "北京故宫是中国明清两代的皇家宫殿，旧称为紫禁城，位于北京中轴线的中心，是中国古代宫廷建筑之精华。"
        }
      ]
    };
  }
};
</script>
<style lang="stylus" scoped>
@import '~static/mixins.styl';

.recommend-title {
  line-height: 0.8rem;
  background: #eeeeee;
  text-indent: 0.2rem;
  margin-top: 0.1rem;
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
