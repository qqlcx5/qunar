<template>
  <div>
    <keep-alive exclude="detail">
      <router-view/>
    </keep-alive>

  </div>
</template>
<script>
export default {
  name: "App",
  data() {
    return {};
  }
};
</script>
<style scoped>
</style>
