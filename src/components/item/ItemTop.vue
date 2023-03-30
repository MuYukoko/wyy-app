<template>
  <div v-if="info.creator != null">
    <div class="itemTop">
      <div class="topLeft">
        <svg class="icon" aria-hidden="true" @click="$router.go(-1)">
          <use xlink:href="#icon-arrowLeft"></use>
        </svg>
        <span>歌单</span>
      </div>
      <div class="topRight">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-sousuo"></use>
        </svg>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-qita"></use>
        </svg>
      </div>
    </div>
    <img :src="info.coverImgUrl" class="bcgImg" />
    <div class="bigImg"></div>
    <div class="itemMiddle">
      <div class="itemImg">
        <img :src="info.coverImgUrl" />
        <div class="playCount">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-bofang-01"></use>
          </svg>
          {{ changeCount(info.playCount) }}
        </div>
      </div>
      <div class="itemInfo">
        <span>{{ info.name }}</span>
        <div class="user">
          <img :src="info.creator.backgroundUrl" alt="" />
          <span>{{ info.creator.nickname }}</span>
        </div>
        <span>{{ info.description }}</span>
      </div>
    </div>
    <div class="itemBottom">
      <div>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-duanxin"></use>
        </svg>
        <span>{{ info.commentCount }}</span>
      </div>
      <div>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-fenxiang-m"></use>
        </svg>
        <span>{{ info.shareCount }}</span>
      </div>
      <div>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-xiazai"></use>
        </svg>
        <span>下载</span>
      </div>
      <div>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-duoxuan-"></use>
        </svg>
        <span>多选</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup(props) {
    function changeCount(num) {
      if (num > 100000000) {
        return (num / 100000000).toFixed(1) + "亿";
      } else if (num > 10000) {
        return (num / 10000).toFixed(1) + "万";
      }
    }
    return { changeCount };
  },
  props: ["info"],
};
</script>

<style lang='less' scoped>
.itemTop {
  width: 100%;
  height: 1rem;
  display: flex;
  justify-content: space-between;
  .topLeft,
  .topRight {
    width: 30%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    margin-top: 0.2rem;
    span {
      font-size: 0.38rem;
      color: white;
    }
    .icon {
      fill: white;
    }
  }
}
.bcgImg {
  width: 100%;
  height: 6.5rem;
  filter: blur(30px);
  position: fixed;
  top: 0;
  z-index: -99;
}
.bigImg {
  width: 100%;
  height: 50%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  background-color: #ccc;
  opacity: 0.4;
}
.itemMiddle {
  display: flex;
  width: 100%;
  height: 3.6rem;
  padding: 0.4rem 0.2rem;
  .itemImg {
    width: 3rem;
    height: 3rem;
    position: relative;
    img {
      width: 100%;
      height: 100%;
      border-radius: 0.2rem;
    }
    span {
      margin-top: 0.15rem;
    }
    .playCount {
      position: absolute;
      top: 0;
      right: 0.1rem;
      display: flex;
      align-items: center;
      color: white;
      .icon {
        fill: white;
      }
    }
  }
  .itemInfo {
    width: 50%;
    height: 100%;
    margin-left: 0.2rem;
    font-family: "微软雅黑";
    & > span:nth-child(1) {
      color: white;
      font-size: 0.32rem;
    }
    .user {
      display: flex;
      align-items: center;
      margin: 0.3rem 0;
      img {
        width: 0.7rem;
        height: 0.7rem;
        border-radius: 0.7rem;
      }
      span {
        margin-left: 0.2rem;
        color: #ccc;
      }
    }
    & > span:nth-child(3) {
      display: block;
      color: #ccc;
      font-size: 0.24rem;
      height: 0.6rem;
      word-break: break-all;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      overflow: hidden;
    }
  }
}
.itemBottom {
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 1.25rem;
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
    .icon {
      width: 0.6rem;
      height: 0.6rem;
      fill: white;
    }
  }
}
</style>