<template>
  <div class="city-content">
    <div class="header">
      <i class="icon-arrow_lift back" @click="goHome"></i>
      <span class="header-text">{{nowcity.name}}</span>
      <span class="change-city">切换城市</span>
    </div>
    <div class="city-wrapper" >
      <cube-scroll :options="scrollOptions">
        <div class="city-form">
          <div class="city-input">
            <input class="city-input-content" placeholder="输入商务楼，学校，地址"></input>
          </div>
          <div class="button">提交</div>
        </div>
        <div class="search-history">
          <div class="pois-search-history">搜索历史</div>
          <ul class="search-history-list">
            <li class="history-item"> 
              <h4 class="history-name">北京大学</h4>
              <p class="history-address">北京市海淀区颐和园路5号</p>
            </li>
            <li class="history-item"> 
              <h4 class="history-name">北京大学</h4>
              <p class="history-address">北京市海淀区颐和园路5号</p>
            </li>
          </ul>
          <div class="clear-all">清空所有</div>
        </div>
        <ul class="search-list">
          <li class="search-item"> 
            <h4 class="search-name">北京大学</h4>
            <p class="search-address">北京市海淀区颐和园路5号</p>
          </li>
        </ul>
      </cube-scroll>
    </div>
  </div>
</template>


<script>
  import { mapState } from 'vuex'

  export default {
    name: 'city',
    data() {
      return {
        inputval: '',
        list: '',
        scrollOptions: {
          bounce: false //取消顶部的弹性效果
        }
      }
    },
    methods: {
      goHome() {
        this.$router.push('/')
      }
    },
    computed: {
      ...mapState({
        nowcity: 'nowcity'
      })
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
        font-size: 19px
        line-height: 25px
        font-weight: 700
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
      position: absolute
      top: 45px
      left: 0
      right: 0
      bottom: 0
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

      .search-history
        .pois-search-history
          border-top: 1px solid #e4e4e4
          border-bottom: 1px solid #e4e4e4
          padding-left: 12px
          font: 11px/18px "Microsoft YaHei"
        .search-history-list
          background-color: $color-white
          border-top: 1px solid #e4e4e4
          .history-item
            margin: 0 auto
            padding-top: 15px
            border-bottom: 1px solid #e4e4e4
            .history-name
              width: 90%
              margin: 0 auto 8px
              font-size: 15px
              color: #333
            .history-address
              width: 90%
              margin: 0 auto 8px
              font-size: 11px
              color: #999
        .clear-all
          font-size: 16px
          line-height: 47px
          color: #666
          text-align: center
          background-color: $color-white

      .search-list
        background-color: $color-white
        border-top: 1px solid #e4e4e4
        .search-item
          margin: 0 auto
          padding-top: 15px
          border-bottom: 1px solid #e4e4e4
          .search-name
            width: 90%
            margin: 0 auto 8px
            font-size: 15px
            color: #333
          .search-address
            width: 90%
            margin: 0 auto 8px
            font-size: 11px
            color: #999
      
</style>