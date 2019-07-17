<template>
  <div class="list"
       ref="wrapper">
    <div>
      <article class="area">
        <div class="title border-topbottom">当前城市</div>

        <div class="button-list">
          <div class="button-warpper">
            <div class="button">{{this.currentCity}}</div>
          </div>
        </div>
      </article>
      <article class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div class="button-warpper"
               v-for="item in hotCities"
               :key="item.id"
               @click="handleCityClick(item.name)">
            <div class="button">{{item.name}}</div>
          </div>
        </div>
      </article>
      <article class="area"
               v-for="(list,key) in cities"
               :key="key"
               :ref="key">
        <div class="title border-topbottom">{{key}}</div>
        <div class="item-list"
             v-for="item in list"
             :key="item.id"
             @click="handleCityClick(item.name)">
          <div class="item item-bottom">{{item.name}}</div>
        </div>
      </article>

    </div>
  </div>
</template>
<script>
import eventBus from "./eventBus.js";
import BScroll from "better-scroll";
import { mapState, mapMutations } from "vuex";
export default {
  props: {
    cities: Object,
    hotCities: Array
  },
  data () {
    return {
      letter: ""
    };
  },
  computed: {
    ...mapState({
      currentCity: "city"
    })
  },
  methods: {
    handleCityClick (city) {
      // this.$store.dispatch("handleCity", city);
      // this.$store.commit("handleCity", city);
      this.handleCity(city);
      this.$router.push("/");
    },
    ...mapMutations(["handleCity"])
  },
  watch: {
    letter () {
      if (this.letter) {
        const element = this.$refs[this.letter][0];
        console.log(this.$refs[this.letter][0]);
        this.scroll.scrollToElement(element);
      }
    }
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.wrapper);
  },
  updated () {
    eventBus.$on("target", item => {
      console.log("list " + item);

      this.letter = item;
    });
  }
};
</script>
<style lang="stylus" scoped>
.border-topbottom
  &:before
    border-color #ccc
  &:after
    border-color #ccc
.list
  position absolute
  top 1.58rem
  bottom 0
  left 0
  right 0
  overflow hidden
.title
  line-height 0.56rem
  background #ddd
  padding-left 0.2rem
  font-size 0.26rem
.button-list
  overflow hidden
  padding 0.1rem 0.6rem 0.1rem 0.1rem
  .button-warpper
    float left
    width 33.33%
    .button
      margin 0.1rem
      padding 0.1rem 0
      text-align center
      border 0.02rem solid #ccc
      border-radius 0.06rem
.item-list
  .item
    line-height 0.64rem
    padding-left 0.2rem
    border-top 0.02rem solid #ccc
</style>
