<template>
  <div class="login">
    <svg class="icon" aria-hidden="true">
    <use xlink:href="#icon-wangyiyunyinle"></use>
    </svg>
    <van-form @submit="onSubmit" class="vanForm">
      <van-cell-group inset>
        <van-field
          v-model="phone"
          name="手机号"
          label="手机号"
          placeholder="用户名"
          :rules="[{ required: true, message: '请填写手机号' }]"
        />
        <van-field
          v-model="password"
          type="password"
          name="密码"
          label="密码"
          placeholder="密码"
          :rules="[{ required: true, message: '请填写密码' }]"
        />
      </van-cell-group>
      <div style="margin: 16px">
        <van-button round block type="primary" native-type="submit">
          提交
        </van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import { ref } from "vue";
import {reqLogin} from '@/request'
export default {
  setup() {
    const phone = ref("");
    const password = ref("");
    async function onSubmit(){
        let info={phone:phone.value,password:password.value}
        let res=await reqLogin(info)
        if(res.data.code===200){//如果返回的code等于200，说明登录成功，就跳转个人中心页面
          this.$store.commit('updateIsLogin',true)
          this.$store.commit('updateToken',res.data.token)
          let result=await getLoginUser(res.data.account.id)
          console.log(result);
          this.$store.commit('updateUser',result)
          this.$router.push('/infoUser')
          }else{
              alert("手机号码或者密码错误")
              this.password=''
          }
    }

    return {
      phone,
      password,
      onSubmit,
    };
  },
};
</script>

<style lang='less' scoped>
    .login{
        width: 100%;
        height: 10rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        svg{
            width: 1rem;
            height: 1rem;
            margin-bottom: 1.5rem;
        }
        .vanForm{
           
        }
    }
</style>