<template>
  <div class="search">
    <input type="text" v-model="keyWord" class="search-input" placeholder="输入城市名或者拼音">
    <div class="search-content" ref="search" v-show="keyWord.length">
      <ul>
        <li class=" item " v-for="item in list " :key="item.id" @click="handleCityClick(item.name)">{{item.name}}</li>
        <li class="item " v-show="!list.length ">搜索没有找到匹配数据</li>
      </ul>
    </div>
  </div>
</template>
<script>
import BScroll from "better-scroll";
import { mapMutations } from "vuex";
export default {
  props: {
    cities: [String, Object]
  },
  data() {
    return {
      keyWord: "",
      timer: null,
      list: []
    };
  },
  methods: {
    // handleCityClick(e) {
    //   this.$store.commit("handleCity", e);
    //   this.$router.push("/");
    // },
    handleCityClick(city) {
      this.handleCity(city);
      this.keyWord = "";
      this.$router.push("/");
    },
    ...mapMutations(["handleCity"])
  },
  watch: {
    keyWord() {
      if (this.keyWord) {
        clearTimeout(this.timer);
      }
      this.timer = setTimeout(() => {
        const result = [];
        for (let i in this.cities) {
          this.cities[i].filter(element => {
            if (
              element.spell.indexOf(this.keyWord) > -1 ||
              element.name.indexOf(this.keyWord) > -1
            ) {
              console.log("result " + element);
              result.push(element);
            }
            this.list = result;
          });
        }
      }, 100);
    }
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.search);
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

.search-content {
  position: absolute;
  overflow: hidden;
  top: 1.58rem;
  right: 0;
  left: 0;
  bottom: 0;
  background: #eee;
  z-index: 1;

  .item {
    line-height: 0.64rem;
    padding-left: 0.2rem;
    border-top: 0.02rem solid #ccc;
  }
}
</style>
