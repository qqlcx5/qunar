<template>
  <div class="header">
    <div class="header-left">
      <span class="iconfont arrow-left">&#xe624;</span>
    </div>
    <div class="header-input">
      <span class="iconfont search-icon">&#xe632;</span>
      <input type="text" placeholder="输入城市/景点/游玩主题">
    </div>
    <div class="header-right" @click="$router.push({name:'city'})">
      {{this.city}}
      <span class="iconfont arrow-bottom">&#xe64a;</span>
    </div>
  </div>
</template>
<script>
import { mapState, mapGetters } from "vuex";
export default {
  data() {
    return {
    
    };
  },
  computed: {
    ...mapState(["city"])
    //  ...mapGetters(['doubleCity'])
  }
};
</script>
<style lang="stylus" scoped>
.header {
  height: 0.86rem;
  width: 100%;
  background: #00bcd4;
  display: flex;
  color: #fff;
  align-items: center;

  .header-left {
    width: 0.64rem;
    text-align: center;

    .arrow-left {
      font-size: 0.4rem;
    }
  }

  .header-input {
    flex: 1;
    height: 0.64rem;
    background: #eee;
    border-radius: 0.1rem;
    margin-left: 0.2rem;
    overflow: hidden;
    position: relative;
    color: #ccc;

    .search-icon {
      position: absolute;
      left: 0.2rem;
      line-height: 0.64rem;
    }

    input {
      height: 100%;
      width: 100%;
      padding-left: 0.6rem;
    }

    input::-webkit-input-placeholder {
      color: #ccc;
    }
  }

  .header-right {
    text-align: center;
    min-width: 1.04rem;
    padding: 0 0.1rem;

    .arrow-bottom {
      font-size: 0.24rem;
    }
  }
}
</style>
