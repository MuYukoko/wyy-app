<template>
  <div>
    <router-view />
    <itemBottom/>
  </div>
</template>
<script>
import itemBottom from '@/components/item/ItemBottom'
export default {

  components:{
    itemBottom
  }
}
</script>
<style lang="less">
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  .icon{
    width: .5rem;
    height: .5rem;
  }
  a{
    text-decoration: none;
    color: #000;
  }
</style>
