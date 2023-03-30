<template>
  <div class="MusicList">
    <div class="topNav">
      <h2>发现好歌单</h2>
      <span>查看更多</span>
    </div>
    <div class="musicList">
      <van-swipe
        :show-indicators="false"
        class="swipe"
        :width="120"
        :loop="false"
      >
        <van-swipe-item
          v-for="(music, index) in list.musicInfo"
          :key="index"
          class="item"
        >
          <router-link :to="{
            path:'/musicInfo',
            query:{
              id:music.id
            }
          }">
            <img :src="music.coverImgUrl" />
            <span>{{ music.name }}</span>
            <div class="playCount">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-bofang-01"></use>
              </svg>
              {{ changeCount(music.playCount) }}
            </div>
          </router-link>
        </van-swipe-item>
      </van-swipe>
    </div>
  </div>
</template>

<script>
import { onMounted, reactive } from "vue";
import { getMusicList } from "../../request/index";
export default {
  setup() {
    const list = reactive({
      musicInfo: [],
    });
    onMounted(async () => {
      let result = await getMusicList();
      list.musicInfo = result.data.playlists;
      // list.musicInfo=list.musicInfo.slice(1,9);
      console.log(result);
      console.log(list.musicInfo[1].coverImgUrl);
    });
    function changeCount(num) {
      if (num > 100000000) {
        return (num / 100000000).toFixed(1) + "亿";
      } else if (num > 10000) {
        return (num / 10000).toFixed(1) + "万";
      }
    }
    return { list, changeCount };
  },
};
</script>

<style lang='less' scoped>
.MusicList {
  width: 100%;
  margin-top: 0.8125rem;
  .topNav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.4rem;
    width: 100%;
    height: 0.875rem;
    padding: 0 0.3rem;
    span {
      font-size: 0.375rem;
    }
  }
  .musicList {
    width: 100%;
    height: 4.2rem;
    .swipe {
      .item {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: relative;
        margin: 0 0.2rem;
        img {
          width: 2.5rem;
          height: 2.5rem;
          border-radius: 0.2rem;
        }
        span {
          margin-top: 0.15rem;
        }
        .playCount {
          position: absolute;
          top: 0;
          right: .1rem;
          display: flex;
          align-items: center;
          color:white;
          .icon{
            fill: white;
          }  
        }
      }
    }
  }
}
</style>