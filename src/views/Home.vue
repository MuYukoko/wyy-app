<template>
  <div class="home">
    <TopNav />
    <Swiper/>
    <CenterList/>
    <MusicList/>
  </div>
</template>

<script>
// @ is an alias to /src
import TopNav from "@/components/home/TopNav.vue";
import Swiper from "@/components/home/Swiper.vue";
import CenterList from '@/components/home/CenterList.vue';
import MusicList from '@/components/home/MusicList.vue';
export default {
  name: "HomeView",
  components: {
    TopNav,
    Swiper,
    CenterList,
    MusicList
  },
 
};
</script>
<style lang="less" scoped>

</style>