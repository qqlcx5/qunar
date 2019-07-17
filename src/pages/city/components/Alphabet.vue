<template>
  <article>
    <ul class="list">
      <li class="item"
          v-for="key in cityList"
          :key="key"
          :ref="key"
          @click="handleLetter"
          @touchstart.prevent="handlestart"
          @touchmove="handlemove"
          @touchend="handleend">{{key}}</li>
    </ul>
  </article>
</template>
<script>
import eventBus from "./eventBus.js";
export default {
  props: {
    cities: Object
  },
  data () {
    return {
      handleStatus: false,
      moveY: 0,
      timer: null
    };
  },
  computed: {
    cityList () {
      const cityList = [];
      // console.log(this.cities);
      for (let i in this.cities) {
        cityList.push(i);
      }
      return cityList;
    }
  },
  updated () {
    this.moveY = this.$refs["A"][0].offsetTop;
  },
  methods: {
    handleLetter (target) {
      // console.log(target.target.innerText)
      eventBus.$emit("target", target.target.innerText);
    },
    handlestart () {
      this.handleStatus = true;
    },
    handlemove (e) {
      if (this.handleStatus) {
        if (this.timer) {
          clearTimeout(this.timer);
        }
        this.timer = setTimeout(() => {
          const touchY = e.touches[0].clientY - 79;
          console.log(e.touches[0].clientY, this.moveY)
          const index = Math.floor((touchY - this.moveY) / 20);
          if (index >= 0 && index < this.cityList.length) {
            console.log("index " + this.cityList[index]);
            eventBus.$emit("target", this.cityList[index]);
            // console.log("moveY " + moveY, "touchY " + touchY);
            // console.log("index " + index);
          }
        }, 16);
      }
    },
    handleend () {
      this.handleStatus = false;
    }
  }
};
</script>
<style lang="stylus" scoped>
.list
  position absolute
  top 1.58rem
  right 0
  bottom 0
  display flex
  flex-direction column
  justify-content center
  width 0.4rem
  .item
    line-height 0.4rem
    text-align center
    color #888
</style>
