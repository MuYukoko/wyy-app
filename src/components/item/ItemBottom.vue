<template>
    <div class="listBottom" v-if='track'>
        <div class="buttomLeft" @click="changeShow">
          <img :src="track.al.picUrl" alt="">
          <p>
            <span>{{track.name}}</span>
            <span>横滑切换上下首哦</span>
          </p>
        </div>
        <div class="buttomRight">
          <svg class="icon" aria-hidden="true" v-if="$store.state.isShow" @click="play">
          <use xlink:href="#icon-bofang2"></use>
        </svg>
          <svg class="icon" aria-hidden="true" v-else @click="play">
          <use xlink:href="#icon-bofang"></use>
        </svg>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-fuxuananniu"></use>
        </svg>
        </div>
        <audio :src="`https://music.163.com/song/media/outer/url?id=${state.tracks[id].id}.mp3`" ref="audio" @timeupdate="timeupdate" @ended="ended(state.id+1)"></audio>
    </div>
    <van-popup :show="showBottom" position="bottom" :style="{ height: '100%' }"><MusicDetail :track='track' :play='play' :duration='duration'/></van-popup>
</template>

<script>
import {computed, onMounted,onUpdated} from 'vue';
import {useStore} from 'vuex';
import MusicDetail from '@/components/item/MusicDetail'
export default {
    setup(props) {
        const {state,commit,dispatch}=useStore();
        const id = computed(()=>state.id)
        const track=computed(()=>state.tracks[id.value])
        const showBottom=computed(()=>state.showBottom)
        function changeShow(){
          // showBottom.value=true;
          commit('updatedBottomShow')
        }
        onMounted(()=>{
          dispatch('getLyric',track.value.id)
        })
        onUpdated(() => {
          dispatch('getLyric',track.value.id)
        })
        return {track,state,id,changeShow,showBottom}
    },
    components:{
      MusicDetail
    },
    methods: {
      play(){
        if(this.$refs.audio.paused){
          this.$refs.audio.play()
          this.$store.commit('updatedShow',false)
        }else{
          this.$refs.audio.pause()
          this.$store.commit('updatedShow',true)
        }
      },
      // 歌曲时间
        timeupdate(){
          this.$store.commit('updatedCurrentTime',this.$refs.audio.currentTime);
        },
        // 播完播放下一首
        ended(index){
          this.$store.commit('updatedId',index)
        }
    },
    watch:{
      track:{
        deep:true,
        handler(){
          this.$refs.audio.autoplay=true;
          if(this.$refs.audio.paused){
          this.$store.commit('updatedShow',false)
         }
 
        }
      }
    },
    computed:{
      duration(){
        return this.$refs.audio.duration
      }
    }
}
</script>

<style lang='less' scoped>
  .listBottom{
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 1.4rem;
    background-color: white;
    border-top: .02rem solid;
    .buttomLeft{
      display: flex;
      justify-content: space-around;
      align-items: center;
      width: 60%;
      img{
        width: 1rem;
        height: 1rem;
        border-radius: 1rem;
      }
      p{
        display: flex;
        flex-direction: column;
      }
    }
    .buttomRight{
      width: 25%;
      display: flex;
      justify-content: space-around;
      .icon{
        width: .6rem;
        height: .6rem;
      }
    }
  }  
</style>