<template>
  <div class="login">
    <div class="header">
      <div class="back" @click="back">
        <i class="icon-arrow_lift"></i>
      </div>
      <div class="title_head">
        <span class="title_text">密码登录</span>
      </div>
    </div>
    <form class="loginForm">
      <div class="input_container border-bottom-1px">
        <input class="input" type="text" placeholder="账号"></input>
      </div>
      <div class="input_container input-wrapper border-bottom-1px">
        <input class="input" :type="mytype" placeholder="密码"></input>
        <cube-switch class="button_switch" v-model="value"></cube-switch>
      </div>
    </form>
    <p class="login_tips">温馨提示:未注册过的账号，登录时自动注册</p>
    <p class="login_tips">注册过的用户可凭账号密码登录</p>
    <div class="login_button">登录</div>
    <a href="#" class="to_forget">重置密码？</a>
  </div>
</template>

<script>
  export default {
    name: 'login',
    data() {
      return {
        value: true
      }
    },
    methods: {
      back() {
        this.$router.push('/')
      }
    },
    computed: {
      mytype() {
        return this.value?'password':'text'
      }
    }
  }
</script>

<style lang="stylus" scoped>
  @import "~common/stylus/variable"
  @import "~common/stylus/mixin"

  .login
    position: fixed
    left: 0
    top: 0
    width: 100%
    height: 100%
    .header
      position: relative
      width: 100%
      height: 25px
      padding: 10px 0
      line-height: 14px
      font-size: 14px
      text-align: center
      color: $color-white
      background: $color-background-sssss
      .back
        position: absolute 
        left: 0
        top: 50%
        width: 30px
        transform: translate(0,-50%)
        text-align: center
        font-size: 16px
        color: $color-white
      .title_head
        position: absolute
        top: 50%
        left: 50%
        transform: translate(-50%,-50%)
        width: 50%
        color: #fff
        text-align: center
        .title_text
          font-size: 19px
          font-weight: 700
          color: #fff
          text-align: center
    
    .loginForm
      margin-top: 14px
      background-color: $color-white
      .input_container
        display: flex
        justify-content: space-between
        padding: 14px 19px
        border-bottom: 1px solid #f1f1f1
        .input
          font-size: 16px
          color: #666666
          outline: none
    .login_tips
      font-size: 12px
      line-height: 12px
      color: $color-red
      padding: 9px 14px
    .login_button
      margin: 0 12px 23px
      font-size: 16px
      color: $color-white
      background-color: $color-green
      padding: 12px 0
      border: 1px
      border-radius: 4px 
      text-align: center
    .to_forget
      float: right
      font-size: 14px
      color: $color-blue
      margin-right: 7px


</style>