<template>
  <div class="city-content">
    <div class="header">
      <i class="icon-arrow_lift back"></i>
      <span class="header-text">北京</span>
      <span class="change-city">切换城市</span>
    </div>
    <div class="city-wrapper">
      <cube-scroll :options="scrollOptions">
        <div class="city-form">
          <div class="city-input">
            <input class="city-input-content" placeholder="输入商务楼，学校，地址"></input>
          </div>
          <div class="button">提交</div>
        </div>
        <p>输入商务楼，学校，地址</p>
        <p>输入商务楼，学校，地址</p>
        <p>输入商务楼，学校，地址</p>
        <p>输入商务楼，学校，地址</p>
        <p>输入商务楼，学校，地址</p>
        <p>输入商务楼，学校，地址</p>
        <p>输入商务楼，学校，地址</p>
        <p>输入商务楼，学校，地址</p>
        <p>输入商务楼，学校，地址</p>
        <p>输入商务楼，学校，地址</p>
        <p>输入商务楼，学校，地址</p>
        <p>输入商务楼，学校，地址</p>
        <p>输入商务楼，学校，地址</p>
        <p>输入商务楼，学校，地址</p>
        <p>输入商务楼，学校，地址</p>
        <p>输入商务楼，学校，地址</p>
        <p>输入商务楼，学校，地址</p>
        <p>输入商务楼，学校，地址</p>
        <p>输入商务楼，学校，地址</p>
        <p>输入商务楼，学校，地址</p>
        <p>输入商务楼，学校，地址</p>
        <p>输入商务楼，学校，地址</p>
        <p>输入商务楼，学校，地址</p>
        <p>输入商务楼，学校，地址</p>
        <p>输入商务楼，学校，地址</p>
        <p>输入商务楼，学校，地址</p>
        <p>输入商务楼，学校，地址</p>
        <p>输入商务楼，学校，地址</p>
        <p>输入商务楼，学校，地址</p>
        <p>输入商务楼，学校，地址</p>
        <p>输入商务楼，学校，地址</p>
        <p>输入商务楼，学校，地址</p>
        <p>输入商务楼，学校，地址</p>
        <p>输入商务楼，学校，地址</p>
        <p>输入商务楼，学校，地址</p>
        <p>输入商务楼，学校，地址</p>
        <p>输入商务楼，学校，地址</p>
        <p>输入商务楼，学校，地址</p>
        <p>输入商务楼，学校，地址</p>
        <p>输入商务楼，学校，地址</p>
        <p>输入商务楼，学校，地址</p>
        <p>输入商务楼，学校，地址</p>
        <p>输入商务楼，学校，地址</p>
        <p>输入商务楼，学校，地址</p>
        <p>输入商务楼，学校，地址</p>
        <p>输入商务楼，学校，地址</p>
        <p>输入商务楼，学校，地址</p>
        <p>输入商务楼，学校，地址</p>
        <p>输入商务楼，学校，地址</p>
        <p>输入商务楼，学校，地址</p>
        <p>输入商务楼，学校，地址</p>
        <p>输入商务楼，学校，地址</p>
        <p>输入商务楼，学校，地址</p>
        <p>输入商务楼，学校，地址</p>
        <p>输入商务楼，学校，地址</p>
        <p>输入商务楼，学校，地址</p>
        <p>输入商务楼，学校，地址</p>
        <p>输入商务楼，学校，地址</p>
        <div class="search-history">搜索历史</div>
      </cube-scroll>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'city',
    data() {
      return {
        scrollOptions: {
          bounce: false //取消顶部的弹性效果
        }
      }
    },
    created() {

    },
    methods: {
    },
    computed: {
    },
    components: {

    }
  }
</script>

<style lang="stylus" scoped>
  @import "~common/stylus/variable"
  @import "~common/stylus/mixin"

  .city-content
    width: 100%
    height: 100%
    .header
      position: fixed
      z-index: 100
      left: 0
      top: 0
      width: 100%
      height: 25px
      padding: 10px 0
      line-height: 14px
      font-size: 14px
      text-align: center
      color:  $color-white
      background: $color-background-sssss 
      .back
        left: 10px
        font-weight: 400
        font-size: 16px
        color: $color-white
        position: absolute
        top: 50%
        transform: translateY(-50%)
      .header-text
        font-size: 16px
        line-height: 25px
        color: $color-white
      .change-city
        right: 10px
        font-weight: 400
        font-size: 16px
        color: $color-white
        position: absolute
        top: 50%
        transform: translateY(-50%)

    .city-wrapper
      height: 100%
      margin-top: 45px
      .city-form
        margin-top: 9px
        background-color: #fff
        border-top: 1px solid #e4e4e4
        border-bottom: 1px solid #e4e4e4
        padding: 9px 0
        .city-input
          width: 90%
          text-align: center
          margin: 0 auto
          .city-input-content
            width: 100%        
            height: 33px
            border: 1px solid #e4e4e4
            font-size: 15px
            margin-bottom: 9px
            border-radius: 2px
            padding: 0 7px
            box-sizing: border-box
            outline: none
        .button
          width: 90%
          height: 33px
          line-height: 33px
          text-align: center
          color: $color-white
          background-color: $color-blue
          margin: 0 auto



</style>