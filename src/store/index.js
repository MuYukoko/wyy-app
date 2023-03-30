import { createStore } from 'vuex'
import{getMusicLyric} from '@/request'
export default createStore({
  state: {
    tracks:JSON.parse(localStorage.getItem('info')).tracks||[{ //播放列表
      al: {
        id: 89039055,
        name: "雨爱抖音版",
        pic: 109951164966568500,
        picUrl: "https://p1.music.126.net/2f6UgY8Jc0Dy6jufMdIZeQ==/109951164966568495.jpg",
        pic_str: "109951164966568495"
      },
      id: 1446137141,
      name: "雨爱（抖音版）",
      ar:[{name: "灏灏灏仔"}]
    }],
    id:0,
    // 控制播放按钮
    isShow:true,
    showBottom:false,
    lyricList:{},
    // 播放时间
    currentTime:'',
    token:localStorage.getItem('token') ||'' ,
    isLogin:false,
    user:{}
  },
  getters: {
  },
  mutations: {
    updatedTracks(state,value){
      state.tracks=value
    },
    updatedShow(state,value){
      state.isShow=value
    },
    updatedId(state,id){
      state.id=id
    },
    updatedBottomShow(state){
      state.showBottom=!state.showBottom
    },
    updatedLyric(state,value){
      state.lyricList=value
    },
    updatedCurrentTime(state,value){
      state.currentTime=value
    },
    pushPlayList(state,value){
      state.tracks.push(value)
    },
    updateIsLogin:function(state,value){
      state.isLogin=true
    },
    updateToken:function(state,value){
      state.token=value
      localStorage.setItem('token',state.token)
    },
    updateUser:function(state,value){
      state.user=value
    }
  },
  actions: {
    async getLyric({commit},id){
      let result=await getMusicLyric(id);
      commit('updatedLyric',result.data.lrc)
    }
  },
  modules: {
  }
})
