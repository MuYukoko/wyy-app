<template>
  <div class="swiper">
    <van-swipe :autoplay="3000" lazy-render :show-indicators='false'>
      <van-swipe-item v-for="(image,index) in banner.images" :key="index">
        <img :src="image.pic" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
import {getBanner} from "@/request";
import {onMounted,reactive} from 'vue'
export default {
  setup() {
    const banner = reactive({
        images:[]
    })
    onMounted(async() => {
      // 获取轮播图banner数据
        let result = await getBanner();
        banner.images=result.data.banners
    })
    return { banner };
  },
};
</script>

<style lang='less' scoped>
.swiper {
  width: 100%;
  height: 3.125rem;
  margin-top: 0.3125rem;
  padding: 0 0.3125rem;
  img {
    width: 100%;
    height: 2.5rem;
    border-radius: 0.2rem;
  }
}
</style>