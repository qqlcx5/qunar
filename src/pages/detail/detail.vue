<template>
  <article>
    <banner :bannerImg="bannerImg"
            :sightName="sightName"
            :gallaryImgs="gallaryImgs"></banner>
    <detailHeader @getlist="getlist"></detailHeader>
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
  data () {
    return {
      categoryList: [],
      bannerImg: "",
      gallaryImgs: [],
      sightName: ""
    };
  },
  methods: {
    //activated 触发请求，避免keep-alive影响
    getlist () {
      this.getDetail();
    },
    getDetail () {
      this.$axios.get("/detail").then(res => {
        // , {params: {id: this.$route.params.id}}
        console.log(res, 'res')
        let resp = res.data.data
        if (resp.ret && resp.data) {
          const data = resp.data
          console.log(data, '/detail');
          this.bannerImg = data.bannerImg;
          this.categoryList = data.categoryList;
          this.gallaryImgs = data.gallaryImgs;
          this.sightName = data.sightName;
        }
      });
    }
  },
  // mounted() {
  //   this.getDetail();
  // }
};
</script>
<style lang="stylus" scoped>
.content
  height 50rem
  background #eee
</style>
