<template>
  <div class="search">
    <div class="searchTop">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-arrowLeft"></use>
      </svg>
      <input
        type="text"
        placeholder="陈奕迅"
        class="searchIpt"
        v-model="keyWord"
        @keydown.enter="goSearch"
      />
    </div>
    <!-- 搜索历史 -->
    <div class="searchHistory">
      <span class="searchSpan">历史</span>
      <div class="history">
        <span v-for="(item, index) in list.keyWordList" :key="index">
          {{ item._value }}
        </span>
      </div>
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-shanchu"></use>
      </svg>
    </div>
  </div>
</template>

<script>
import { onMounted, reactive, ref } from "vue";
export default {
  setup(props) {
    let keyWord = ref("");
    let list = reactive({
      keyWordList: [],
    });
    onMounted(() => {
      list.keyWordList = JSON.parse(localStorage.getItem("keyWordList")) || [];
    });
    function goSearch() {
      if (keyWord !== "") {
        console.log(list.keyWordList);
        list.keyWordList.push(keyWord);
        if (list.keyWordList.length > 4) {
          list.keyWordList.pop();
        }
        console.log(list.keyWordList);
        if (list.keyWordList != {}) {
          localStorage.setItem("keyWordList", JSON.stringify(list.keyWordList));
        }
        
      }
    }
    return { list, goSearch, keyWord };
  },
  //   date() {
  //     return {
  //       keyWord: "",
  //       keyWordList: [],
  //     };
  //   },
  //   mounted() {
  //     console.log(JSON.parse(localStorage.getItem("keyWordList")));
  //     this.keyWordList = JSON.parse(localStorage.getItem("keyWordList"))||[];
  //   },
  //   methods: {
  //     goSearch() {
  //         console.log(this.keyWordList);
  //         this.keyWordList.unshift(this.keyWord);
  //         // 数组去重
  //         // this.keyWordList=new Set(this.keyWordList)
  //         localStorage.setItem("keyWordList", JSON.stringify(this.keyWordList));
  //     },
  //   },
};
</script>

<style lang='less' scoped>
.search {
  .searchTop {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 1rem;
    .searchIpt {
      width: 85%;
      height: 0.7rem;
      border: none;
      border-bottom: 1px solid #999;
    }
  }
  .searchHistory {
    height: 0.6rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .history {
      width: 80%;
      height: 0.6rem;
      display: flex;
      span {
        width: 25%;
        height: 0.6rem;
        background-color: #999;
        border-radius: 0.3rem;
        text-align: center;
        line-height: 0.6rem;
      }
    }
  }
}
</style>