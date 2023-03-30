<template>
  <div class="musicDetail">
    <img :src="track.al.picUrl" class="bcgImg">
    <div class="bigImg"></div>
    <div class="detailTop">
        <div class="topLeft">
            <svg class="icon" aria-hidden="true" @click="backHome">
          <use xlink:href="#icon-arrowLeft"></use>
            </svg>
            <p>
                <p><Vue3Marquee>
                    {{track.name}}</Vue3Marquee></p>
                <span>{{track.ar[0].name}}</span>
                </p>
        </div>
        <div class="topRight">
            <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-fenxiang-m"></use>
            </svg>
        </div>
    </div>
    <div class="detailMid" >
        <div v-if='!isLyricShow' @click="isLyricShow=!isLyricShow">
          <img src="@/assets/needle-ab.png" class="ab" :class="{ab_active:!state.isShow}">
        <img src="@/assets/cd.png" class="cd">
        <img :src="track.al.picUrl" class="ar" :class="{ar_active:!state.isShow}">
        </div>
        <div class="lyric" ref="lrc" v-else>
          <p v-for="(item,index) in lyric" :key="index" :class="{active:(state.currentTime*1000>item.time&&state.currentTime*1000<item.nextTime)}">{{item.lrc}}</p>
        </div>
    </div>
    <div class="detailSvg">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-xihuan"></use>
            </svg>
            <svg class="icon" aria-hidden="true" >
          <use xlink:href="#icon-xiazai1"></use>
            </svg>
            <svg class="icon" aria-hidden="true" >
          <use xlink:href="#icon-yinle"></use>
            </svg>
            <svg class="icon" aria-hidden="true" >
          <use xlink:href="#icon-pinglun"></use>
            </svg>
            <svg class="icon" aria-hidden="true" >
          <use xlink:href="#icon-gengduoxiao"></use>
            </svg>
    </div>
    <!-- 进度条 -->
    <input type="range" class="range" min='0' :max="duration" v-model="currentTime"/>
    <div class="detailBottom">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-24gl-repeat2"></use>
            </svg>
            <!-- 上一首 -->
            <svg class="icon" aria-hidden="true" @click="goPlay(-1)">
          <use xlink:href="#icon-48shangyishou"></use>
            </svg>
            <svg class="icon playSvg" aria-hidden="true" @click='play' v-if='state.isShow'>
          <use xlink:href="#icon-bofang1" ></use>
            </svg>
            <svg class="icon playSvg" aria-hidden="true" @click='play' v-else>
          <use xlink:href="#icon-bofang"></use>
            </svg>
            <!-- 下一首 -->
            <svg class="icon" aria-hidden="true" @click="goPlay(1)">
          <use xlink:href="#icon-49xiayishou"></use>
            </svg>
            <svg class="icon" aria-hidden="true" >
          <use xlink:href="#icon-fenxiang-m"></use>
            </svg> 
    </div>
  </div>
</template>

<script>
import { computed, onMounted, ref, watch} from "vue";
import { useStore } from "vuex";
import { Vue3Marquee } from "vue3-marquee";
import "vue3-marquee/dist/style.css";
export default {
  setup(props) {
    const { commit, state } = useStore();
    let isLyricShow = ref(false);
    function backHome() {
      commit("updatedBottomShow");
      isLyricShow.value=false
    }
    // 播放的当前时间
    let currentTime = computed(() => state.currentTime);
    const lyric = computed(() => {

      let arr = [];
      if (state.lyricList.lyric) {
        arr = state.lyricList.lyric.split(/[(\r\n)\r\n]+/).map((item, i) => {
          let min = item.slice(1, 3);
          let sec = item.slice(4, 6);
          let mill = item.slice(7, 10);
          let lrc = item.slice(11, item.length);
          let time =
            parseInt(min) * 60 * 1000 + parseInt(sec) * 1000 + parseInt(mill);
          if (isNaN(Number(mill))) {
            mill = item.slice(7, 9);
            lrc = item.slice(10, item.length);
          }
          return { min, sec, mill, lrc, time };
        });
      }
      arr.forEach((item, i) => {
        if (i === arr.length - 1) {
          item.nextTime = 0;
        } else {
          item.nextTime = arr[i + 1].time;
        }
      });
      console.log(arr);
      return arr;
    });
    const lrc = ref(null);
     watch(currentTime, (oldValue, newValue) => {
      let p = document.querySelector("p.active");
      if (p) {
            if (p.offsetTop > 200) {
                 lrc.value.scrollTop=p.offsetTop-200;
              }
      }
      
    });
    // 播放上下首
      function goPlay(index) {
        let id=state.id+index;
        if(id<0){
          console.log(state.tracks.length-1);
          id=state.tracks.length-2
        }else if(id>state.tracks.length-1){
          id=1
        }
        commit('updatedId',id)
      }
    return { backHome, state, isLyricShow, lyric, currentTime ,lrc,goPlay};
  },
  props: ["track", "play","duration"],
  components: {
    Vue3Marquee,
  },
};
</script>

<style lang='less' scoped>
.musicDetail {
  width: 100%;
  .icon {
    fill: white;
    width: 0.6rem;
    height: 0.6rem;
  }
  .bcgImg {
    position: absolute;
    top: 0;
    left: 0;
    z-index: -99;
    filter: blur(1.4rem);
  }
  .bigImg {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    background-color: #ccc;
    opacity: 0.4;
  }
  .detailTop {
    height: 1.2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .icon {
      fill: white;
    }
    .topLeft {
      width: 60%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0.2rem;
      p {
        display: flex;
        flex-direction: column;
        width: 70%;
        p {
          color: white;
        }
        span {
          font-size: 0.24rem;
        }
      }
    }
    .topRight {
      padding: 0.2rem;
    }
  }
  .detailMid {
    display: flex;
    flex-direction: column;
    position: relative;
    height: 9rem;
    .ab {
      position: absolute;
      left: 50%;
      top: -5%;
      width: 2rem;
      transform: rotate(-20deg);
      transition: all 2s;
    }
    .ab_active {
      position: absolute;
      left: 46%;
      top: -5%;
      width: 2rem;
      transform: rotate(0deg);
    }
    .cd {
      position: absolute;
      left: 16%;
      top: 15%;
      width: 5rem;
      z-index: -1;
    }
    .ar {
      position: absolute;
      top: 24.5%;
      left: 28.5%;
      width: 3.13rem;
      border-radius: 50%;
    }
    .ar_active {
      position: absolute;
      top: 25%;
      left: 28.5%;
      width: 3.14rem;
      border-radius: 50%;
      animation: ar_rotate 10s linear infinite;
    }
    @keyframes ar_rotate {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
    .lyric {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      height: 100%;
      overflow: scroll;
      margin-top: 0.5rem;
      scroll-behavior: smooth;
      p {
        color: rgb(190, 181, 181);
        margin-bottom: 0.5rem;
      }
      .active {
        color: white;
        font-size: 0.5rem;
      }
    }
  }
  .detailSvg {
    display: flex;
    justify-content: space-around;
    margin-bottom: 0.6rem;
  }
  .range {
    height: 0.09rem;
    width: 100%;
  }
  .detailBottom {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 1.7rem;
    .playSvg {
      width: 1.1rem;
      height: 1.1rem;
    }
  }
}
</style>