<template>
  <div class="itemMusic">
    <div class="itemList">
      <div class="listNav">
        <div class="navLeft">
          <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-bofang2"></use>
        </svg>
        <p>
          <span>播放全部</span>
          <span>(共{{info.trackCount}}首)</span>
        </p>
        </div>
        <div class="navRight">
          <van-button round type="danger" class="vButton">+收藏({{info.subscribedCount}})</van-button>
        </div>
      </div>
      <div class="list">
        <div class="it" v-for='(it,index) in info.tracks' :key='index'>
          <div class="itLeft" @click="isPlay(index)">
            <span>{{index+1}}</span>
            <p>
              <span>{{it.name}}</span>
              <span>{{it.ar[0].name}}</span>
            </p>
          </div>
          <div class="itRight">
            <svg class="icon" aria-hidden="true" v-show='it.mv!=0'>
          <use xlink:href="#icon-bofang1"></use>
        </svg>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-qita"></use>
        </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    isPlay(index){
      this.$store.commit('updatedId',index)
      this.$store.commit('updatedTracks',this.info.tracks)
    }
  },
  props:['info']
}
</script>

<style lang='less' scoped>
  .itemMusic{
    width: 100%;
    margin-top: .4rem;
    background-color: #ffffff;
    border-top-right-radius: .4rem;
    border-top-left-radius: .4rem;
    .itemList{
      width: 100%;
      .listNav{
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: 1.1rem;
        .navLeft{
          width: 50%;
          display: flex;
          justify-content: space-around;
          align-items: center;
        }
        .navRight{
          .vButton{
            width: 2.8rem;
            font-size: .32rem;
          }
        }
      }
      .list{
        .it{
          display: flex;
          justify-content: space-between;
          align-items: center;
          height: 1rem;
          margin: .2rem;
          .itLeft{
            display: flex;
            align-items: center;
            p{
              margin-left: .6rem;
              display: flex;
              flex-direction: column;
              &>span:nth-child(1){
                font-weight: 600;
              }
              &>span:nth-child(2){
                color: #b5aaaa;
                font-size: 0.24rem;
              }
            }
          }
          .itRight{
            width: 30%;
            display: flex;
            justify-content: right;
            svg{
              margin:0 .2rem ;
            }
          }
        }

      }
    }
  }
</style>