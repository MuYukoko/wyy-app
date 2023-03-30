<template>
  <div class="TopNav">
    <svg class="icon" aria-hidden="true">
    <use xlink:href="#icon-qita"></use>
    </svg>
    <div class="topList">
        <span @click="this.$router.push('/userInfo')">我的</span>
        <span class="active">发现</span>
        <span>云村</span>
        <span>视频</span>
    </div>
    <svg class="icon" aria-hidden="true" @click="$router.push('/search')">
    <use xlink:href="#icon-sousuo"></use>
    </svg>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
    .TopNav{
        display: flex;
        width: 100%;
        height: .75rem;
        justify-content: space-between;
        align-items: center;
        .topList{
            display: flex;
            width: 70%;
            justify-content: space-around;
            align-content: center;
            span{
                font-size: .375rem;
            }
            .active{
                    font-weight: 600;
                }
        }
    }
</style>