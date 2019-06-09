<template>
  <div class="home">
    <div class="header">
      <div class="logo">ele.me</div>
      <div class="title" @click="toLogin" >登录|注册</div>
    </div>
    <div class="city-list" >
      <cube-scroll :options="scrollOptions">
        <div class="select-city" >
          <div class="title">
            <span class="title-left">当前选择城市:</span>
            <span class="title-right">定位不准时，请在城市列表中选择</span>
          </div>
          <div class="city" @click="toCity({name: nowcity.name, id: nowcity.id})">
            <span class="city_name">{{nowcity.name}}</span>
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
              @click="toCity({name: hot.name, id: hot.id})"
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
              @click="toCity({name: item.name, id: item.id})"
            >{{item.name}}</div>
          </div>
        </div>
      </cube-scroll>
    </div>
  </div>
</template>

<script>
  import { getAllCitys, getHotCitys, guessCity} from 'api'
  import Split from 'components/split/split'
  import { mapState, mapMutations } from 'vuex'

  export default {
    name: 'home',
    data() {
      return {
        citylist: {},    //所有城市列表
        hotcity: {},     //热门城市列表
        guessCity: {},   //当前城市
        scrollOptions: {
          bounce: false  //取消顶部的弹性效果
        }
      }
    },
    mounted() {
      this._getAllCitys(),
      this._getHotCitys(),
      this._guessCity()
    },
    computed: {
      ...mapState({
        nowcity: 'nowcity'
      }),
      getlist() {  //字目排序
          let mycitylist = {};
          for(let i=65;i<=90;i++){
            let num= String.fromCharCode(i);
            mycitylist[num]=this.citylist[num];
          }
          return mycitylist
      }
    },
    methods: {
      ...mapMutations([
        'changeCity'
      ]),
      //所有的城市
      _getAllCitys() {
        getAllCitys({
        }).then((res) => {
          this.citylist = res
        })
      },
      //热门城市
      _getHotCitys() {
        getHotCitys({
        }).then((res) => {
          this.hotcity = res
        })
      },
      //定位城市
      _guessCity() {
        guessCity({
        }).then((res) => {
          this.guessCity = res
          this.changeCity({name: res.name, id: res.id})
        })
      },
      toLogin() {
        this.$router.push('login')
      },
      toCity(name) {
        this.$router.push('city'),
        this.changeCity(name)
      }
    },
    components: {
      Split
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
        line-height: 16px
        color: $color-white
        position: absolute
        top: 50%
        transform: translateY(-50%)

    .city-list
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
