import api from './api'
// 获取轮播图信息
export const getBanner=()=>{
    return api({
        url:'/banner?type=2',
        method:'get'
    })
}
// 获取推荐歌单信息
export const getMusicList=()=>{
    return api({
        url:'/top/playlist?limit=10',
        method:'get'
    })
}
// 获取推荐歌单详情
export const getMusicItem=(id)=>{
    return api({
        url: `/playlist/detail?id=${id}`,
        method:'get'
    })
}
// /获取歌词
export const getMusicLyric=(id)=>{
    return api({
        url:`/lyric?id=${id}`,
        method:'get'
    })
}
// 获取搜索歌曲
// /search?keywords= 海阔天空
export const getSearchMusic=(index)=>{
    return api({
        url:`/search?keywords=${index}`,
        method:'get'
    })
}
// 登录
export const reqLogin=({phone,password})=>{
    return api({
        url:`/login/cellphone?=${phone}&password=${password}`,
        method:'get'
    })
}
export const getLoginUser=(data)=>{
    return service({
        method:"GET",
        url:`/user/detail?uid=${data}`
    })
}
