<template>
  <div class='musicItem'>
    <ItemTop :info='itemInfo.info'/>
    <ItemMusic :info='itemInfo.info'/>
    <!-- <itemBottom/> -->
  </div>
</template>
<script>
import ItemTop from '@/components/item/ItemTop'
import ItemMusic from '@/components/item/ItemMusic'
// import itemBottom from '@/components/item/ItemBottom'
import {onMounted, reactive} from 'vue';
import {getMusicItem} from '@/request';
import {useRoute} from 'vue-router'
import {useStore} from 'vuex'
export default {
    setup() {
        const itemInfo=reactive({
          info:JSON.parse(localStorage.getItem('info'))||{}
        })
        onMounted(async()=>{
          console.log(itemInfo.info.tracks,111);
            const {id}= useRoute().query;
            let result=await getMusicItem(id);
            itemInfo.info=result.data.playlist
            localStorage.setItem('info',JSON.stringify(result.data.playlist))
        })
        const store=useStore();
            store.commit('updatedTracks',itemInfo.info.tracks)
        return {itemInfo}
    },
    components:{
        ItemTop,
        ItemMusic,
        // itemBottom
    }
}
</script>

<style lang='less' scoped>
    
</style>