function remSize(){
    // 设备宽度
    let itSize=document.documentElement.clientWidth||window.innerWidth;
    // 最大宽度
    if(itSize>=750){
        itSize=750
    }
    // 最小宽度
    if(itSize<=375){
        itSize=375
    }
    // 设置html字体大小
    document.documentElement.style.fontSize=(itSize/7.5)+'px'
    // 设置body字体大小
    document.body.style.fontSize=0.3+'rem'
};
remSize();
window.onresize=function(){
    remSize()
}

