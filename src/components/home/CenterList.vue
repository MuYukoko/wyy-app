<template>
  <div class="centerList">
    <div>
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-tuijian"></use>
      </svg>
      <span>每日推荐</span>
    </div>
    <div>
        <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-bofangqi-bofangxiaodianshi"></use>
      </svg>
      <span>每日推荐</span>
    </div>
    <div>
        <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-gedan"></use>
      </svg>
      <span>每日推荐</span>
    </div>
    <div>
        <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-paihangbang"></use>
      </svg>
      <span>每日推荐</span>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang='less' scoped>
    .centerList{
        display: flex;
        justify-content: space-around;
        width: 100%;
        height: 1.25rem;
        div{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            .icon{
                width: 1rem;
                height: 1rem;
            }
        }
    }
</style>