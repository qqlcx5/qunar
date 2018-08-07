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
      categoryList: [
        {
          title: "故宫第一城",
          children: [
            {
              title: "故宫第二城"
            },
            {
              title: "故宫第二城紫荆城",
              children: [
                {
                  title: "故宫第二城紫荆城小巓",
                  children: [
                    {
                      title: "故宫第二城紫荆城4"
                    },
                    {
                      title: "故宫第二城紫荆城4"
                    },
                    {
                      title: "故宫第二城紫荆城4"
                    }
                  ]
                }
              ]
            },
            {
              title: "故宫第二城博物馆"
            }
          ]
        },
        {
          title: "故宫第一城",
          children: [
            {
              title: "故宫第二城"
            },
            {
              title: "故宫第二城紫荆城",
              children: [
                {
                  title: "故宫第二城紫荆城小巓",
                  children: [
                    {
                      title: "故宫第二城紫荆城4"
                    },
                    {
                      title: "故宫第二城紫荆城4"
                    },
                    {
                      title: "故宫第二城紫荆城4"
                    }
                  ]
                }
              ]
            },
            {
              title: "故宫第二城博物馆"
            }
          ]
        },
        {
          title: "美国第一城"
        }
      ],
      bannerImg: "",
      gallaryImgs: [],
      sightName: ""
    };
  },
  methods: {
    getDetail() {
      this.$axios
        .get("/api/detail.json", {
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
