<template>
  <article>
    <banner :bannerImg="bannerImg" :sightName="sightName" :gallaryImgs="gallaryImgs"></banner>
    <detailHeader></detailHeader>
    <div class="content">
      <detailList :list="categoryList"></detailList>
    </div>
  </article>
</template>
<script>
import banner from "./banner";
import detailHeader from "./detailHeader.vue";
import detailList from "./list.vue";
export default {
  name: "detail",
  components: {
    banner,
    detailHeader,
    detailList
  },
  data() {
    return {
      categoryList: [],
      bannerImg: "",
      gallaryImgs: [],
      sightName: ""
    };
  },
  methods: {
    getDetail() {
      this.$axios
        .get("/qunar/detail", {
          params: {
            id: this.$route.params.id
          }
        })
        .then(res => {
          res = res.data;
          if (res.ret && res.data) {
            const data = res.data;
            // console.log(data);
            this.bannerImg = data.bannerImg;
            this.categoryList = data.categoryList;
            this.gallaryImgs = data.gallaryImgs;
            this.sightName = data.sightName;
          }
        });
    }
  },
  mounted() {
    this.getDetail();
  }
};
</script>
<style lang="stylus" scoped>
</style>
