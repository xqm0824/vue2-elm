<template>
  <div class="home">
    <div class="home-content">
      <div class="header">
        <div class="logo">ele.me</div>
        <div class="title" @click="toLogin" >登录|注册</div>
      </div>
      <div class="city-list" ref="wrapper">
        <div>
          <div class="select-city" >
            <div class="title">
              <span class="title-left">当前选择城市:</span>
              <span class="title-right">定位不准时，请在城市列表中选择</span>
            </div>
            <div class="city" >
              <span class="city_name" @click="toCity">北京</span>
              <i class="icon-keyboard_arrow_right icon_right"></i>
            </div>
          </div>
          <split></split>
          <div class="hot-city">
            <div class="title" >热门城市</div>
            <div class="hot-list">
              <div 
                class="hot"
                v-for="(hot,index) in hotcity"
                :key="index"
              >{{hot.name}}</div>
            </div>
          </div>
          <split></split>
          <div 
          class="area"
          v-for="(city, index) in getlist"
          :key="index"
          >
            <div class="title  ">{{index}}</div>
            <div 
              class="item-list"
            >
              <div 
                class="item "
                v-for="(item, index) in city"
                :key="index"
              >{{item.name}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  import { getAllCitys, getHotCitys} from 'api'
  import Split from 'components/split/split'

  export default {
    name: 'home',
    data() {
      return {
        citylist: {},
        hotcity: {}
      }
    },
    created() {
      this._getAllCitys(),
      this._getHotCitys()
    },
    computed: {
      getlist() {
          let mycitylist = {};
          for(let i=65;i<=90;i++){
            let num= String.fromCharCode(i);
            mycitylist[num]=this.citylist[num];
          }
          return mycitylist
      }
    },
    methods: {
      //城市列表
      _getAllCitys() {
        getAllCitys({
        }).then((citylist) => {
          this.citylist = citylist
        })
      },
      //热门城市
      _getHotCitys() {
        getHotCitys({
        }).then((hotcity) => {
          this.hotcity = hotcity
        })
      },
      toLogin() {
        this.$router.push('login')
      },
      toCity() {
        console.log("1")
      }
    },
    components: {
      Split
    },
    mounted () {
      this.scroll = new BScroll(this.$refs.wrapper)
    }
  }
</script>

<style lang="stylus" scoped>
  @import "~common/stylus/variable"
  @import "~common/stylus/mixin"

  .home
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
      color:  $color-white
      background: $color-background-sssss
      .logo
        left: 10px
        font-weight: 400
        font-size: 16px
        color: $color-white
        position: absolute
        top: 50%
        transform: translateY(-50%)
      .title
        right: 10px
        font-weight: 400
        font-size: 16px
        color: $color-white
        position: absolute
        top: 50%
        transform: translateY(-50%)

    .city-list
      overflow: hidden
      position: absolute
      top: 45px
      left: 0
      right: 0
      bottom: 0
      .select-city
        background-color: $color-white
        .title
          display: flex
          justify-content: space-between
          align-items: center
          line-height: 34px
          padding: 0 11px
          border-bottom: 1px solid #e4e4e4
          .title-left
            font-size: 13px
            color: #666
          .title-right
            font-size: 11px
            font-weight: 900
            color: #9f9f9f
        .city
          display: flex
          justify-content: space-between
          align-items: center
          height: 42px
          padding: 0 11px
          font-size: 18px
          .city_name
            color: $color-blue
          .icon_right
            font-size: 25px
            color: #999
      .hot-city
        background-color: $color-white
        .title
          font-size: 13px
          line-height: 27px
          padding-left: 10px
          color: #333333
          border-bottom: 1px solid #e4e4e4
        .hot-list
          overflow: hidden 
          text-align: center
          .hot
            width: 25%
            box-sizing:border-box
            font-size: 14px
            float: left
            height:40px
            line-height:40px
            box-sizing: border-box
            color: $color-blue
            border-right: 1px solid #e4e4e4
            border-bottom: 1px solid #e4e4e4
            &:nth-child(4n)
              border-right: 0px
      .area
        overflow: hidden
        background-color: $color-white
        .title
          font-size: 13px
          line-height: 27px
          padding-left: 10px
          color: #333333
          border-bottom: 1px solid #e4e4e4
        .item-list
          height: 100%
          width: 100%
          .item
            width:25%
            color: #333333
            float:left
            text-align:center
            height:40px
            font-size: 14px
            line-height:40px
            box-sizing: border-box
            white-space:nowrap
            overflow:hidden
            text-overflow:ellipsis
            border-right:1px solid #e4e4e4
            border-bottom:1px solid #e4e4e4 
            &:nth-child(4n)
              border-right: 0px

</style>
